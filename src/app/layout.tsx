import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'TaxToMe - 스타트업 전문 세무회계 서비스',
  description: '스타트업의 성장을 위한 전문 세무회계 서비스, 법인설립지원, AI 세무솔루션을 제공합니다.',
  keywords: '세무회계, 스타트업, 법인설립, 세무대리, 기장대행, CFO아웃소싱',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
