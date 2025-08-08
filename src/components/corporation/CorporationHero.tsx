import Link from 'next/link'

const CorporationHero = () => {
  return (
    <section className="bg-gradient-to-br from-secondary-50 to-primary-50 section-padding">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-secondary-600">스타트업 전문</span><br />
            회계사와 변호사가 함께하는<br />
            <span className="text-primary-600">법인 설립 지원 서비스</span>로 시작하세요
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            단순한 법인설립이 아닌, 스타트업의 미래를 함께 설계하는<br />
            전문가 파트너와 시작하세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/consultation" className="btn-primary">
              법인설립 상담
            </Link>
            <Link href="#differences" className="btn-secondary">
              차별점 알아보기
            </Link>
          </div>
        </div>

        {/* 특징 강조 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚖️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">회계사 + 변호사</h3>
            <p className="text-gray-600">전문가 협업으로 완벽한 법인설립</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">스타트업 특화</h3>
            <p className="text-gray-600">투자유치와 성장을 고려한 설립</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">원스탑 서비스</h3>
            <p className="text-gray-600">설립부터 세무까지 연속 지원</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CorporationHero
