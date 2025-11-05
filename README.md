# BNP Paribas Virtual Assistant - Frontend 🏦✨

A modern, responsive web interface for the BNP Paribas Virtual Assistant chatbot. Built with Next.js 16 and deployed on Vercel, providing an elegant user experience for banking inquiries powered by AI.

## 🌐 Live Demo

**Production**: Deployed on Vercel

Experience the assistant live - ask questions about BNP Paribas products, services, and banking procedures in French or English!

## ✨ Features

- 🤖 **AI-Powered Chat Interface** - Intelligent responses using OpenAI GPT-4
- 🌍 **Multilingual Support** - Seamlessly handles French and English queries
- 📱 **Responsive Design** - Perfect experience on desktop, tablet, and mobile
- 🎨 **Modern UI/UX** - Clean, intuitive interface with smooth animations
- 🌓 **Dark/Light Mode** - Theme toggle for user preference
- ⚡ **Real-time Responses** - Fast, streaming-like chat experience
- 📚 **Source Attribution** - Displays references to official BNP Paribas documentation
- 🔒 **Secure Architecture** - Backend URL hidden via Next.js API routes

## 🏗️ Architecture

```
User Browser
    ↓
Next.js Frontend (Vercel)
    ↓
Next.js API Routes (/api/chat, /api/health)
    ↓
FastAPI Backend (Azure Container Instances)
    ↓
OpenAI GPT-4 + RAG System
```

### Key Components

- **Frontend**: Next.js 16 with React 19, TypeScript, Tailwind CSS
- **Backend API**: Configured via environment variables (see `.env` setup)
- **Deployment**: Vercel (frontend) + Azure Container Instances (backend)
- **AI Engine**: OpenAI GPT-4 with RAG (Retrieval-Augmented Generation)

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **Shadcn UI** - High-quality UI components

### Backend Integration
- **Next.js API Routes** - Server-side proxy to FastAPI
- **FastAPI** - High-performance Python backend
- **OpenAI GPT-4** - Advanced language model
- **LangChain** - RAG orchestration
- **ChromaDB** - Vector database for semantic search

## 🚀 Getting Started

### Prerequisites

- **Node.js 20+** and npm/yarn/pnpm
- **Git** for cloning the repository

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/oussama95boussaid/bnp-paribas-chatbot-assistant-frontend.git
cd bnp-paribas-chatbot-assistant-frontend
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```bash
# Backend API URL (Azure Container Instance or your deployment)
FASTAPI_URL=http://your-backend-api-url:8000
```

> **Note**: Replace `your-backend-api-url` with your actual FastAPI backend endpoint.

4. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
bnp-paribas-chatbot-assistant-frontend/
├── app/                           # Next.js App Router
│   ├── api/                      # API routes (proxy to FastAPI)
│   │   ├── chat/route.ts        # Chat endpoint
│   │   └── health/route.ts      # Health check
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── Components/                   # React components
│   ├── bnp-assistant.tsx        # Main chat component
│   ├── landing-view.tsx         # Landing page view
│   └── chat-view.tsx            # Alternative chat view
├── components/ui/               # Shadcn UI components
│   └── button.tsx               # Button component
├── public/                      # Static assets
├── .env                         # Environment variables
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🔧 Configuration

### Environment Variables

Required for deployment:

| Variable | Description | Example |
|----------|-------------|---------|
| `FASTAPI_URL` | Backend API endpoint | `http://your-backend-api.azurecontainer.io:8000` |

### Vercel Deployment

The app is configured for automatic deployment on Vercel. To deploy your own instance:

1. **Fork this repository**
2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your forked repository
3. **Add environment variables**
   - Add `FASTAPI_URL` in Vercel project settings
4. **Deploy!** 🚀

## 🎨 Customization

### Change Theme Colors

Edit `app/globals.css`:

```css
:root {
  --primary: 142 76% 36%;  /* BNP Green */
  --secondary: 210 40% 96%;
  /* ... more theme variables */
}
```

### Modify Chat Behavior

Edit `Components/bnp-assistant.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  // Customize chat logic here
  const response = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ question: input })
  });
};
```

## 🧪 Testing

### Health Check

Test if the backend is connected:

```bash
# For local development
curl http://localhost:3000/api/health

# For production (replace with your deployment URL)
curl https://your-frontend-url.vercel.app/api/health
```

### Local Testing

```bash
# Run type checking
npx tsc --noEmit

# Run linting
npm run lint

# Build for production (test)
npm run build
```

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- 🚀 **First Contentful Paint**: < 1.5s
- 📦 **Bundle Size**: Optimized with Next.js automatic code splitting
- 🌐 **CDN**: Global edge network via Vercel

## 🔗 Related Projects

- **Backend Repository**: [BNP Paribas Virtual Assistant Backend](https://github.com/oussama95boussaid/-BNP-Paribas-virtuel-assistant-Chatbot)
- **Portfolio**: [Developer Portfolio](https://oussamaboussaidportfolio.vercel.app/)


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Oussama Boussaid**
- GitHub: [@oussama95boussaid](https://github.com/oussama95boussaid)
- LinkedIn: [Oussama Boussaid](https://www.linkedin.com/in/oussama-boussaid/)



