import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://adhd-guide.vercel.app'),
  title: {
    template: '%s | ADHD Guide',
    default: 'ADHD Guide — Plain-Language Education',
  },
  description:
    'Understand ADHD across every life stage — from early childhood to later life. Evidence-based guides to symptoms, types, brain chemistry, and what actually helps.',
  openGraph: {
    title: 'ADHD Guide — Plain-Language Education',
    description: 'Understand ADHD across every life stage — from early childhood to later life. Evidence-based guides to symptoms, types, brain chemistry, and what actually helps.',
    url: '/',
    siteName: 'ADHD Guide',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADHD Guide — Plain-Language Education',
    description: 'Understand ADHD across every life stage — from early childhood to later life. Evidence-based guides to symptoms, types, brain chemistry, and what actually helps.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-800">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
