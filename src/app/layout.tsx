import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roadmap to N5 - JLPT Study Tracker',
  description: 'Master Japanese fundamentals with our structured 20-week study plan. Track your progress and achieve your JLPT N5 goals.',
  keywords: ['JLPT', 'N5', 'Japanese', 'language learning', 'study tracker', 'roadmap'],
  authors: [{ name: 'Roadmap to N5 Team' }],
  openGraph: {
    title: 'Roadmap to N5 - JLPT Study Tracker',
    description: 'Master Japanese fundamentals with our structured 20-week study plan.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roadmap to N5 - JLPT Study Tracker',
    description: 'Master Japanese fundamentals with our structured 20-week study plan.',
  },
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
        </div>
      </body>
    </html>
  )
}
