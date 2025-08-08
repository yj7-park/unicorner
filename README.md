# TaxToMe - 스타트업 전문 세무회계 서비스

스타트업의 성장을 위한 전문 세무회계 서비스 홈페이지입니다.

## 🚀 프로젝트 개요

TaxToMe는 스타트업에 특화된 세무회계 서비스를 제공하는 유니코너의 공식 홈페이지입니다. 기장부터 CFO 아웃소싱까지, 스타트업이 필요한 모든 세무회계 서비스를 원스톱으로 제공합니다.

### 주요 서비스

1. **세무회계서비스**
   - 신고대리 (기장 수수료 없음)
   - 기장 서비스 (월 10만원~)
   - 월결산 서비스 (월 20만원~)

2. **법인설립지원**
   - 신규설립 서비스
   - 법인전환 서비스
   - 회계사 + 변호사 협업

3. **TAX TO ME 솔루션**
   - AI 기반 세무 분석
   - 과거 대비 현재 분석
   - 동종업계 벤치마킹

## 🛠 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Static Export 지원

## 📁 프로젝트 구조

```
TaxToMe/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   ├── page.tsx           # 메인페이지
│   │   ├── corporation/       # 법인설립지원
│   │   ├── taxtome/          # TAX TO ME 솔루션
│   │   ├── about/            # About US
│   │   └── consultation/     # 상담신청
│   └── components/           # 재사용 컴포넌트
│       ├── layout/          # 헤더, 푸터
│       ├── home/            # 메인페이지 컴포넌트
│       ├── corporation/     # 법인설립 컴포넌트
│       ├── taxtome/         # TAX TO ME 컴포넌트
│       ├── about/           # About 컴포넌트
│       └── consultation/    # 상담신청 컴포넌트
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

### 3. 빌드

```bash
npm run build
```

### 4. 정적 파일 생성 (배포용)

```bash
npm run build
```

`out` 폴더에 정적 파일들이 생성됩니다.

## 📱 페이지 구성

### 1. 메인페이지 (/)
- 세무회계서비스 소개
- 스타트업 맞춤 솔루션 안내
- 3단계 서비스 소개 (신고대리 → 기장 → 월결산)

### 2. 법인설립지원 (/corporation)
- 스타트업 전문 법인설립 서비스
- 다른 업체와의 차별점
- 신규설립 vs 법인전환 서비스

### 3. TAX TO ME (/taxtome)
- AI 기반 세무 솔루션
- 과거 대비 현재, 동종업계 비교 분석
- 회원제 서비스 안내

### 4. About US (/about)
- 회사 소개 및 핵심 가치
- 팀 소개
- 성과 및 경험

### 5. 상담신청 (/consultation)
- 온라인 상담 신청 양식
- 연락처 정보
- 실시간 상담 지원

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Blue (#3b82f6)
- **Secondary**: Sky Blue (#0ea5e9)
- **Accent**: Orange, Purple, Green

### 타이포그래피
- **Font**: Inter (Google Fonts)
- **Headings**: 2xl ~ 6xl
- **Body**: lg, base, sm

### 컴포넌트 클래스
- `.btn-primary`: 주요 버튼
- `.btn-secondary`: 보조 버튼
- `.section-padding`: 섹션 패딩
- `.container-max`: 최대 컨테이너 너비

## 🚀 배포

이 프로젝트는 정적 사이트 생성을 지원하므로 다음 플랫폼에 배포할 수 있습니다:

- **Vercel** (추천)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 📞 연락처

- **전화**: 02-1234-5678
- **이메일**: contact@taxtome.kr
- **주소**: 서울특별시 강남구 테헤란로 123

## 📝 라이선스

© 2024 TaxToMe. All rights reserved.
