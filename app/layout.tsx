import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const title = 'Yashraj Sah — Agentic AI Engineer | Generative AI | LLM Engineering'
const description =
  'Yashraj Sah is an Agentic AI and Generative AI engineer building LLM-powered applications, multi-agent systems, intelligent automation and production-oriented software.'

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: 'Yashraj Sah' }],
  keywords: [
    'Yashraj Sah',
    'Agentic AI Engineer',
    'Generative AI Engineer',
    'LLM Engineer',
    'AI/ML Engineer',
    'RAG',
    'Multi-Agent Systems',
    'LangChain',
    'LangGraph',
    'FastAPI',
    'Pune',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Yashraj Sah — Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#05070d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
