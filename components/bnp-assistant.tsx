// "use client"

// import type React from "react"
// import { useState, useRef, useEffect } from "react"
// import { Sparkles, Maximize2, Trash2, X, Settings, ThumbsUp, ThumbsDown, Copy, RefreshCw } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface Message {
//   id: string
//   type: "user" | "assistant"
//   content: string
//   status?: "searching" | "generating" | "complete"
// }

// export function BNPAssistant() {
//   const [messages, setMessages] = useState<Message[]>([])
//   const [input, setInput] = useState("")
//   const [isChatOpen, setIsChatOpen] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)
//   const inputRef = useRef<HTMLInputElement>(null)
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }

//   useEffect(() => {
//     scrollToBottom()
//   }, [messages])

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!input.trim() || isLoading) return

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       type: "user",
//       content: input.trim(),
//     }

//     setMessages((prev) => [...prev, userMessage])
//     const questionText = input.trim()
//     setInput("")
//     setIsChatOpen(true)
//     setIsLoading(true)

//     // Add searching status
//     const searchingMessage: Message = {
//       id: (Date.now() + 1).toString(),
//       type: "assistant",
//       content: `Searched ${questionText}`,
//       status: "searching",
//     }
//     setMessages((prev) => [...prev, searchingMessage])

//     try {
//       // Call your FastAPI backend
//       const response = await fetch("http://localhost:8000/query", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           question: questionText,
//           language: "en",
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to get response")
//       }

//       const data = await response.json()

//       // Remove searching message and add final response
//       const assistantMessage: Message = {
//         id: (Date.now() + 2).toString(),
//         type: "assistant",
//         content: data.answer || "I couldn't find specific information in the BNP Paribas documentation.",
//         status: "complete",
//       }

