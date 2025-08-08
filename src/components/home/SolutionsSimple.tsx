'use client'

import { useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'

const SolutionsSimple = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const solutions = [
    {
      problem: "자금이 부족한 스타트업 초기단계에 지원받을 수 있는 정부나 기관의 지원금에 대한 정보를 알려주는 사무실 없나?",
      solution: "유니코너는 업종별 지역별 받을 수 있는 지원금을 정기적으로 안내 드리고 있습니다.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      problem: "세금 감면 혜택을 최대로 적용해 주고 있을까?",
      solution: "유니코너는 각 업체의 특수성까지 모두 고려하여 받을 수 있는 최대의 세감면 혜택을 적용하여 신고하고 있습니다. 유니코너에 오기 전에 받지 못한 감면 혜택이 있었다면 과거 추가납부한 세액까지 환급신고를 해드립니다.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      problem: "지금 당장 투자자에게 결산자료 줘야 하는데 빠르게 대응해줄 수 있나?",
      solution: "유니코너는 고객사의 필요에 가장 빠르게 움직입니다. 결산자료를 필요한 시기에 맞춰 제공해 드리고 있습니다.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      problem: "늦어도 외부 투자 받기 전에는 주주간 약정서를 작성해야 한다던데 이런것도 물어볼 수 있을까?",
      solution: "가능합니다. 유니코너는 스타트업 경험이 풍부한 법무법인과 제휴를 맺고 필요한 서비스를 원스탑으로 제공해 드리고 있습니다.",
      gradient: "from-orange-400 to-red-500"
    },
    {
      problem: "100억 밸류에 맞게 사업계획서를 작업하기는 했는데 검토 요청을 할 수 있을까?",
      solution: "숫자에는 반드시 로직이 필요합니다. 설득력 있는 로직을 함께 만들어 드리고 사업계획서를 함께 완성해 드립니다.",
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      problem: "투자자 측에서 의뢰한 회계법인이 실사하러 온다는데 준비하는 것도 도움을 받을 수 있을까?",
      solution: "실사를 통해 가격 조정이 되거나 심각한 경우 딜이 깨질 수 있습니다. 풍부한 스타트업 실사 경험을 바탕으로 함께 대응해 드립니다.",
      gradient: "from-red-400 to-pink-500"
    },
    {
      problem: "상장을 준비하고 싶은데 도움받을 수 있을까?",
      solution: "상장에 필요한 준비 절차를 안내드리고 있으며 반드시 필요한 국제회계기준 도입, 내부회계관리제도 구축, 지정감사 대응 등 업무를 제공해 드리고 있습니다.",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      problem: "지금 당장은 매출도 없고 비용 쓰는 것도 거의 없는데 기장 말고 꼭 필요한 신고만 맡길 수 없을까?",
      solution: "법인도 기장 수수료 없이 최소한의 신고만 대행해 드리고 있습니다.",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      problem: "일단 법인 설립은 했는데 공동창업자와 지분구조를 어떻게 해야 좋을지 물어볼 수 있을까?",
      solution: "초기 스타트업의 공동 창업자간 지분 구조 셋팅은 매우 중요합니다. 투자를 고려하여 지분 구조도 상담 받으실 수 있습니다.",
      gradient: "from-violet-400 to-purple-500"
    },
    {
      problem: "개인사업자로 시작했는데 법인으로 전환하는 것도 전문적으로 케어해 줄 수 있을까?",
      solution: "세금을 최소화할 수 있는 구조로 법인 전환 서비스를 제공합니다.",
      gradient: "from-teal-400 to-green-500"
    },
    {
      problem: "필요한 순간 신속하게 전문 서비스를 받을 수 있을까?",
      solution: "네, 단톡방을 이용하고 있고 신속하게 필요한 자문을 받을 수 있습니다.",
      gradient: "from-pink-400 to-rose-500"
    }
  ]

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            유니코너 기장의 차별화된 강점
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            스타트업의 니즈를 완벽히 이해하는 전문가들이 제공하는 맞춤형 솔루션
          </p>
        </div>

        {/* 솔루션 리스트 */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {solutions.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* 그라데이션 배경 (호버시) */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              
              <div className="relative p-6 lg:p-8">
                <div className="flex items-start space-x-6">
                  {/* 번호 */}
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {index + 1}
                  </div>
                  
                  {/* 내용 */}
                  <div className="flex-1 min-w-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* 고민 */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <span className="text-sm font-bold text-red-600 uppercase tracking-wide">문제</span>
                        </div>
                        <p className="text-gray-700 font-medium leading-relaxed">
                          {item.problem}
                        </p>
                      </div>
                      
                      {/* 해결 */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 bg-gradient-to-r ${item.gradient} rounded-full`}></div>
                          <span className={`text-sm font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent uppercase tracking-wide`}>
                            해결
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 화살표 (호버시) */}
                  <div className={`flex-shrink-0 transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}>
                    <ArrowRight className={`w-6 h-6 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 섹션 */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              더 궁금한 점이 있으신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              스타트업 전문가와 1:1 상담을 통해 맞춤형 솔루션을 찾아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/consultation" className="btn-primary flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>무료 상담 신청</span>
              </a>
              <a href="tel:02-1234-5678" className="btn-secondary flex items-center justify-center space-x-2">
                <span>📞</span>
                <span>전화 상담</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsSimple
