import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'jhtn',
  description: 'Jhonatan Lemes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" data-theme="light" className="scroll-smooth">
      <body className="{inter.className}">{children}</body>
    </html>
  )
}
