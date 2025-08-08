'use client'

import { useState, useEffect, useRef } from 'react'
import { DollarSign, Target, TrendingUp, FileText, Building, MessageCircle } from 'lucide-react'

const Solutions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [animationDuration, setAnimationDuration] = useState(20)

  const solutions = [
    {
      category: 'funding',
      problem: "자금이 부족한 스타트업 초기단계에 지원받을 수 있는 정부나 기관의 지원금 정보를 알려주는 곳이 없을까요?",
      solution: "유니코너는 업종별 지역별 받을 수 있는 지원금을 정기적으로 안내 드리고 있습니다."
    },
    {
      category: 'tax',
      problem: "세금 감면 혜택을 최대로 적용해 주고 있을까요?",
      solution: "유니코너는 각 업체의 특수성까지 모두 고려하여 받을 수 있는 최대의 세감면 혜택을 적용하여 신고하고 있습니다. 유니코너에 오기 전에 받지 못한 감면 혜택이 있었다면 과거 추가납부한 세액까지 환급신고를 해드립니다."
    },
    {
      category: 'investment',
      problem: "지금 당장 투자자에게 결산자료를 줘야 하는데 빠르게 대응해줄 수 있을까요?",
      solution: "유니코너는 고객사의 필요에 가장 빠르게 움직입니다. 결산자료를 필요한 시기에 맞춰 제공해 드리고 있습니다."
    },
    {
      category: 'legal',
      problem: "늦어도 외부 투자 받기 전에는 주주간 약정서를 작성해야 한다던데 이런 것도 물어볼 수 있을까요?",
      solution: "가능합니다. 유니코너는 스타트업 경험이 풍부한 법무법인과 제휴를 맺고 필요한 서비스를 원스탑으로 제공해 드리고 있습니다."
    },
    {
      category: 'investment',
      problem: "100억 밸류에 맞게 사업계획서를 작업했는데 검토 요청을 할 수 있을까요?",
      solution: "숫자에는 반드시 로직이 필요합니다. 설득력 있는 로직을 함께 만들어 드리고 사업계획서를 함께 완성해 드립니다."
    },
    {
      category: 'investment',
      problem: "투자자 측에서 의뢰한 회계법인이 실사하러 온다는데 준비하는 것도 도움을 받을 수 있을까요?",
      solution: "실사를 통해 가격 조정이 되거나 심각한 경우 딜이 깨질 수 있습니다. 풍부한 스타트업 실사 경험을 바탕으로 함께 대응해 드립니다."
    },
    {
      category: 'growth',
      problem: "상장을 준비하고 싶은데 도움받을 수 있을까요?",
      solution: "상장에 필요한 준비 절차를 안내드리고 있으며 반드시 필요한 국제회계기준 도입, 내부회계관리제도 구축, 지정감사 대응 등 업무를 제공해 드리고 있습니다."
    },
    {
      category: 'tax',
      problem: "지금 당장은 매출도 없고 비용 쓰는 것도 거의 없는데 기장 말고 꼭 필요한 신고만 맡길 수 없을까요?",
      solution: "법인도 기장 수수료 없이 최소한의 신고만 대행해 드리고 있습니다."
    },
    {
      category: 'legal',
      problem: "일단 법인 설립은 했는데 공동창업자와 지분구조를 어떻게 해야 좋을지 물어볼 수 있을까요?",
      solution: "초기 스타트업의 공동 창업자간 지분 구조 셋팅은 매우 중요합니다. 투자를 고려하여 지분 구조도 상담 받으실 수 있습니다."
    },
    {
      category: 'tax',
      problem: "개인사업자로 시작했는데 법인으로 전환하는 것도 전문적으로 케어해 줄 수 있을까요?",
      solution: "세금을 최소화할 수 있는 구조로 법인 전환 서비스를 제공합니다."
    },
    {
      category: 'support',
      problem: "필요한 순간 신속하게 전문 서비스를 받을 수 있을까요?",
      solution: "네, 단톡방을 이용하고 있고 신속하게 필요한 자문을 받을 수 있습니다."
    }
  ]

  const categories = [
    { id: 'all', name: '전체', icon: <Target className="w-4 h-4" /> },
    { id: 'funding', name: '자금지원', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'tax', name: '세무최적화', icon: <Target className="w-4 h-4" /> },
    { id: 'investment', name: '투자유치', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'legal', name: '법무지원', icon: <FileText className="w-4 h-4" /> },
    { id: 'growth', name: '성장지원', icon: <Building className="w-4 h-4" /> },
    { id: 'support', name: '상시지원', icon: <MessageCircle className="w-4 h-4" /> }
  ]

  const filteredSolutions = selectedCategory === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === selectedCategory)

  // 스크롤 애니메이션 제어
  useEffect(() => {
    const initTimer = setTimeout(() => {
      if (scrollContainerRef.current) {
        const animationContainer = scrollContainerRef.current
        const gridElement = animationContainer.querySelector('.grid')
        
        if (gridElement) {
          // 애니메이션 초기화
          animationContainer.style.transform = 'translateY(0)'
          animationContainer.style.animationName = 'none'
          animationContainer.style.animationPlayState = 'paused'
          
          // DOM 렌더링 완료 대기
          requestAnimationFrame(() => {
            const totalItems = filteredSolutions.length
            
            // 1행 체크 (2열 그리드에서 2개 이하인 경우)
            const isOneRow = totalItems <= 2
            
            console.log(`Category: ${selectedCategory}, Items: ${totalItems}, One Row: ${isOneRow}`)
            
            if (isOneRow) {
              // 1행인 경우 스크롤하지 않음
              console.log('Single row detected - no scrolling')
              return
            }
            
            // 스크롤 가능한 경우만 애니메이션 설정
            const animationHeight = animationContainer.scrollHeight
            const scrollDistance = animationHeight / 2 // 복제본까지의 거리
            
            // 고정 속도: 30픽셀/초
            const pixelsPerSecond = 30
            const duration = scrollDistance / pixelsPerSecond
            
            setAnimationDuration(duration)
            
            console.log(`Animation Height: ${animationHeight}px, Scroll Distance: ${scrollDistance}px`)
            
            // 1초 후 애니메이션 시작
            const startTimer = setTimeout(() => {
              animationContainer.style.animationDuration = `${duration}s`
              animationContainer.style.animationName = 'slideDown'
              animationContainer.style.animationPlayState = 'running'
              console.log(`Animation started after 1s delay - Duration: ${duration.toFixed(2)}s`)
            }, 1000)
            
            // 컴포넌트 언마운트 시 타이머 정리
            return () => clearTimeout(startTimer)
          })
        }
      }
    }, 100)
    
    return () => clearTimeout(initTimer)
  }, [filteredSolutions, selectedCategory])

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            유니코너 기장의 차별화된 강점
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            스타트업의 니즈를 완벽히 이해하는 전문가들이 제공하는 맞춤형 솔루션
          </p>
          
          {/* 카테고리 필터 */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

                 {/* 자동 슬라이드 솔루션 그리드 */}
         <div className="relative h-[320px] group overflow-y-hidden group-hover:overflow-y-auto scrollbar-thin pr-2"
              onMouseEnter={(e) => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.style.animationPlayState = 'paused'
                }
              }}
              onMouseLeave={(e) => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.style.animationPlayState = 'running'
                }
              }}>
           <div 
             ref={scrollContainerRef}
             className="animate-slide-down"
           >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 첫 번째 세트 */}
              {filteredSolutions.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 min-h-[300px]">
                  <div className="mb-4">
                    <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      고민
                    </span>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                  <div>
                    <span className="inline-block bg-primary-100 text-primary-600 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      해결
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
              {/* 무한 스크롤을 위한 복제본 */}
              {filteredSolutions.map((item, index) => (
                <div key={`duplicate-${index}`} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 min-h-[300px]">
                  <div className="mb-4">
                    <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      고민
                    </span>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                  <div>
                    <span className="inline-block bg-primary-100 text-primary-600 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      해결
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions