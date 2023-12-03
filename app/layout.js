import { Inter, Press_Start_2P } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const pressStart = Press_Start_2P(
  {
    weight: '400',
    display: 'swap',
    subsets: ['latin'],
  }
)

export const metadata = {
  title: 'The Barber Sistema',
  description: 'The Barber Sistema',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" data-theme="light">
      <body className={pressStart.className + ' min-h-screen'}>{children}</body>
    </html>
  )
}
