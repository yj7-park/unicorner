import { NextRequest, NextResponse } from 'next/server'

// API 라우트가 동적으로 동작하도록 설정
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, phone, email, service, message } = body

    // 필수 필드 검증
    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      )
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식이 아닙니다.' },
        { status: 400 }
      )
    }

    // 서비스 타입 매핑
    const serviceLabels: { [key: string]: string } = {
      'tax-accounting': '세무회계서비스',
      'corporation': '법인설립지원',
      'taxtome': 'TAX TO ME 솔루션',
      'consultation': '기타 상담'
    }

    // 이메일 내용 구성
    const emailContent = `
=== TaxToMe 상담 신청 ===

📋 신청자 정보:
• 이름: ${name}
• 회사: ${company || '미입력'}
• 연락처: ${phone}
• 이메일: ${email}

🔧 관심 서비스:
${serviceLabels[service] || service}

💬 상담 내용:
${message || '상담 내용 없음'}

접수 시간: ${new Date().toLocaleString('ko-KR')}
    `.trim()

    // 실제 환경에서는 여기서 실제 이메일 서비스를 사용합니다
    // 예: Nodemailer, SendGrid, AWS SES 등
    console.log('=== 이메일 전송 시뮬레이션 ===')
    console.log('받는 사람: contact@taxtome.kr')
    console.log('제목: [TaxToMe] 새로운 상담 신청')
    console.log('내용:')
    console.log(emailContent)
    console.log('==============================')

    // 개발 환경에서는 시뮬레이션으로 대체
    // 실제 이메일 전송 로직은 여기에 구현
    await new Promise(resolve => setTimeout(resolve, 1000)) // 전송 시뮬레이션

    return NextResponse.json(
      { 
        success: true, 
        message: '상담 신청이 성공적으로 전송되었습니다.',
        data: {
          name,
          email,
          service: serviceLabels[service] || service,
          timestamp: new Date().toISOString()
        }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('이메일 전송 오류:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    )
  }
}
