const AboutHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-gray-50 section-padding">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-primary-600">UNICORNER</span><br />
            About US
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            스타트업의 성공적인 성장을 위해<br />
            전문성과 혁신을 바탕으로 최고의 서비스를 제공합니다
          </p>
        </div>

        {/* 핵심 가치 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">전문성</h3>
            <p className="text-gray-600 leading-relaxed">
              10년 이상의 스타트업 전문 경험을 바탕으로 
              최고 수준의 전문 서비스를 제공합니다
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">혁신</h3>
            <p className="text-gray-600 leading-relaxed">
              AI 기술과 디지털 솔루션을 활용하여 
              더 효율적이고 정확한 서비스를 구현합니다
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">파트너십</h3>
            <p className="text-gray-600 leading-relaxed">
              단순한 서비스 제공이 아닌, 
              고객의 성장을 함께하는 진정한 파트너가 됩니다
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
