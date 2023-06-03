import './globals.css'
import Nav from '@/components/Nav'
import { questrial } from '@/public/font/f'

export const metadata = {
  title: 'Telegram to MT4',
  description: 'Buy Telegram Bots',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${questrial.className} bg-clr-5 relative w-full`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
