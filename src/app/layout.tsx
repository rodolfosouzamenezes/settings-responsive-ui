import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Settings UI',
  description: 'Responsividade com TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="grid-cols-app grid min-h-screen">
          <Sidebar />
          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
