import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            스타트업 기장은{' '}
            <span className="text-primary-600">다릅니다</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            스타트업의 첫 번째 목표는 빠른 속도로 기업가치를 높이는 것입니다.<br />
            정확한 회계관리로 투자유치와 성장을 함께 준비하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/consultation" className="btn-primary">
              무료 상담 신청
            </Link>
            <Link href="#solutions" className="btn-secondary">
              서비스 알아보기
            </Link>
          </div>
        </div>

        {/* 통계 정보 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">스타트업 고객사</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">1,000억+</div>
            <div className="text-gray-600">투자유치 지원</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">10년+</div>
            <div className="text-gray-600">스타트업 전문 경험</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero