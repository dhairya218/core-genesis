import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Sora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-be-vietnam-pro',
})

const sora = Sora({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-sora',
})

export const metadata: Metadata = {
  title: 'CoreGenesis',
  description: 'Your trusted partner in digital transformation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${beVietnamPro.variable} ${sora.variable}`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 