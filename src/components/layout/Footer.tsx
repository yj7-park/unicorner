import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 회사 정보 */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">UNICORNER</span>
                  <span className="text-xs text-gray-400 -mt-1">TAX TO ME</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                스타트업의 성장을 위한 전문 세무회계 서비스를 제공합니다. 
                기장부터 CFO 아웃소싱까지, 스타트업이 필요한 모든 서비스를 원스톱으로 제공합니다.
              </p>
              <div className="space-y-1 text-sm text-gray-400">
                <p>대표: 홍길동</p>
                <p>주소: 서울특별시 강남구 테헤란로 123</p>
                <p>사업자등록번호: 123-45-67890</p>
              </div>
            </div>

            {/* 서비스 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">세무회계서비스</Link></li>
                <li><Link href="/corporation" className="hover:text-white transition-colors">법인설립지원</Link></li>
                <li><Link href="/taxtome" className="hover:text-white transition-colors">TAX TO ME</Link></li>
                <li><Link href="/consultation" className="hover:text-white transition-colors">상담신청</Link></li>
              </ul>
            </div>

            {/* 고객지원 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">고객지원</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="block">전화상담</span>
                  <span className="text-lg font-semibold text-white">02-1234-5678</span>
                </li>
                <li>
                  <span className="block">이메일</span>
                  <span className="text-white">contact@taxtome.kr</span>
                </li>
                <li>
                  <span className="block">상담시간</span>
                  <span className="text-sm">평일 09:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 하단 */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 TaxToMe. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
              <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
