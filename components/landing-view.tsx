// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { Sparkles, CreditCard, PiggyBank, TrendingUp, Shield, ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"

// interface LandingViewProps {
//   isVisible: boolean
//   onStartChat: () => void
// }

// const products = [
//   {
//     icon: CreditCard,
//     title: "Cartes Bancaires",
//     description: "Découvrez nos cartes adaptées à vos besoins",
//     gradient: "from-primary/20 to-primary/5",
//   },
//   {
//     icon: PiggyBank,
//     title: "Comptes Épargne",
//     description: "Faites fructifier votre argent en toute sécurité",
//     gradient: "from-chart-2/20 to-chart-2/5",
//   },
//   {
//     icon: TrendingUp,
//     title: "Investissements",
//     description: "Construisez votre patrimoine avec nos solutions",
//     gradient: "from-chart-3/20 to-chart-3/5",
//   },
//   {
//     icon: Shield,
//     title: "Assurances",
//     description: "Protégez ce qui compte le plus pour vous",
//     gradient: "from-chart-4/20 to-chart-4/5",
//   },
// ]

// export function LandingView({ isVisible, onStartChat }: LandingViewProps) {
//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.5 }}
//           className="relative min-h-screen"
//         >
//           {/* Hero Section */}
//           <div className="relative min-h-screen flex flex-col">
//             {/* Header */}
//             <motion.header
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="fixed top-0 left-0 right-0 z-50 glass-strong"
//             >
//               <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
//                     <Sparkles className="w-6 h-6 text-primary-foreground" />
//                   </div>
//                   <span className="text-xl font-bold">BNP Paribas</span>
//                 </div>
//                 <Button onClick={onStartChat} className="bg-primary hover:bg-primary/90 text-primary-foreground">
//                   Parler à l'Assistant
//                   <ArrowRight className="ml-2 w-4 h-4" />
//                 </Button>
//               </div>
//             </motion.header>

//             {/* Hero Content */}
//             <div className="flex-1 container mx-auto px-6 pt-32 pb-20">
//               <div className="max-w-4xl mx-auto text-center space-y-8">
//                 <motion.div
//                   initial={{ y: 30, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="space-y-4"
//                 >
//                   <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance">
//                     Votre assistant
//                     <br />
//                     <span className="text-gradient">bancaire intelligent</span>
//                   </h1>
//                   <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
//                     Posez vos questions sur nos produits et services bancaires. Notre assistant IA vous répond
//                     instantanément.
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   initial={{ y: 30, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="flex flex-col sm:flex-row gap-4 justify-center"
//                 >
//                   <Button
//                     size="lg"
//                     onClick={onStartChat}
//                     className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-2xl"
//                   >
//                     <Sparkles className="mr-2 w-5 h-5" />
//                     Commencer la conversation
//                   </Button>
//                 </motion.div>
//               </div>

//               {/* Products Grid */}
//               <motion.div
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//                 className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//               >
//                 {products.map((product, index) => (
//                   <motion.div
//                     key={product.title}
//                     initial={{ y: 30, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.6 + index * 0.1 }}
//                   >
//                     <Card
//                       className={`glass p-6 hover:glass-strong transition-all duration-300 cursor-pointer group h-full bg-gradient-to-br ${product.gradient}`}
//                     >
//                       <div className="space-y-4">
//                         <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                           <product.icon className="w-6 h-6 text-primary" />
//                         </div>
//                         <div>
//                           <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
//                           <p className="text-sm text-muted-foreground text-pretty">{product.description}</p>
//                         </div>
//                       </div>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* CTA Section */}
//               <motion.div
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.9 }}
//                 className="mt-24 text-center"
//               >
//                 <Card className="glass-strong p-12 max-w-3xl mx-auto">
//                   <div className="space-y-6">
//                     <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
//                       <Sparkles className="w-8 h-8 text-primary" />
//                     </div>
//                     <h2 className="text-3xl font-bold">Des questions sur nos produits ?</h2>
//                     <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
//                       Notre assistant IA connaît tous nos produits et services. Posez vos questions en français ou en
//                       anglais.
//                     </p>
//                     <Button
//                       size="lg"
//                       onClick={onStartChat}
//                       className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-2xl"
//                     >
//                       Poser une question
//                       <ArrowRight className="ml-2 w-5 h-5" />
//                     </Button>
//                   </div>
//                 </Card>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

"use client"

import { Sparkles, Zap, Shield, Clock, Globe, Brain, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

interface LandingViewProps {
  isChatOpen: boolean
}

const advantages = [
  {
    icon: Zap,
    title: "Réponses Instantanées",
    description: "Obtenez des réponses immédiates à vos questions bancaires, 24h/24 et 7j/7",
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Propulsé par l'IA pour comprendre vos besoins et fournir des réponses précises",
  },
  {
    icon: Shield,
    title: "Sécurisé et Confidentiel",
    description: "Vos conversations sont protégées avec les plus hauts standards de sécurité",
  },
  {
    icon: Globe,
    title: "Multilingue",
    description: "Posez vos questions en français ou en anglais, l'assistant s'adapte à vous",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Accédez à l'assistance bancaire à tout moment, où que vous soyez",
  },
  {
    icon: CheckCircle2,
    title: "Informations Vérifiées",
    description: "Toutes les réponses sont basées sur la documentation officielle BNP Paribas",
  },
]

const features = [
  "Informations sur les comptes et cartes bancaires",
  "Détails sur les produits d'épargne et d'investissement",
  "Conseils sur les prêts et crédits",
  "Assistance pour les services en ligne",
  "Explications sur les frais et tarifs",
  "Guidance sur les procédures bancaires",
]

export function LandingView({ isChatOpen }: LandingViewProps) {
  return (
    <div className={`transition-all duration-500 ${isChatOpen ? "md:mr-[28rem] lg:mr-[32rem]" : ""}`}>
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Assistant Bancaire Intelligent
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Votre assistant
              <br />
              <span className="text-gradient">BNP Paribas</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Posez toutes vos questions sur nos produits et services bancaires. Notre assistant intelligent vous répond
              instantanément avec des informations précises et personnalisées.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pourquoi utiliser notre assistant IA ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {advantages.map((advantage) => (
                <Card
                  key={advantage.title}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <advantage.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <Card className="p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-transparent border-2">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Ce que l'assistant peut faire pour vous</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                    Notre assistant IA est formé sur l'ensemble de la documentation BNP Paribas pour vous aider dans
                    tous vos besoins bancaires.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* How it works */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Comment ça marche ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-2xl font-bold text-primary">
                  1
                </div>
                <h3 className="text-xl font-semibold">Posez votre question</h3>
                <p className="text-muted-foreground text-pretty">
                  Utilisez l'input en bas de page pour poser votre question en langage naturel
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-2xl font-bold text-primary">
                  2
                </div>
                <h3 className="text-xl font-semibold">L'IA analyse</h3>
                <p className="text-muted-foreground text-pretty">
                  Notre assistant recherche dans la base de connaissances BNP Paribas
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-2xl font-bold text-primary">
                  3
                </div>
                <h3 className="text-xl font-semibold">Recevez la réponse</h3>
                <p className="text-muted-foreground text-pretty">
                  Obtenez une réponse précise et personnalisée instantanément
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