//       setMessages((prev) => [...prev.filter((msg) => msg.id !== searchingMessage.id), assistantMessage])
//     } catch (error) {
//       console.error("[v0] Error calling API:", error)
//       setMessages((prev) => [
//         ...prev.filter((msg) => msg.id !== searchingMessage.id),
//         {
//           id: (Date.now() + 2).toString(),
//           type: "assistant",
//           content: "Sorry, I encountered an error connecting to the assistant. Please try again.",
//           status: "complete",
//         },
//       ])
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleReset = () => {
//     setMessages([])
//     setIsChatOpen(false)
//     setInput("")
//   }

//   return (
//     <div className="relative min-h-screen bg-black">
//       {/* Landing Page Content */}
//       <div className="container mx-auto px-6 py-12">
//         <div className="mb-16 text-center">
//           <h1 className="mb-4 text-5xl font-bold text-white">BNP Paribas</h1>
//           <p className="text-xl text-zinc-400">Your trusted banking partner</p>
//         </div>

//         {/* Banking Products Grid */}
//         <div className="mx-auto mb-32 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {/* Credit Cards */}
//           <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-[#00A651]/50">
//             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A651]/10">
//               <svg className="h-6 w-6 text-[#00A651]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2" />
//                 <path d="M2 10h20" strokeWidth="2" />
//               </svg>
//             </div>
//             <h3 className="mb-2 text-lg font-semibold text-white">Credit Cards</h3>
//             <p className="text-sm text-zinc-400">Premium cards with exclusive benefits and rewards</p>
//           </div>

//           {/* Savings */}
//           <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-[#00A651]/50">
//             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A651]/10">
//               <svg className="h-6 w-6 text-[#00A651]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeWidth="2" />
//               </svg>
//             </div>
//             <h3 className="mb-2 text-lg font-semibold text-white">Savings</h3>
//             <p className="text-sm text-zinc-400">Competitive rates and flexible savings options</p>
//           </div>

//           {/* Loans */}
//           <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-[#00A651]/50">
//             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A651]/10">
//               <svg className="h-6 w-6 text-[#00A651]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path
//                   d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//             <h3 className="mb-2 text-lg font-semibold text-white">Loans</h3>
//             <p className="text-sm text-zinc-400">Personal and home loans with attractive rates</p>
//           </div>

//           {/* Investments */}
//           <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-[#00A651]/50">
//             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A651]/10">
//               <svg className="h-6 w-6 text-[#00A651]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path d="M3 3v18h18 M7 16l4-4 4 4 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </div>
//             <h3 className="mb-2 text-lg font-semibold text-white">Investments</h3>
//             <p className="text-sm text-zinc-400">Grow your wealth with expert investment solutions</p>
//           </div>
//         </div>
//       </div>

//       {/* Chat Sidebar - slides in from right */}
//       <div
//         className={`fixed inset-y-0 right-0 z-50 w-full max-w-md transform border-l border-zinc-800 bg-black transition-transform duration-500 ease-in-out md:max-w-lg ${
//           isChatOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex h-full flex-col">
//           {/* Chat Header */}
//           <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
//             <div className="flex items-center gap-2">
//               <Sparkles className="h-5 w-5 text-[#00A651]" />
//               <span className="font-medium text-white">Assistant</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
//                 <Maximize2 className="h-4 w-4" />
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="h-8 w-8 text-zinc-400 hover:text-white"
//                 onClick={handleReset}
//               >
//                 <Trash2 className="h-4 w-4" />
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="h-8 w-8 text-zinc-400 hover:text-white"
//                 onClick={() => setIsChatOpen(false)}
//               >
//                 <X className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           {/* Messages Area */}
//           <div className="flex-1 overflow-y-auto px-6 py-6">
//             <div className="space-y-6">
//               {messages.map((message) => (
//                 <div key={message.id}>
//                   {message.type === "user" ? (
//                     <div className="flex justify-end">
//                       <div className="rounded-2xl bg-zinc-800 px-4 py-2 text-sm text-white">{message.content}</div>
//                     </div>
//                   ) : (
//                     <div className="space-y-4">
//                       {message.status === "searching" && (
//                         <div className="flex items-center gap-2 text-sm text-zinc-400">
//                           <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <circle cx="11" cy="11" r="8" strokeWidth="2" />
//                             <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
//                           </svg>
//                           {message.content}
//                         </div>
//                       )}
//                       {message.status === "complete" && (
//                         <div className="space-y-4">
//                           <div className="text-sm leading-relaxed text-white">{message.content}</div>
//                           {/* Feedback buttons */}
//                           <div className="flex items-center gap-2">
//                             <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
//                               <ThumbsUp className="h-4 w-4" />
//                             </Button>
//                             <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
//                               <ThumbsDown className="h-4 w-4" />
//                             </Button>
//                             <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
//                               <Copy className="h-4 w-4" />
//                             </Button>
//                             <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
//                               <RefreshCw className="h-4 w-4" />
//                             </Button>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>
//           </div>

//           {/* Chat Input - inside sidebar */}
//           <div className="border-t border-zinc-800 p-4">
//             <form onSubmit={handleSubmit} className="relative">
//               <input
//                 ref={inputRef}
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Ask a question..."
//                 disabled={isLoading}
//                 className="w-full rounded-full border border-zinc-800 bg-zinc-900 px-6 py-3 pr-14 text-sm text-white placeholder-zinc-500 focus:border-zinc-700 focus:outline-none disabled:opacity-50"
//               />
//               <Button
//                 type="button"
//                 size="icon"
//                 className="absolute right-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-[#00A651] hover:bg-[#00A651]/90"
//               >
//                 <Settings className="h-4 w-4 text-white" />
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Centered Input - Initial State */}
//       {!isChatOpen && (
//         <div className="fixed bottom-8 left-1/2 w-full max-w-2xl -translate-x-1/2 px-6">
//           <form onSubmit={handleSubmit} className="relative">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Ask a question..."
//               className="w-full rounded-full border border-zinc-800 bg-zinc-900/80 px-6 py-4 pr-24 text-white placeholder-zinc-500 backdrop-blur-sm transition-all focus:border-zinc-700 focus:bg-zinc-900 focus:outline-none"
//             />
//             <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1 text-xs text-zinc-500">
//               <kbd className="rounded bg-zinc-800 px-2 py-1 font-mono">Ctrl</kbd>
//               <span className="text-base">↑</span>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   )
// }

