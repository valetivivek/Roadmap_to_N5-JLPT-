import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JLPT N5 Study Roadmap - Master Japanese in 20 Weeks',
  description: 'Structured 20-week JLPT N5 study plan with 8 hiragana per day. Complete roadmap with progress tracking, resources, and daily tasks for Japanese language mastery.',
  keywords: [
    'JLPT N5', 'Japanese language learning', 'hiragana katakana', 'Japanese study plan', 
    'JLPT preparation', 'Japanese vocabulary', 'Japanese grammar', 'language roadmap',
    'Japanese beginner', 'N5 exam', 'Japanese characters', 'study tracker'
  ],
  authors: [{ name: 'JLPT N5 Study Team' }],
  creator: 'JLPT N5 Study Roadmap',
  publisher: 'JLPT N5 Study Roadmap',
  robots: 'index, follow',
  openGraph: {
    title: 'JLPT N5 Study Roadmap - Master Japanese in 20 Weeks',
    description: 'Complete 20-week structured study plan for JLPT N5 with daily hiragana practice, vocabulary building, and progress tracking.',
    type: 'website',
    locale: 'en_US',
    siteName: 'JLPT N5 Study Roadmap',
    url: 'https://jlpt-n5-roadmap.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JLPT N5 Study Roadmap - Master Japanese in 20 Weeks',
    description: 'Complete 20-week structured study plan for JLPT N5 with daily hiragana practice and progress tracking.',
    creator: '@jlptn5roadmap',
  },
  alternates: {
    canonical: 'https://jlpt-n5-roadmap.com',
  },
  category: 'Education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <TopNav />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  )
}
