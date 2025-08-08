import Link from 'next/link'
import { Check } from 'lucide-react'

const Services = () => {
  const services = [
    {
      name: "신고대리",
      price: "기장 수수료 없음",
      features: [
        "부가가치세 신고대리",
        "법인세 신고대리",
        "상시 자문 서비스"
      ],
      highlight: false
    },
    {
      name: "기장",
      price: "월 10만원~",
      features: [
        "4대보험 관리",
        "인건비 원천세 등 신고",
        "부가가치세 신고",
        "법인세 신고",
        "상시 자문 서비스"
      ],
      highlight: true
    },
    {
      name: "월결산",
      price: "월 20만원~",
      features: [
        "기장 업무 포함",
        "월결산서 제공",
        "회계 및 세무이슈 사전 식별",
        "경영자를 위한 관리 포인트 식별",
        "KPI 관리"
      ],
      highlight: false
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            서비스 3단계 안내
          </h2>
          <p className="text-xl text-gray-600">
            스타트업 성장 단계에 맞는 최적의 서비스를 선택하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 ${
                service.highlight 
                ? 'bg-primary-600 text-white shadow-xl scale-105' 
                : 'bg-white shadow-lg'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  service.highlight ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.name}
                </h3>
                <div className={`text-3xl font-bold ${
                  service.highlight ? 'text-white' : 'text-primary-600'
                }`}>
                  {service.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check 
                      size={20} 
                      className={`mt-0.5 flex-shrink-0 ${
                        service.highlight ? 'text-white' : 'text-primary-600'
                      }`} 
                    />
                    <span className={`${
                      service.highlight ? 'text-white' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/consultation"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  service.highlight
                    ? 'bg-white text-primary-600 hover:bg-gray-100'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                상담 신청
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            어떤 서비스가 적합한지 궁금하신가요?
          </p>
          <Link href="/consultation" className="btn-primary">
            무료 상담 받기
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services