"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Maximize2,
  Minimize2,
  Trash2,
  X,
  Send,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RefreshCw,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingView } from "@/components/landing-view";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  status?: "searching" | "generating" | "complete";
}

export function BNPAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const questionText = input.trim();
    setInput("");
    setIsChatOpen(true);
    setIsLoading(true);

    // Add searching status
    const searchingMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "assistant",
      content: `Searched ${questionText}`,
      status: "searching",
    };
    setMessages((prev) => [...prev, searchingMessage]);

    try {
      // Call your FastAPI backend
      const response = await fetch("http://localhost:8000/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: questionText,
          language: "en",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      // Remove searching message and add final response
      const assistantMessage: Message = {
        id: (Date.now() + 2).toString(),
        type: "assistant",
        content:
          data.answer ||
          "I couldn't find specific information in the BNP Paribas documentation.",
        status: "complete",
      };

      setMessages((prev) => [
        ...prev.filter((msg) => msg.id !== searchingMessage.id),
        assistantMessage,
      ]);
    } catch (error) {
      console.error("Error calling API:", error);
      setMessages((prev) => [
        ...prev.filter((msg) => msg.id !== searchingMessage.id),
        {
          id: (Date.now() + 2).toString(),
          type: "assistant",
          content:
            "Sorry, I encountered an error connecting to the assistant. Please try again.",
          status: "complete",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setIsChatOpen(false);
    setIsMaximized(false);
    setInput("");
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="fixed top-4 left-4 z-50 rounded-full"
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>

      <LandingView isChatOpen={isChatOpen} />

      {/* Chat Sidebar - slides in from right */}
      <div
        className={
          isMaximized
            ? `fixed inset-y-0 right-0 z-40 w-full md:w-1/2 max-w-none transform border-l border-border bg-background transition-transform duration-500 ease-in-out ${
                isChatOpen ? "translate-x-0" : "translate-x-full"
              }`
            : `fixed inset-y-0 right-0 z-40 w-full max-w-md transform border-l border-border bg-background transition-transform duration-500 ease-in-out md:max-w-lg ${
                isChatOpen ? "translate-x-0" : "translate-x-full"
              }`
        }
      >
        <div className="flex h-full flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-medium">Assistant</span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                aria-label={isMaximized ? "Restore chat size" : "Maximize chat"}
                onClick={() => setIsMaximized((v) => !v)}
              >
                {isMaximized ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleReset}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => {
                  setIsChatOpen(false);
                  setIsMaximized(false);
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="space-y-6">
              {messages.map((message) => (
                <div key={message.id}>
                  {message.type === "user" ? (
                    <div className="flex justify-end">
                      <div className="rounded-2xl bg-muted px-4 py-2 text-sm">
                        {message.content}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {message.status === "searching" && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <circle cx="11" cy="11" r="8" strokeWidth="2" />
                            <path
                              d="m21 21-4.35-4.35"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                          {message.content}
                        </div>
                      )}
                      {message.status === "complete" && (
                        <div className="space-y-4">
                          <div className="text-sm leading-relaxed">
                            {message.content}
                          </div>
                          {/* Feedback buttons */}
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <ThumbsUp className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <ThumbsDown className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat Input - inside sidebar */}
          <div className="border-t border-border p-4">
            <form onSubmit={handleSubmit} className="relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={isLoading}
                className="w-full rounded-full border border-border bg-muted px-6 py-3 pr-14 text-sm placeholder-muted-foreground focus:border-ring focus:outline-none disabled:opacity-50"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4 text-primary-foreground" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Centered Input - Initial State */}
      {!isChatOpen && (
        <div className="fixed bottom-8 left-1/2 w-full max-w-md -translate-x-1/2 px-6 z-30">
          <form id="bnp-chat-form" onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="w-full rounded-full border border-border bg-card/80 px-6 py-4 pr-24 placeholder-muted-foreground backdrop-blur-sm transition-all focus:border-ring focus:bg-card focus:outline-none"
            />

            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Sparkles
                onClick={() =>
                  (document.getElementById("bnp-chat-form") as HTMLFormElement | null)
                    ?.requestSubmit()
                }
                className="h-5 w-5 "
                color="green"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
