import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Qianyu Fu - Artist Portfolio',
  description: 'Portfolio of Qianyu Fu, a multidisciplinary artist exploring themes about the definition of home, identity, and the perception of truth in social-political contexts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
} 