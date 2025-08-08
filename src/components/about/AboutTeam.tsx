import Link from 'next/link'
import { Award, Users, TrendingUp, Shield } from 'lucide-react'

const AboutTeam = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      number: "500+",
      label: "누적 고객사",
      description: "다양한 업종의 스타트업과 함께한 경험"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary-600" />,
      number: "1,000억+",
      label: "투자유치 지원",
      description: "성공적인 투자유치를 도운 누적 금액"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      number: "10년+",
      label: "전문 경험",
      description: "스타트업 전문 세무회계 서비스 경력"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      number: "100%",
      label: "신뢰도",
      description: "정확하고 투명한 서비스 제공"
    }
  ]

  const teamMembers = [
    {
      name: "홍길동",
      position: "대표 회계사",
      description: "삼성전자, 네이버 등 대기업 경력을 바탕으로 스타트업 전문 세무 서비스를 이끌고 있습니다.",
      expertise: ["상장 준비", "투자유치 지원", "세무 최적화"]
    },
    {
      name: "김영희",
      position: "파트너 변호사",
      description: "김&장 법무법인 출신으로 스타트업 법무 전반에 대한 깊은 이해와 경험을 보유하고 있습니다.",
      expertise: ["법인설립", "계약서 검토", "지적재산권"]
    },
    {
      name: "이철수",
      position: "CTO",
      description: "카카오, 토스 등에서의 개발 경험을 바탕으로 TAX TO ME AI 솔루션을 개발하고 있습니다.",
      expertise: ["AI 개발", "데이터 분석", "시스템 구축"]
    }
  ]

  const values = [
    {
      title: "고객 중심",
      description: "고객의 성공이 곧 우리의 성공이라는 믿음으로 최선을 다합니다.",
      emoji: "💎"
    },
    {
      title: "전문성 추구",
      description: "끊임없는 학습과 연구를 통해 전문성을 향상시킵니다.",
      emoji: "📚"
    },
    {
      title: "혁신과 도전",
      description: "새로운 기술과 방법론을 적극적으로 도입하고 시도합니다.",
      emoji: "🔬"
    },
    {
      title: "신뢰와 투명성",
      description: "모든 업무를 투명하게 진행하며 신뢰를 최우선으로 합니다.",
      emoji: "🤝"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* 회사 소개 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            스타트업과 함께 성장하는 파트너
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              유니코너는 2014년부터 스타트업 전문 세무회계 서비스를 제공해온 전문 기업입니다. 
              단순한 기장업무를 넘어 투자유치, 상장 준비, 법인설립까지 스타트업이 필요한 
              모든 서비스를 원스탑으로 제공하며, 500여 개 기업의 성장을 함께해왔습니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              혁신적인 AI 기술을 도입한 TAX TO ME 솔루션을 통해 더욱 정확하고 효율적인 
              세무 서비스를 제공하며, 스타트업 생태계의 발전에 기여하고 있습니다.
            </p>
          </div>
        </div>

        {/* 성과 지표 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* 팀 소개 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              전문가 팀
            </h3>
            <p className="text-lg text-gray-600">
              각 분야 최고의 전문가들이 모여 최상의 서비스를 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary-600 font-semibold">
                    {member.position}
                  </p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>
                
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-3">전문 분야</h5>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 핵심 가치 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              핵심 가치
            </h3>
            <p className="text-lg text-gray-600">
              우리가 추구하는 가치와 원칙입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-4">{value.emoji}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            함께 성장할 파트너를 찾고 계신가요?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            유니코너와 함께 스타트업의 꿈을 현실로 만들어보세요. 
            전문가 상담을 통해 최적의 솔루션을 찾아드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="btn-primary">
              무료 상담 신청
            </Link>
            <Link href="/" className="btn-secondary">
              서비스 알아보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeam