import './globals.css'
import type { Metadata } from 'next'
import VSCodeClassFixer from '../components/VSCodeClassFixer'

export const metadata: Metadata = {
  title: 'The Daily Catch',
  description: 'Find your next great fishing spot',
  icons: {
    icon: './img/smallLogo.png', 
    shortcut: './img/smallLogo.png', 
    apple: './img/smallLogo.png', 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <VSCodeClassFixer />
        {children}
      </body>
    </html>
  )
}