'use client'

import { useState } from 'react'
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react'

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const services = [
    { value: 'tax-accounting', label: '세무회계서비스' },
    { value: 'corporation', label: '법인설립지원' },
    { value: 'taxtome', label: 'TAX TO ME 솔루션' },
    { value: 'consultation', label: '기타 상담' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || '전송에 실패했습니다.')
      }

      setIsSubmitted(true)
      console.log('이메일 전송 성공:', result)
    } catch (error) {
      console.error('이메일 전송 오류:', error)
      setSubmitError(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">✅</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            이메일 전송이 완료되었습니다!
          </h3>
          <p className="text-gray-600 mb-6">
            상담 신청 내용이 담당자에게 전달되었습니다.<br />
            빠른 시일 내에 전문가가 연락드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02-1234-5678" className="btn-primary">
              📞 전화 상담 (02-1234-5678)
            </a>
            <button 
              onClick={() => {
                setIsSubmitted(false)
                setSubmitError('')
                setFormData({
                  name: '',
                  company: '',
                  phone: '',
                  email: '',
                  service: '',
                  message: ''
                })
              }}
              className="btn-secondary"
            >
              추가 상담 신청
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* 상담 양식 */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            상담 신청 양식
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="홍길동"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  회사명
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="(주)스타트업"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  연락처 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="010-1234-5678"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="hong@startup.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                관심 서비스 *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">서비스를 선택해주세요</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                상담 내용
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
                placeholder="궁금한 점이나 상담받고 싶은 내용을 자세히 적어주세요."
              />
            </div>

            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-red-500">⚠️</span>
                  <span className="font-medium">전송 실패</span>
                </div>
                <p className="mt-1 text-sm">{submitError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>이메일 전송 중...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>상담 신청하기</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* 연락처 정보 */}
      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h4 className="text-xl font-bold text-gray-900 mb-6">
            연락처 정보
          </h4>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-primary-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">전화 상담</p>
                <p className="text-gray-600">02-1234-5678</p>
                <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-primary-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">이메일</p>
                <p className="text-gray-600">contact@taxtome.kr</p>
                <p className="text-sm text-gray-500">24시간 접수</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">주소</p>
                <p className="text-gray-600">서울특별시 강남구<br />테헤란로 123</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 rounded-2xl p-6">
          <div className="flex items-start space-x-3 mb-4">
            <Clock className="w-5 h-5 text-primary-600 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">빠른 응답</p>
              <p className="text-sm text-gray-600">
                상담 신청 후 2시간 이내 연락드립니다
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-primary-600">💡 TIP:</strong> 구체적인 상담 내용을 작성해주시면 
              더욱 정확하고 유용한 상담을 받으실 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultationForm
