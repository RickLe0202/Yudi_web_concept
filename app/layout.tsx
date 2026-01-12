import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/utils/providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yudi - Modern Chat Application',
  description: 'Connect, chat, and collaborate with Yudi - the modern chat application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className="
          min-h-screen
          bg-white text-gray-900
          dark:bg-gray-950 dark:text-gray-100
          transition-colors duration-300
        "
      >
        <Providers>
          <main className="relative z-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
