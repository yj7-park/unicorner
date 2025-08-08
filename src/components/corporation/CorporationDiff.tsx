import { CheckCircle, Users, FileText, Shield, Zap, HeadphonesIcon } from 'lucide-react'

const CorporationDiff = () => {
  const differences = [
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "스타트업은 결국 회계법인이 필요합니다",
      description: "스타트업은 적시에 투자유치를 하여 빠르게 성장하고 IPO, M&A 등을 통한 엑싯 또는 사업 확장을 목표로 하고 있습니다.",
      benefits: [
        "투자유치 준비를 위한 회계 시스템 구축",
        "성장 단계별 맞춤 세무 전략 수립",
        "엑싯 전략 수립 및 실행 지원"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary-600" />,
      title: "회계사와 변호사가 함께하는 이점",
      description: "단순한 등기업무가 아닌, 법률과 세무를 동시에 고려한 최적의 법인구조를 설계합니다.",
      benefits: [
        "법률 리스크 사전 검토 및 예방",
        "세무 최적화를 고려한 법인구조 설계",
        "투자계약서 및 주주간 약정서 검토",
        "지적재산권 보호 전략 수립"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      title: "My등기 솔루션 활용",
      description: "최신 디지털 솔루션을 활용하여 빠르고 정확한 법인설립 서비스를 제공합니다.",
      benefits: [
        "온라인 간편 등기 신청",
        "실시간 진행상황 확인",
        "디지털 서류 관리 시스템",
        "빠른 처리 시간 (평균 3-5일)"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "등기 이후 원스탑 서비스",
      description: "법인설립 완료 후에도 지속적인 성장 파트너로 함께합니다.",
      benefits: [
        "세무 신고 및 기장 서비스 연계",
        "투자유치 준비 지원",
        "법무 자문 서비스 제공",
        "성장 단계별 컨설팅"
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "세무 계약 체결시 설립비용 지원",
      description: "장기적인 파트너십을 통해 스타트업의 초기 부담을 덜어드립니다.",
      benefits: [
        "신고대리 계약부터 모든 서비스 이용 가능",
        "설립비용 대폭 할인 또는 무료 제공",
        "첫 해 세무서비스 우대 혜택",
        "성장에 따른 서비스 업그레이드 지원"
      ]
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-blue-600" />,
      title: "신속한 전문가 상담",
      description: "단톡방을 통한 실시간 소통으로 궁금한 점을 즉시 해결해 드립니다.",
      benefits: [
        "24시간 실시간 상담 지원",
        "전문가 직접 답변",
        "신속한 이슈 해결",
        "지속적인 관계 유지"
      ]
    }
  ]

  return (
    <section id="differences" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            다른 무료법인설립 업체와의 차별점
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            단순한 등기업무가 아닌, 스타트업의 성공을 위한 토탈 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {differences.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {item.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-primary-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            궁금한 점이 있으시나요?
          </h3>
          <p className="text-gray-600 mb-6">
            스타트업 전문가와 1:1 상담을 통해 최적의 법인설립 방안을 찾아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02-1234-5678" className="btn-primary">
              📞 전화 상담 (02-1234-5678)
            </a>
            <a href="/consultation" className="btn-secondary">
              온라인 상담 신청
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CorporationDiff
