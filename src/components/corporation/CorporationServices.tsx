import Link from 'next/link'
import { ArrowRight, Building, RefreshCw } from 'lucide-react'

const CorporationServices = () => {
  const services = [
    {
      icon: <Building className="w-12 h-12 text-primary-600" />,
      title: "신규설립",
      subtitle: "스타트업의 시작, 최고의 전문가와 함께 시작하세요",
      description: "투자유치와 성장을 고려한 최적의 법인구조로 설립부터 완벽하게 준비합니다.",
      features: [
        "스타트업 특화 법인구조 설계",
        "투자유치 대비 주주구조 최적화",
        "세무 효율적인 자본금 설정",
        "필수 약정서 및 규정 작성",
        "디지털 등기 시스템 활용",
        "설립 후 세무서비스 연계"
      ],
      process: [
        "초기 상담 및 구조 설계",
        "법인명 확정 및 등기 준비",
        "온라인 등기 신청",
        "법인 설립 완료",
        "사업자등록 및 세무 신고",
        "지속적인 사후 관리"
      ],
      ctaText: "신규설립 상담",
      highlight: true
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-secondary-600" />,
      title: "법인전환",
      subtitle: "최고의 전문가와 함께 법률 및 세무 이슈를 제거하고 최적의 구조로 법인전환 하세요",
      description: "개인사업자에서 법인으로의 전환 시 발생할 수 있는 모든 리스크를 최소화하여 안전하게 전환합니다.",
      features: [
        "세금 최소화 전환 전략 수립",
        "영업권 평가 및 이전 방안",
        "기존 계약관계 승계 검토",
        "세무 이슈 사전 해결",
        "최적 전환 시점 컨설팅",
        "전환 후 세무 관리"
      ],
      process: [
        "현황 분석 및 전환 전략 수립",
        "세무 리스크 검토",
        "법인설립 및 사업 이전",
        "기존 사업 정리",
        "세무신고 및 이전 완료",
        "지속적인 세무 관리"
      ],
      ctaText: "법인전환 상담",
      highlight: false
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            스타트업 맞춤 법인설립 서비스
          </h2>
          <p className="text-xl text-gray-600">
            신규설립부터 법인전환까지, 상황에 맞는 최적의 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-200 hover:shadow-xl ${
                service.highlight 
                  ? 'bg-white border-2 border-primary-200 shadow-lg' 
                  : 'bg-white shadow-md'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-8">
                  <span className="bg-primary-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              )}

              {/* 헤더 */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* 주요 특징 */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">주요 특징</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 진행 과정 */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">진행 과정</h4>
                <div className="space-y-3">
                  {service.process.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {stepIndex + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA 버튼 */}
              <Link 
                href="/consultation"
                className={`block w-full text-center py-4 px-6 rounded-xl font-bold text-lg transition-colors duration-200 ${
                  service.highlight
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-secondary-600 text-white hover:bg-secondary-700'
                }`}
              >
                {service.ctaText}
              </Link>
            </div>
          ))}
        </div>

        {/* 하단 CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              어떤 서비스가 적합할지 모르겠다면?
            </h3>
            <p className="text-gray-600 mb-6">
              전문가와의 상담을 통해 현재 상황에 가장 적합한 법인설립 방안을 찾아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary">
                무료 상담 신청
              </Link>
              <Link href="/" className="btn-secondary">
                세무서비스 알아보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CorporationServices
