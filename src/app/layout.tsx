import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { Sidebar } from '@/components/Sidebar'
import { Providers } from './providers'

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
    <html suppressHydrationWarning lang="pt-BR" className="antialiased">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen lg:grid lg:grid-cols-app dark:bg-zinc-900">
            <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
              <Sidebar />

              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
