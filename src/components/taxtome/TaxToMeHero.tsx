import Link from 'next/link'
import { BarChart3, TrendingUp, Brain, Users } from 'lucide-react'

const TaxToMeHero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-primary-50 to-secondary-50 section-padding">
      <div className="container-max">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-block bg-purple-100 text-purple-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              AI 세무 솔루션
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-purple-600">AI가 분석하는</span><br />
              나만의 세무 인사이트<br />
              <span className="text-primary-600">TAX TO ME</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            과거의 나와 오늘의 나, 오늘의 남과 오늘의 나를 비교 분석하여<br />
            개인화된 세무 전략과 인사이트를 제공하는 회원제 솔루션입니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/consultation" className="btn-primary">
              회원가입 문의
            </Link>
            <Link href="#features" className="btn-secondary">
              기능 알아보기
            </Link>
          </div>

          {/* 베타 안내 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
              <span className="text-lg font-bold text-gray-900">AI 기반 개인화 분석</span>
            </div>
            <p className="text-gray-600 mb-4">
              혜움 리포트를 벤치마크로 한 고도화된 AI 세무 분석 시스템으로 
              스타트업에 특화된 인사이트를 제공합니다
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <BarChart3 className="w-4 h-4 text-primary-600" />
                <span className="text-gray-600">실시간 분석</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-secondary-600" />
                <span className="text-gray-600">트렌드 비교</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-gray-600">동종업계 벤치마킹</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TaxToMeHero
