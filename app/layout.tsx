import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adeliaramp.github.io'),
  title: 'Adelia Ramadhani Putri | Senior Data Analyst',
  description:
    'Senior Data Analyst with 4+ years in health tech, e-commerce fraud, and ride-hailing analytics. Portfolio, writing, and contact.',
  openGraph: {
    title: 'Adelia Ramadhani Putri | Senior Data Analyst',
    description:
      'Senior Data Analyst with 4+ years in health tech, e-commerce fraud, and ride-hailing analytics.',
    url: 'https://adeliaramp.github.io',
    siteName: 'Adelia Ramadhani Putri',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  )
}
