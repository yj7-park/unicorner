import { BarChart3, TrendingUp, Users, Brain, Shield, Zap, LineChart, PieChart } from 'lucide-react'

const TaxToMeFeatures = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "과거의 나 vs 오늘의 나",
      description: "시계열 데이터 분석을 통해 우리 회사의 성장 궤적과 변화 양상을 시각화합니다.",
      details: [
        "매출 성장률 및 트렌드 분석",
        "비용 구조 변화 패턴 파악",
        "수익성 지표 개선도 측정",
        "세무 효율성 변화 추적",
        "재무 건전성 진단"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "오늘의 남 vs 오늘의 나",
      description: "동종업계 및 유사 규모 기업들과의 비교를 통해 우리의 위치를 정확히 파악합니다.",
      details: [
        "업종별 평균 지표 대비 분석",
        "유사 규모 기업 벤치마킹",
        "세무 효율성 순위 제공",
        "업계 트렌드 대비 성과 분석",
        "경쟁사 대비 강약점 도출"
      ]
    },
    {
      icon: <Brain className="w-8 h-8 text-secondary-600" />,
      title: "AI 인사이트 도출",
      description: "머신러닝 기반 분석으로 숨겨진 패턴을 발견하고 개선 방향을 제시합니다.",
      details: [
        "세무 최적화 기회 발굴",
        "비용 절감 포인트 식별",
        "매출 증대 전략 제안",
        "리스크 요인 사전 알림",
        "성장 시나리오 모델링"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "실시간 대시보드",
      description: "핵심 지표들을 한눈에 파악할 수 있는 직관적인 대시보드를 제공합니다.",
      details: [
        "KPI 실시간 모니터링",
        "알람 및 알림 시스템",
        "모바일 최적화 인터페이스",
        "커스터마이징 가능한 위젯",
        "데이터 드릴다운 기능"
      ]
    },
    {
      icon: <LineChart className="w-8 h-8 text-orange-600" />,
      title: "예측 분석",
      description: "과거 데이터와 시장 트렌드를 바탕으로 미래 전망을 제시합니다.",
      details: [
        "매출 및 수익 예측 모델",
        "세금 부담 시뮬레이션",
        "투자 시나리오별 영향 분석",
        "성장 단계별 전략 제안",
        "위험 요소 사전 경고"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "보안 및 개인정보 보호",
      description: "최고 수준의 보안 시스템으로 민감한 재무 데이터를 안전하게 보호합니다.",
      details: [
        "엔드투엔드 암호화",
        "접근 권한 세분화 관리",
        "감사 로그 및 추적 시스템",
        "GDPR 및 개인정보보호법 준수",
        "정기적인 보안 감사"
      ]
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "시간 절약",
      description: "복잡한 분석을 자동화하여 전략적 의사결정에 집중할 수 있습니다."
    },
    {
      icon: <PieChart className="w-6 h-6 text-blue-500" />,
      title: "정확한 인사이트",
      description: "데이터 기반의 객관적이고 정확한 분석 결과를 제공합니다."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "성장 가속화",
      description: "최적화된 전략으로 더 빠른 성장을 실현할 수 있습니다."
    }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI가 제공하는 맞춤형 세무 인사이트
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            단순한 데이터 제공이 아닌, AI가 분석한 개인화된 인사이트로 
            스마트한 의사결정을 지원합니다
          </p>
        </div>

        {/* 주요 기능 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 혜택 요약 */}
        <div className="bg-gradient-to-r from-purple-600 to-primary-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              TAX TO ME로 얻을 수 있는 핵심 혜택
            </h3>
            <p className="text-lg text-purple-100">
              데이터 기반 의사결정으로 비즈니스 성장을 가속화하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                <p className="text-purple-100">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">
              지금 가입하고 스마트한 세무 관리를 시작하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/consultation" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                회원가입 문의
              </a>
              <a href="mailto:contact@taxtome.kr" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                데모 요청
              </a>
            </div>
          </div>
        </div>

        {/* 베타 출시 안내 */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 베타 서비스 런칭 예정
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            TAX TO ME는 현재 개발 완료 단계에 있으며, 곧 베타 서비스를 시작할 예정입니다. 
            사전 등록하시면 출시 소식과 특별 혜택을 가장 먼저 받아보실 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/consultation" className="btn-primary">
              베타 사전 등록
            </a>
            <a href="/" className="btn-secondary">
              다른 서비스 알아보기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TaxToMeFeatures
