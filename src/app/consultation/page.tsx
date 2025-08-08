import ConsultationForm from '@/components/consultation/ConsultationForm'

export default function Consultation() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            상담 신청
          </h1>
          <p className="text-xl text-gray-600">
            스타트업 전문가와 상담을 통해 최적의 솔루션을 찾아보세요.
          </p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  )
}
