const INDUSTRIES = [
  {
    id: "local-business",
    name: "자영업/로컬 비즈니스",
    audience: "사업자",
    context: "동네 기반 매장, 예약, 리뷰, 단골 고객 관리",
    tags: ["로컬", "매장", "홍보"],
  },
  {
    id: "restaurant-cafe",
    name: "식당/카페/디저트",
    audience: "사업자",
    context: "메뉴 판매, 재방문, 배달앱, 피크타임 운영",
    tags: ["외식", "메뉴", "리뷰"],
  },
  {
    id: "beauty",
    name: "미용실/네일/피부관리",
    audience: "사업자",
    context: "예약 상담, 시술 설명, 재방문 관리, 전후 사례 콘텐츠",
    tags: ["뷰티", "예약", "상담"],
  },
  {
    id: "clinic",
    name: "병원/치과/한의원/클리닉",
    audience: "전문직",
    context: "의료 광고 규정에 주의한 안내, 예약, 시술 설명, 후기 대응",
    tags: ["의료", "안내", "규정"],
  },
  {
    id: "academy",
    name: "학원/과외/교육기관",
    audience: "교육자",
    context: "학부모 상담, 커리큘럼 안내, 성적 관리, 모집 홍보",
    tags: ["교육", "학부모", "모집"],
  },
  {
    id: "real-estate",
    name: "부동산/공인중개/분양",
    audience: "전문직",
    context: "매물 설명, 지역 정보, 상담 스크립트, 투자 리스크 안내",
    tags: ["부동산", "매물", "상담"],
  },
  {
    id: "ecommerce",
    name: "쇼핑몰/이커머스",
    audience: "사업자",
    context: "상세페이지, 리뷰, 교환/환불, CRM, 상품 기획",
    tags: ["이커머스", "상품", "CRM"],
  },
  {
    id: "saas-startup",
    name: "SaaS/IT 스타트업",
    audience: "스타트업",
    context: "제품 포지셔닝, 온보딩, 랜딩페이지, 유저 리서치",
    tags: ["SaaS", "제품", "성장"],
  },
  {
    id: "developer-team",
    name: "개발자/개발팀",
    audience: "실무자",
    context: "코드 리뷰, 기술 문서, 장애 대응, API 설계, 작업 분해",
    tags: ["개발", "문서화", "리뷰"],
  },
  {
    id: "marketing-agency",
    name: "마케팅/광고대행사",
    audience: "실무자",
    context: "캠페인 기획, 광고 카피, 리포트, 클라이언트 커뮤니케이션",
    tags: ["마케팅", "광고", "리포트"],
  },
  {
    id: "creator",
    name: "콘텐츠 크리에이터/유튜브/블로그",
    audience: "크리에이터",
    context: "콘텐츠 기획, 스크립트, 제목, 썸네일 문구, 커뮤니티 관리",
    tags: ["콘텐츠", "유튜브", "블로그"],
  },
  {
    id: "hr",
    name: "HR/채용/인사",
    audience: "실무자",
    context: "채용공고, 면접, 평가표, 온보딩, 내부 커뮤니케이션",
    tags: ["HR", "채용", "조직"],
  },
  {
    id: "b2b-sales",
    name: "B2B 영업",
    audience: "실무자",
    context: "리드 발굴, 콜드메일, 제안서, 파이프라인, 반론 처리",
    tags: ["영업", "B2B", "제안"],
  },
  {
    id: "customer-support",
    name: "고객지원/CS",
    audience: "실무자",
    context: "문의 응대, 환불, 불만 처리, 매크로, 헬프센터",
    tags: ["CS", "응대", "헬프센터"],
  },
  {
    id: "finance-tax",
    name: "회계/재무/세무",
    audience: "전문직",
    context: "비용 정리, 예산, 세무 질문 정리, 보고서, 현금흐름",
    tags: ["재무", "세무", "보고"],
  },
  {
    id: "legal",
    name: "법무/계약/컴플라이언스",
    audience: "전문직",
    context: "계약 검토 질문, 리스크 체크, 정책 초안, 내부 가이드",
    tags: ["법무", "계약", "리스크"],
  },
  {
    id: "manufacturing",
    name: "제조/B2B/도매",
    audience: "사업자",
    context: "제품 사양, 견적, 납기, 품질 이슈, 거래처 관리",
    tags: ["제조", "도매", "품질"],
  },
  {
    id: "logistics",
    name: "물류/운영/구매",
    audience: "실무자",
    context: "재고, 발주, 배송, 공급사 커뮤니케이션, 운영 개선",
    tags: ["물류", "운영", "구매"],
  },
  {
    id: "travel",
    name: "여행/숙박/로컬 투어",
    audience: "사업자",
    context: "상품 설명, 일정표, 예약 안내, 후기 관리, 현지 경험 설계",
    tags: ["여행", "숙박", "예약"],
  },
  {
    id: "finance-insurance",
    name: "금융/보험",
    audience: "전문직",
    context: "상품 설명, 고객 상황 정리, 리스크 고지, 상담 준비",
    tags: ["금융", "보험", "상담"],
  },
  {
    id: "public-nonprofit",
    name: "공공기관/비영리",
    audience: "실무자",
    context: "사업계획, 보도자료, 민원 대응, 성과보고, 캠페인",
    tags: ["공공", "비영리", "보고"],
  },
  {
    id: "events-community",
    name: "행사/커뮤니티/교육 프로그램",
    audience: "운영자",
    context: "모집, 안내, 스폰서 제안, 운영 매뉴얼, 후기 콘텐츠",
    tags: ["행사", "커뮤니티", "운영"],
  },
  {
    id: "freelancer",
    name: "프리랜서/1인 기업",
    audience: "개인사업자",
    context: "제안, 견적, 포트폴리오, 고객관리, 업무 범위 조율",
    tags: ["프리랜서", "견적", "제안"],
  },
  {
    id: "pm-po",
    name: "기획자/PM/PO",
    audience: "실무자",
    context: "요구사항, 우선순위, PRD, 회의록, 실험 설계",
    tags: ["기획", "PM", "제품"],
  },
  {
    id: "data-research",
    name: "데이터/리서치",
    audience: "실무자",
    context: "분석 질문, 설문, 인사이트 도출, 리포트 구조화",
    tags: ["데이터", "리서치", "분석"],
  },
  {
    id: "design-branding",
    name: "디자인/브랜딩",
    audience: "실무자",
    context: "브랜드 톤, 디자인 브리프, 시안 피드백, 가이드라인",
    tags: ["디자인", "브랜드", "브리프"],
  },
  {
    id: "game-entertainment",
    name: "게임/엔터테인먼트",
    audience: "창작자",
    context: "세계관, 이벤트, 커뮤니티, 패치노트, 유저 피드백",
    tags: ["게임", "엔터", "커뮤니티"],
  },
  {
    id: "media-publishing",
    name: "출판/미디어",
    audience: "실무자",
    context: "기획안, 원고 편집, 인터뷰 질문, 뉴스레터, 배포",
    tags: ["미디어", "출판", "편집"],
  },
  {
    id: "food-agriculture",
    name: "농업/식품",
    audience: "사업자",
    context: "산지 스토리, 제품 설명, 유통, 인증, 고객 신뢰",
    tags: ["농업", "식품", "유통"],
  },
  {
    id: "architecture-interior",
    name: "건축/인테리어",
    audience: "전문직",
    context: "공간 제안, 견적 설명, 일정, 고객 요구사항, 시공 리스크",
    tags: ["건축", "인테리어", "시공"],
  },
  {
    id: "middle-high-student",
    name: "중고등학생",
    audience: "학생",
    context: "내신, 수행평가, 독서, 발표, 진로 탐색, 자기주도 학습",
    tags: ["학생", "수행평가", "진로"],
  },
  {
    id: "college-student",
    name: "대학생 과제/학습",
    audience: "학생",
    context: "리포트, 팀플, 발표, 전공 공부, 교수님 메일, 시간 관리",
    tags: ["대학생", "과제", "팀플"],
  },
  {
    id: "graduate-researcher",
    name: "대학원생/연구자",
    audience: "학생",
    context: "논문, 연구질문, 문헌정리, 학회 발표, 지도교수 커뮤니케이션",
    tags: ["연구", "논문", "학회"],
  },
  {
    id: "job-seeker",
    name: "취업준비생",
    audience: "학생",
    context: "자기소개서, 이력서, 면접, 직무 분석, 포트폴리오",
    tags: ["취업", "이력서", "면접"],
  },
  {
    id: "study-abroad-language",
    name: "유학생/어학",
    audience: "학생",
    context: "어학 학습, 에세이, 지원서, 현지 생활, 이메일 커뮤니케이션",
    tags: ["유학", "어학", "에세이"],
  },
  {
    id: "student-club",
    name: "동아리/학생회/프로젝트팀",
    audience: "학생",
    context: "행사 기획, 모집, 회의록, 스폰서 제안, 팀 운영",
    tags: ["동아리", "학생회", "프로젝트"],
  },
  {
    id: "teacher-instructor",
    name: "교사/강사",
    audience: "교육자",
    context: "수업안, 피드백, 평가 루브릭, 학부모 안내, 활동지",
    tags: ["교사", "수업", "평가"],
  },
  {
    id: "parent-learning",
    name: "부모/가정학습",
    audience: "보호자",
    context: "학습 습관, 독서 대화, 진로 대화, 생활 규칙, 칭찬 피드백",
    tags: ["가정학습", "부모", "습관"],
  },
  {
    id: "exam-certificate",
    name: "시험준비/자격증",
    audience: "학생",
    context: "공부 계획, 오답노트, 모의고사 분석, 암기, 실전 루틴",
    tags: ["시험", "자격증", "공부계획"],
  },
  {
    id: "career-transition",
    name: "포트폴리오/커리어 전환",
    audience: "개인",
    context: "강점 정리, 프로젝트 사례화, 전환 스토리, 네트워킹",
    tags: ["커리어", "포트폴리오", "전환"],
  },
];

const WORKFLOWS = [
  {
    id: "market-research",
    name: "시장조사",
    title: "시장과 사용자 맥락 빠르게 조사하기",
    tags: ["조사", "인사이트"],
    variables: ["목표", "대상", "지역 또는 플랫폼", "기간"],
    output: "핵심 요약, 관찰 포인트, 가설, 추가 확인 질문",
    instruction:
      "공개적으로 알려진 일반 지식과 사용자가 제공한 정보만 바탕으로 시장/사용자 맥락을 정리하고, 확실하지 않은 내용은 가설로 표시해 주세요.",
  },
  {
    id: "persona",
    name: "고객/사용자 페르소나",
    title: "현실적인 페르소나 만들기",
    tags: ["페르소나", "고객이해"],
    variables: ["제품 또는 과제", "주요 고객", "문제상황", "구매 또는 행동 장벽"],
    output: "페르소나 3종, 욕구, 불안, 의사결정 기준, 메시지 방향",
    instruction:
      "상투적인 인구통계가 아니라 실제 의사결정과 행동을 설명하는 페르소나를 만들어 주세요.",
  },
  {
    id: "idea",
    name: "아이디어 발굴",
    title: "실행 가능한 아이디어 20개 뽑기",
    tags: ["아이디어", "브레인스토밍"],
    variables: ["해결하고 싶은 문제", "제약조건", "예산", "실행 기간"],
    output: "아이디어 20개, 난이도, 기대효과, 첫 실행 단계",
    instruction:
      "뻔한 아이디어를 제외하고 작은 실험으로 검증할 수 있는 아이디어를 우선 제안해 주세요.",
  },
  {
    id: "product-planning",
    name: "상품/서비스 기획",
    title: "상품 또는 서비스 구조 잡기",
    tags: ["기획", "상품화"],
    variables: ["제공할 가치", "대상", "가격대", "경쟁 대안"],
    output: "핵심 가치, 기능/구성, 가격 패키지, 출시 체크리스트",
    instruction:
      "사용자가 바로 판매하거나 실행할 수 있도록 최소 구성과 확장 구성을 나눠 주세요.",
  },
  {
    id: "brand-message",
    name: "브랜드 메시지",
    title: "브랜드 톤과 핵심 문장 만들기",
    tags: ["브랜딩", "메시지"],
    variables: ["브랜드명", "고객", "차별점", "피해야 할 표현"],
    output: "한줄 소개, 상세 소개, 톤 가이드, 금지어, CTA 문구",
    instruction:
      "과장 없이 신뢰가 느껴지는 표현으로 작성하고, 상황별로 바로 붙여넣을 수 있게 변형해 주세요.",
  },
  {
    id: "landing-page",
    name: "상세페이지/랜딩페이지",
    title: "판매 페이지 초안 만들기",
    tags: ["랜딩", "상세페이지"],
    variables: ["상품", "대상", "주요 혜택", "증거자료"],
    output: "헤드라인, 섹션 구조, FAQ, CTA, 반론 처리",
    instruction:
      "방문자가 비교하고 결정하는 흐름에 맞춰 섹션 순서를 구성해 주세요.",
  },
  {
    id: "blog-seo",
    name: "블로그/SEO",
    title: "검색 유입용 글 구조 만들기",
    tags: ["SEO", "블로그"],
    variables: ["키워드", "독자 수준", "검색 의도", "포함할 사례"],
    output: "제목 10개, 목차, 본문 초안, 메타 설명, 내부링크 제안",
    instruction:
      "검색 의도에 맞춰 깊이 있는 목차를 만들고, 얕은 홍보 문장보다 문제 해결 중심으로 작성해 주세요.",
  },
  {
    id: "social-content",
    name: "SNS 콘텐츠",
    title: "SNS 게시물 시리즈 만들기",
    tags: ["SNS", "콘텐츠"],
    variables: ["플랫폼", "주제", "톤", "게시 목적"],
    output: "게시물 10개, 첫 문장, 본문, 해시태그, 댓글 유도 문장",
    instruction:
      "각 게시물이 서로 다른 각도와 후킹 포인트를 갖도록 작성해 주세요.",
  },
  {
    id: "ad-copy",
    name: "광고 카피",
    title: "광고 문구 A/B 테스트안 만들기",
    tags: ["광고", "카피"],
    variables: ["상품", "고객 문제", "광고 채널", "금지 표현"],
    output: "후킹 문구 15개, 짧은 카피, 긴 카피, 테스트 가설",
    instruction:
      "광고 심의나 플랫폼 정책에 걸릴 수 있는 단정적 표현을 피하고, 테스트 가능한 가설로 나눠 주세요.",
  },
  {
    id: "email-message",
    name: "이메일/문자/카톡",
    title: "상황별 메시지 작성하기",
    tags: ["메일", "문자"],
    variables: ["수신자", "목적", "상황", "원하는 톤"],
    output: "짧은 버전, 표준 버전, 정중한 버전, 후속 메시지",
    instruction:
      "부담스럽지 않고 명확한 문장으로, 상대가 다음 행동을 쉽게 알 수 있게 작성해 주세요.",
  },
  {
    id: "proposal",
    name: "제안서/영업자료",
    title: "제안서 뼈대 만들기",
    tags: ["제안서", "영업"],
    variables: ["제안 대상", "문제", "해결책", "성과 근거"],
    output: "제안서 목차, 핵심 슬라이드 문구, 예상 질문, 마무리 CTA",
    instruction:
      "상대의 의사결정 기준을 먼저 정리한 뒤, 제안 논리를 간결하게 구성해 주세요.",
  },
  {
    id: "cold-outreach",
    name: "콜드메일/DM",
    title: "차갑지 않은 첫 연락 만들기",
    tags: ["아웃리치", "DM"],
    variables: ["상대 정보", "제안 가치", "연락 목적", "요청 행동"],
    output: "메일 3종, DM 3종, 제목 10개, 팔로업 2개",
    instruction:
      "상대방 조사를 반영한 듯한 구체성을 넣고, 과도한 친근함이나 장황함은 피해주세요.",
  },
  {
    id: "customer-response",
    name: "고객 응대",
    title: "고객 문의에 정확히 답하기",
    tags: ["CS", "응대"],
    variables: ["고객 문의", "정책", "제공 가능한 해결책", "톤"],
    output: "즉시 답변, 상세 답변, 내부 확인용 메모, 재발 방지 문구",
    instruction:
      "고객 감정을 인정하면서도 가능한 범위와 불가능한 범위를 명확히 구분해 주세요.",
  },
  {
    id: "review-response",
    name: "리뷰 답변",
    title: "리뷰에 신뢰감 있게 답변하기",
    tags: ["리뷰", "평판"],
    variables: ["리뷰 내용", "사실관계", "보상 가능 여부", "브랜드 톤"],
    output: "긍정 리뷰 답변, 중립 리뷰 답변, 부정 리뷰 답변, 내부 개선 메모",
    instruction:
      "방어적으로 보이지 않게 작성하고, 공개 답변이 다른 잠재 고객에게도 신뢰를 주도록 구성해 주세요.",
  },
  {
    id: "crisis-notice",
    name: "위기 대응/공지",
    title: "문제 상황 공지문 만들기",
    tags: ["공지", "위기대응"],
    variables: ["문제 상황", "영향 범위", "현재 조치", "다음 업데이트 시간"],
    output: "짧은 공지, 상세 공지, FAQ, 내부 공유문",
    instruction:
      "책임 회피처럼 보이는 표현을 피하고, 확인된 사실과 예정된 조치를 분리해서 작성해 주세요.",
  },
  {
    id: "faq-help",
    name: "FAQ/헬프센터",
    title: "자주 묻는 질문 정리하기",
    tags: ["FAQ", "문서화"],
    variables: ["주제", "반복 문의", "정책", "초보자가 헷갈리는 지점"],
    output: "FAQ 15개, 답변, 관련 링크 자리, 추가 안내 문구",
    instruction:
      "초보자가 실제로 묻는 말투를 반영하고, 답변은 짧게 시작한 뒤 필요한 세부사항을 덧붙여 주세요.",
  },
  {
    id: "meeting-report",
    name: "회의록/업무보고",
    title: "회의와 업무 내용을 정리하기",
    tags: ["회의록", "보고"],
    variables: ["회의 메모", "참석자", "결정사항", "다음 액션"],
    output: "요약, 결정사항, 액션 아이템, 리스크, 공유용 메시지",
    instruction:
      "누가 무엇을 언제까지 해야 하는지가 드러나도록 정리하고, 애매한 부분은 확인 질문으로 남겨 주세요.",
  },
  {
    id: "documentation",
    name: "Notion/문서화/SOP",
    title: "업무 매뉴얼로 바꾸기",
    tags: ["SOP", "노션"],
    variables: ["반복 업무", "현재 방식", "예외상황", "담당자"],
    output: "목적, 절차, 체크리스트, 예외 처리, 업데이트 규칙",
    instruction:
      "새로 온 사람이 따라 할 수 있는 수준으로 단계와 판단 기준을 분리해 주세요.",
  },
  {
    id: "hiring-interview",
    name: "채용/면접",
    title: "채용 기준과 질문 만들기",
    tags: ["채용", "면접"],
    variables: ["역할", "필수 역량", "평가 방식", "조직 상황"],
    output: "채용공고, 평가 루브릭, 면접 질문, 과제 안내, 합불 메일",
    instruction:
      "좋은 사람을 추상적으로 찾는 대신 역할에서 실제로 필요한 행동 기준을 질문으로 바꿔 주세요.",
  },
  {
    id: "onboarding-training",
    name: "온보딩/교육자료",
    title: "처음 배우는 사람용 교육안 만들기",
    tags: ["온보딩", "교육"],
    variables: ["학습자 수준", "목표 행동", "교육 시간", "평가 방식"],
    output: "교육 목차, 실습, 체크리스트, 퀴즈, 피드백 문구",
    instruction:
      "설명만 나열하지 말고 학습자가 직접 해보는 활동과 확인 질문을 포함해 주세요.",
  },
  {
    id: "data-analysis",
    name: "데이터 분석 요청",
    title: "분석 질문을 명확히 만들기",
    tags: ["데이터", "분석"],
    variables: ["데이터 종류", "알고 싶은 것", "의사결정", "현재 지표"],
    output: "분석 질문, 필요한 컬럼, 분석 방법, 시각화, 해석 주의점",
    instruction:
      "데이터 분석가에게 바로 전달할 수 있도록 질문, 기준, 제외 조건을 구체화해 주세요.",
  },
  {
    id: "kpi-okr",
    name: "KPI/OKR",
    title: "목표와 지표 설계하기",
    tags: ["KPI", "OKR"],
    variables: ["큰 목표", "현재 상태", "기간", "제약"],
    output: "OKR, KPI, 선행지표, 후행지표, 주간 점검 질문",
    instruction:
      "측정 불가능한 목표를 줄이고, 실제 행동을 바꾸는 선행지표를 포함해 주세요.",
  },
  {
    id: "automation",
    name: "자동화 시나리오",
    title: "반복 업무 자동화 설계하기",
    tags: ["자동화", "워크플로"],
    variables: ["반복 업무", "사용 도구", "입력 데이터", "실패 시 처리"],
    output: "자동화 흐름, 트리거, 단계, 예외 처리, 검수 체크리스트",
    instruction:
      "완전 자동화가 위험한 구간은 사람 검토 단계로 남기고, 작은 자동화부터 제안해 주세요.",
  },
  {
    id: "legal-risk",
    name: "계약/정책 리스크 체크",
    title: "전문가 상담 전 질문 정리하기",
    tags: ["리스크", "계약"],
    variables: ["문서 또는 상황", "우려사항", "관련 당사자", "결정 기한"],
    output: "확인 질문, 리스크 목록, 추가 자료 요청, 전문가에게 물어볼 항목",
    instruction:
      "법률 조언처럼 단정하지 말고, 전문가에게 확인해야 할 질문과 리스크를 구조화해 주세요.",
  },
  {
    id: "study-learning",
    name: "학습/시험/연구",
    title: "공부와 연구를 실행 계획으로 바꾸기",
    tags: ["학습", "학생"],
    variables: ["학습 목표", "현재 수준", "마감일", "어려운 부분"],
    output: "학습 계획, 개념 설명, 연습문제, 피드백 기준, 복습 루틴",
    instruction:
      "정답을 대신 써주는 방식보다 이해, 연습, 자기 점검을 돕는 방식으로 구성해 주세요.",
  },
];

const WORKFLOW_PLAYBOOKS = {
  "market-research": {
    lens: "관찰된 사실, 합리적 추정, 추가 검증이 필요한 가설을 분리하는 조사자 관점",
    method: "시장 크기보다 의사결정 맥락, 반복 행동, 구매/참여 장벽을 먼저 찾습니다.",
    outputFrame: "상황 요약, 관찰 가능한 신호, 핵심 가설, 반대 가설, 확인 질문, 다음 조사 액션",
    qualityBar: "출처가 필요한 사실과 사용자의 입력만으로 판단 가능한 내용을 분리합니다.",
    avoid: "검색한 척하거나 숫자를 단정하지 말고, 검증 경로를 함께 제시하세요.",
    card: "조사 질문과 가설을 구분해 다음 액션까지 이어주는 프롬프트입니다.",
  },
  persona: {
    lens: "고객을 인구통계가 아니라 상황, 압박, 선택 기준으로 이해하는 리서처 관점",
    method: "페르소나마다 '왜 지금 움직이는지'와 '왜 미루는지'를 함께 만듭니다.",
    outputFrame: "페르소나 3종, 촉발 상황, 불안, 구매/참여 기준, 말투, 메시지 방향",
    qualityBar: "각 페르소나는 실제 행동이 달라질 만큼 구분되어야 합니다.",
    avoid: "나이/성별 같은 얕은 프로필만 늘어놓지 마세요.",
    card: "고객의 선택 기준과 망설임을 실제 메시지로 바꾸는 프롬프트입니다.",
  },
  idea: {
    lens: "아이디어를 많이 내는 사람보다 작게 검증하는 실험 설계자 관점",
    method: "아이디어를 난이도, 증거 수집 속도, 실패 비용으로 나눠 우선순위를 정합니다.",
    outputFrame: "아이디어 목록, 빠른 실험안, 필요한 증거, 실패 신호, 48시간 첫 액션",
    qualityBar: "각 아이디어는 바로 실행 가능한 첫 행동을 포함해야 합니다.",
    avoid: "그럴듯하지만 실행 조건이 없는 아이디어를 추천하지 마세요.",
    card: "브레인스토밍을 검증 가능한 실험 목록으로 바꾸는 프롬프트입니다.",
  },
  "product-planning": {
    lens: "기능보다 구매/사용 이유를 먼저 정리하는 상품 기획자 관점",
    method: "최소 구성, 표준 구성, 확장 구성을 나누고 각 구성의 선택 이유를 설명합니다.",
    outputFrame: "핵심 가치, 구성안, 가격/패키지, 차별점, 출시 전 검증 체크리스트",
    qualityBar: "대상이 돈이나 시간을 쓰는 이유가 한 문장으로 설명되어야 합니다.",
    avoid: "기능을 많이 넣는 방식으로만 해결하려 하지 마세요.",
    card: "상품 구조와 출시 전 검증 포인트를 함께 잡는 프롬프트입니다.",
  },
  "brand-message": {
    lens: "멋진 문구보다 기억되는 약속을 만드는 브랜드 에디터 관점",
    method: "짧은 문장, 설명형 문장, 고객이 쓰는 말투를 나란히 비교합니다.",
    outputFrame: "핵심 약속, 한 줄 소개, 상세 소개, 톤 가이드, 금지어, CTA 변형",
    qualityBar: "차별점이 추상어가 아니라 고객이 체감할 변화로 표현되어야 합니다.",
    avoid: "혁신적, 최고의, 압도적 같은 검증 어려운 표현에 기대지 마세요.",
    card: "브랜드 문장을 과장 없이 선명하게 정리하는 프롬프트입니다.",
  },
  "landing-page": {
    lens: "방문자의 의심을 순서대로 해소하는 전환 설계자 관점",
    method: "헤드라인부터 FAQ까지 '왜 지금, 왜 여기서, 왜 믿을 수 있는지' 흐름으로 구성합니다.",
    outputFrame: "히어로 문구, 섹션 순서, 증거 배치, FAQ, 반론 처리, CTA",
    qualityBar: "각 섹션은 방문자의 다음 질문 하나에 답해야 합니다.",
    avoid: "혜택만 반복하고 증거, 조건, 제한을 숨기지 마세요.",
    card: "판매 페이지를 설득 흐름과 반론 처리 중심으로 만드는 프롬프트입니다.",
  },
  "blog-seo": {
    lens: "검색 의도와 독자의 현재 지식을 맞추는 콘텐츠 전략가 관점",
    method: "키워드보다 검색자가 해결하려는 일을 먼저 정의하고 목차를 설계합니다.",
    outputFrame: "검색 의도, 제목 후보, 목차, 본문 초안, FAQ, 메타 설명, 내부링크 아이디어",
    qualityBar: "본문은 얕은 정의가 아니라 사례, 판단 기준, 실수 방지를 포함해야 합니다.",
    avoid: "키워드 반복으로 품질을 대신하지 마세요.",
    card: "검색 유입 글을 문제 해결형 구조로 만드는 프롬프트입니다.",
  },
  "social-content": {
    lens: "알고리즘보다 저장/공유할 이유를 만드는 콘텐츠 편집자 관점",
    method: "후킹, 본문 가치, 댓글 유도, 재활용 포맷을 한 번에 설계합니다.",
    outputFrame: "콘텐츠 각도 10개, 첫 문장, 본문, 시각 요소, CTA, 댓글 질문",
    qualityBar: "각 게시물은 서로 다른 감정 또는 정보 각도를 가져야 합니다.",
    avoid: "강한 첫 문장만 있고 본문 가치가 빈약한 글을 만들지 마세요.",
    card: "SNS 게시물을 후킹과 실제 가치가 같이 살아 있게 만드는 프롬프트입니다.",
  },
  "ad-copy": {
    lens: "감이 아니라 가설을 테스트하는 퍼포먼스 카피라이터 관점",
    method: "문제 인식, 혜택, 증거, 긴급성, 리스크 완화 각도로 카피를 나눕니다.",
    outputFrame: "테스트 가설, 카피 세트, 금지 표현 점검, 랜딩 연결 문구, 성과 해석 기준",
    qualityBar: "각 카피는 어떤 반응을 검증하려는지 명확해야 합니다.",
    avoid: "심의나 플랫폼 정책에 걸릴 수 있는 단정, 과장, 공포 조장을 피하세요.",
    card: "광고 문구를 A/B 테스트 가능한 가설로 나누는 프롬프트입니다.",
  },
  "email-message": {
    lens: "상대가 다음 행동을 쉽게 결정하게 돕는 커뮤니케이션 편집자 관점",
    method: "목적, 맥락, 요청, 마감, 선택지를 짧은 문장으로 정리합니다.",
    outputFrame: "짧은 버전, 표준 버전, 정중한 버전, 제목/첫 문장, 후속 메시지",
    qualityBar: "수신자가 무엇을 언제까지 하면 되는지 바로 보여야 합니다.",
    avoid: "예의는 갖추되 핵심 요청을 흐리게 만들지 마세요.",
    card: "이메일/문자/카톡을 명확하고 부담 없게 다듬는 프롬프트입니다.",
  },
  proposal: {
    lens: "상대의 의사결정 기준부터 맞추는 제안 전략가 관점",
    method: "문제, 비용, 대안, 제안 가치, 다음 행동을 한 흐름으로 정리합니다.",
    outputFrame: "의사결정 기준, 제안서 목차, 핵심 슬라이드 문구, 예상 질문, 마무리 CTA",
    qualityBar: "제안의 장점보다 상대가 왜 바꿔야 하는지가 먼저 드러나야 합니다.",
    avoid: "우리 소개를 길게 쓰고 상대의 문제를 뒤로 미루지 마세요.",
    card: "제안서와 영업자료를 의사결정 흐름에 맞게 만드는 프롬프트입니다.",
  },
  "cold-outreach": {
    lens: "짧지만 조사한 티가 나는 아웃리치 작성자 관점",
    method: "상대 맥락, 제안 이유, 작은 요청 하나로 메시지를 압축합니다.",
    outputFrame: "메일 3종, DM 3종, 제목 10개, 첫 문장 변형, 팔로업 2개",
    qualityBar: "첫 문장에 상대와 무관한 일반론이 없어야 합니다.",
    avoid: "과한 친근함, 장황한 자기소개, 여러 요청을 한 번에 넣는 실수를 피하세요.",
    card: "콜드메일과 DM을 짧고 구체적인 첫 연락으로 바꾸는 프롬프트입니다.",
  },
  "customer-response": {
    lens: "감정 인정과 정책 경계를 함께 지키는 CS 리더 관점",
    method: "공감, 사실 확인, 가능한 조치, 불가능한 이유, 다음 안내를 분리합니다.",
    outputFrame: "즉시 답변, 상세 답변, 내부 메모, 정책 설명, 재발 방지 문구",
    qualityBar: "고객이 들은 느낌과 해결 범위를 동시에 이해해야 합니다.",
    avoid: "사과만 반복하거나, 정책을 방패처럼 내세우는 답변을 피하세요.",
    card: "고객 문의를 감정과 정책 모두 놓치지 않고 처리하는 프롬프트입니다.",
  },
  "review-response": {
    lens: "공개 답변을 보는 다음 고객까지 고려하는 평판 관리자 관점",
    method: "리뷰 감정, 사실관계, 공개 답변, 내부 개선 메모를 분리합니다.",
    outputFrame: "긍정/중립/부정 답변, 짧은 버전, 상세 버전, 내부 개선 메모",
    qualityBar: "답변은 작성자뿐 아니라 읽고 있는 잠재 고객에게도 신뢰를 줘야 합니다.",
    avoid: "논쟁하거나 책임을 돌리는 뉘앙스를 만들지 마세요.",
    card: "리뷰 답변을 평판 관리와 내부 개선까지 연결하는 프롬프트입니다.",
  },
  "crisis-notice": {
    lens: "불확실한 상황에서 신뢰를 지키는 커뮤니케이션 책임자 관점",
    method: "확인된 사실, 영향 범위, 현재 조치, 다음 업데이트를 분리합니다.",
    outputFrame: "짧은 공지, 상세 공지, FAQ, 내부 공유문, 다음 업데이트 문구",
    qualityBar: "모르는 것을 숨기지 않고 다음 확인 시점을 제시해야 합니다.",
    avoid: "책임 회피, 과도한 낙관, 확인되지 않은 원인 단정을 피하세요.",
    card: "문제 상황 공지를 사실과 조치 중심으로 정리하는 프롬프트입니다.",
  },
  "faq-help": {
    lens: "초보자의 언어로 복잡한 정책을 풀어내는 헬프센터 에디터 관점",
    method: "질문을 실제 말투로 만들고, 답변은 결론부터 짧게 시작합니다.",
    outputFrame: "FAQ 15개, 한 줄 답변, 상세 설명, 관련 링크 자리, 추가 안내 문구",
    qualityBar: "답변을 읽고 문의를 다시 남기지 않아도 될 만큼 다음 행동이 분명해야 합니다.",
    avoid: "내부 용어와 예외 조항을 설명 없이 던지지 마세요.",
    card: "반복 문의를 줄이는 FAQ와 헬프센터 문서를 만드는 프롬프트입니다.",
  },
  "meeting-report": {
    lens: "회의 내용을 실행 책임으로 바꾸는 운영 PM 관점",
    method: "논의, 결정, 보류, 담당자, 마감일을 분리합니다.",
    outputFrame: "요약, 결정사항, 액션 아이템, 리스크, 확인 질문, 공유용 메시지",
    qualityBar: "누가 무엇을 언제까지 해야 하는지 빠지면 안 됩니다.",
    avoid: "회의 내용을 예쁘게 요약만 하고 실행 항목을 흐리지 마세요.",
    card: "회의와 업무 메모를 책임과 마감이 있는 실행안으로 바꾸는 프롬프트입니다.",
  },
  documentation: {
    lens: "처음 온 사람도 따라 할 수 있게 만드는 운영 매뉴얼 작성자 관점",
    method: "목적, 준비물, 절차, 판단 기준, 예외 처리, 업데이트 규칙을 나눕니다.",
    outputFrame: "SOP 초안, 체크리스트, 예외 처리, 담당자 기준, 업데이트 규칙",
    qualityBar: "숙련자의 암묵지를 판단 기준과 예외 처리로 풀어야 합니다.",
    avoid: "단계만 나열하고 왜 그렇게 하는지 설명하지 않는 문서를 피하세요.",
    card: "반복 업무를 신규 담당자도 따라 할 수 있는 SOP로 만드는 프롬프트입니다.",
  },
  "hiring-interview": {
    lens: "좋은 사람보다 역할에서 성공할 행동을 정의하는 채용 설계자 관점",
    method: "역량을 행동 증거, 질문, 평가 기준, 과제 방식으로 변환합니다.",
    outputFrame: "채용공고, 평가 루브릭, 면접 질문, 과제 안내, 합불 메일",
    qualityBar: "각 질문은 특정 역량을 평가하는 이유가 있어야 합니다.",
    avoid: "성격 좋은 사람, 핏 좋은 사람 같은 모호한 기준에 기대지 마세요.",
    card: "채용 기준을 행동 증거와 평가표로 바꾸는 프롬프트입니다.",
  },
  "onboarding-training": {
    lens: "설명보다 실제 수행을 설계하는 교육 경험 디자이너 관점",
    method: "학습 목표, 짧은 설명, 실습, 피드백, 점검 질문을 묶습니다.",
    outputFrame: "교육 목차, 실습 시나리오, 체크리스트, 퀴즈, 피드백 문구",
    qualityBar: "교육이 끝났을 때 학습자가 할 수 있어야 하는 행동이 명확해야 합니다.",
    avoid: "정보 전달만 많고 연습과 확인이 없는 교육안을 만들지 마세요.",
    card: "온보딩과 교육자료를 실습 중심으로 설계하는 프롬프트입니다.",
  },
  "data-analysis": {
    lens: "데이터보다 의사결정 질문을 먼저 정리하는 분석 파트너 관점",
    method: "질문, 필요한 컬럼, 제외 조건, 분석 방법, 해석 주의점을 분리합니다.",
    outputFrame: "분석 질문, 필요한 데이터, 방법, 시각화안, 해석 주의점, 다음 실험",
    qualityBar: "분석 결과가 어떤 결정을 바꿀지 먼저 정의해야 합니다.",
    avoid: "데이터가 있으면 다 알 수 있다는 식의 과도한 해석을 피하세요.",
    card: "분석 요청을 의사결정 가능한 질문으로 정리하는 프롬프트입니다.",
  },
  "kpi-okr": {
    lens: "목표를 행동 변화와 측정 지표로 연결하는 성과 설계자 관점",
    method: "결과 지표, 선행 지표, 점검 리듬, 왜곡 가능성을 함께 봅니다.",
    outputFrame: "OKR, KPI, 선행지표, 후행지표, 주간 점검 질문, 지표 왜곡 리스크",
    qualityBar: "지표가 좋아져도 실제 목표가 나빠지는 역효과를 점검해야 합니다.",
    avoid: "측정하기 쉬운 숫자만 KPI로 삼지 마세요.",
    card: "목표와 지표를 실행 리듬까지 연결하는 프롬프트입니다.",
  },
  automation: {
    lens: "자동화보다 실패했을 때 안전한 흐름을 설계하는 운영 자동화 설계자 관점",
    method: "트리거, 입력, 처리, 검수, 예외, 롤백을 단계별로 나눕니다.",
    outputFrame: "자동화 흐름, 도구별 역할, 예외 처리, 사람 검토 지점, 검수 체크리스트",
    qualityBar: "완전 자동화와 사람 검토가 필요한 구간이 분명해야 합니다.",
    avoid: "위험한 결정을 자동화에 넘기거나 실패 시 처리를 생략하지 마세요.",
    card: "반복 업무 자동화를 검수와 예외 처리까지 포함해 설계하는 프롬프트입니다.",
  },
  "legal-risk": {
    lens: "답을 단정하지 않고 전문가에게 물어볼 쟁점을 정리하는 리스크 매니저 관점",
    method: "사실관계, 이해관계자, 리스크, 확인 질문, 보수적 선택지를 분리합니다.",
    outputFrame: "사실관계 정리, 리스크 목록, 확인 질문, 추가 자료, 전문가 상담 메모",
    qualityBar: "법률 조언처럼 단정하지 않고 확인해야 할 질문으로 정리해야 합니다.",
    avoid: "위법/적법을 단정하거나 계약 문구를 최종 판단처럼 제시하지 마세요.",
    card: "계약과 정책 이슈를 전문가 상담 전 질문으로 정리하는 프롬프트입니다.",
  },
  "study-learning": {
    lens: "정답 제공보다 이해, 연습, 복습 루틴을 설계하는 학습 코치 관점",
    method: "현재 수준을 기준으로 개념, 예제, 연습, 피드백, 복습을 단계화합니다.",
    outputFrame: "학습 계획, 핵심 개념, 예제, 연습문제, 자기 점검, 복습 루틴",
    qualityBar: "학습자가 스스로 설명하고 적용할 수 있는 확인 장치가 있어야 합니다.",
    avoid: "과제나 답안을 대신 완성하는 방식으로 흐르지 마세요.",
    card: "공부와 연구를 이해 중심의 실행 루틴으로 바꾸는 프롬프트입니다.",
  },
};

const AUDIENCE_GUIDES = {
  사업자: "매출, 재방문, 운영 부담, 고객 신뢰를 함께 고려하세요.",
  전문직: "규정, 리스크 고지, 신뢰, 기록 가능성을 우선하세요.",
  교육자: "학습자 수준, 보호자 커뮤니케이션, 평가 공정성을 고려하세요.",
  스타트업: "가설 검증, 속도, 제품 학습, 제한된 리소스를 기준으로 판단하세요.",
  실무자: "상사/동료에게 공유 가능한 구조와 바로 실행할 액션을 중시하세요.",
  크리에이터: "반응을 얻는 표현과 장기적인 신뢰를 같이 보세요.",
  운영자: "참여자 경험, 운영 리스크, 안내 명확성을 우선하세요.",
  개인사업자: "범위 관리, 견적, 고객 기대치, 반복 가능한 운영 방식을 고려하세요.",
  창작자: "세계관, 팬 반응, 지속 가능한 제작 리듬을 함께 보세요.",
  학생: "정답 대체보다 이해, 자기 점검, 제출 윤리를 우선하세요.",
  보호자: "아이의 자율성, 생활 리듬, 대화 방식이 상하지 않게 설계하세요.",
  개인: "강점 정리, 실행 부담, 다음 커리어 선택에 도움이 되게 구성하세요.",
};

const PROMPT_VARIANTS = [
  {
    label: "진단형",
    intent: "답을 바로 만들기보다 문제의 원인과 누락 정보를 먼저 좁힙니다.",
    step: "현재 입력에서 가장 위험한 가정 3개와 확인 질문을 먼저 제시해 주세요.",
    suffix: "문제를 먼저 좁히는 진단형 구조입니다.",
  },
  {
    label: "실행형",
    intent: "사용자가 오늘 바로 움직일 수 있게 산출물과 첫 행동을 중심으로 만듭니다.",
    step: "24시간 안에 실행할 수 있는 첫 액션과 필요한 준비물을 따로 적어 주세요.",
    suffix: "바로 실행할 수 있는 단계 중심 구조입니다.",
  },
  {
    label: "검증형",
    intent: "초안의 약점과 실패 가능성을 먼저 찾아 결과물의 신뢰도를 높입니다.",
    step: "완성안 뒤에 반례, 실패 조건, 수정 우선순위를 붙여 주세요.",
    suffix: "결과물을 한 번 더 검증하는 리뷰형 구조입니다.",
  },
  {
    label: "비교형",
    intent: "하나의 답만 내지 않고 선택지와 트레이드오프를 비교합니다.",
    step: "최소 3가지 대안을 만들고, 비용/효과/리스크 기준으로 비교해 주세요.",
    suffix: "여러 대안을 비교해 선택을 돕는 구조입니다.",
  },
];

const getWorkflowPlaybook = (workflow) => WORKFLOW_PLAYBOOKS[workflow.id];
const getAudienceGuide = (industry) => AUDIENCE_GUIDES[industry.audience] || "사용자의 실제 맥락과 실행 가능성을 우선하세요.";
const getPromptVariant = (index) => PROMPT_VARIANTS[index % PROMPT_VARIANTS.length];
const listIndustryTags = (industry) => industry.tags.join(", ");

const buildPrompt = (industry, workflow, index) => {
  const playbook = getWorkflowPlaybook(workflow);
  const audienceGuide = getAudienceGuide(industry);
  const variant = getPromptVariant(index);
  const variableLines = workflow.variables
    .map((variable) => `- ${variable}: {${variable}}`)
    .join("\n");

  return {
    id: `kr-${String(index + 1).padStart(4, "0")}`,
    title: `${industry.name} - ${workflow.title}`,
    industry: industry.name,
    industryId: industry.id,
    audience: industry.audience,
    function: workflow.name,
    functionId: workflow.id,
    tags: [...new Set([...industry.tags, ...workflow.tags])],
    variables: workflow.variables,
    description: `${industry.context} 맥락에서 ${playbook.card} ${variant.suffix}`,
    outputFormat: playbook.outputFrame,
    exampleInput: `${workflow.variables[0]}: ${industry.context}`,
    prompt: `당신은 "${industry.name}" 분야의 실무를 잘 이해하는 AI 업무 파트너입니다.

목표:
- 사용자가 ${workflow.name} 업무를 더 빠르고 정확하게 처리하도록 돕습니다.
- 일반론이 아니라 "${industry.context}" 맥락에 맞춘 결과물을 만듭니다.
- 이번 프롬프트는 ${variant.label}입니다. ${variant.intent}

배경:
- 분야: ${industry.name}
- 대상: ${industry.audience}
- 산업 키워드: ${listIndustryTags(industry)}
- 맥락: ${industry.context}
- 업무 유형: ${workflow.name}
- 관점: ${playbook.lens}

사용자 입력:
${variableLines}

진행 방식:
1. 입력이 부족하면 답을 시작하기 전에 꼭 필요한 확인 질문을 최대 5개만 물어보세요.
2. 사용자의 상황을 한 문단으로 재정의하고, 핵심 제약과 기회를 분리해 주세요.
3. ${workflow.instruction}
4. ${playbook.method}
5. ${variant.step}
6. ${audienceGuide}
7. 실행자가 바로 복사해서 쓸 수 있는 문장, 표, 체크리스트를 포함해 주세요.
8. 확실하지 않은 내용은 "확인 필요"로 표시하고, 검증 방법을 함께 적어 주세요.

품질 기준:
- ${playbook.qualityBar}
- 결과물은 초안, 개선안, 바로 쓸 문장으로 나누어 주세요.
- 업계 특성상 민감한 표현, 규정, 비용, 일정, 책임 소재가 있으면 별도 경고로 표시하세요.
- 사용자가 다음에 무엇을 해야 하는지 마지막에 3단계로 정리해 주세요.

피해야 할 실수:
- ${playbook.avoid}
- 빈칸 채우기식 일반론, 과장된 성과 약속, 출처 없는 숫자 단정을 피하세요.
- 사용자의 일을 대신 끝내기보다 판단 기준과 실행 가능한 초안을 제공하세요.

출력 형식:
${playbook.outputFrame}`,
  };
};

const BASE_PROMPTS = INDUSTRIES.flatMap((industry, industryIndex) =>
  WORKFLOWS.map((workflow, workflowIndex) =>
    buildPrompt(industry, workflow, industryIndex * WORKFLOWS.length + workflowIndex),
  ),
);

const TREND_PATTERNS = [
  {
    id: "question-ladder",
    title: "막힌 문제를 질문으로 뚫는 진단 프롬프트",
    functionId: "idea",
    industryIds: ["local-business", "saas-startup", "developer-team", "pm-po", "job-seeker"],
    tags: ["트렌드", "진단", "질문"],
    variables: ["막힌 문제", "이미 시도한 방법", "피하고 싶은 해결책", "성공 기준"],
    outputFormat: "질문 10개, 새로운 접근 3개, 첫 실행 단계, 확인해야 할 리스크",
    description: "Reddit에서 반복적으로 공유되는 '충분히 질문하고 새 접근을 찾는' 방식의 문제 해결 프롬프트입니다.",
    instruction:
      "답을 바로 내기 전에 문제를 좁히는 질문을 우선 제시하고, 질문 없이 단정할 수 없는 부분은 가설로 표시해 주세요.",
  },
  {
    id: "reverse-evaluator",
    title: "결론을 거꾸로 검증하는 셀프 리뷰 프롬프트",
    functionId: "meeting-report",
    industryIds: ["legal", "finance-tax", "data-research", "graduate-researcher", "developer-team"],
    tags: ["트렌드", "검증", "리뷰"],
    variables: ["검토할 초안", "목표", "실패하면 안 되는 부분", "판단 기준"],
    outputFormat: "핵심 주장, 취약한 근거, 반례, 수정안, 최종 체크리스트",
    description: "초안을 만든 뒤 역방향으로 평가해 오류를 줄이는 2026식 검증 루프 프롬프트입니다.",
    instruction:
      "초안의 결론이 틀렸다고 가정하고 반례와 누락 정보를 먼저 찾은 뒤, 유지할 부분과 고칠 부분을 분리해 주세요.",
  },
  {
    id: "agent-guardrails",
    title: "에이전트 실행 전 가드레일 설계 프롬프트",
    functionId: "automation",
    industryIds: ["saas-startup", "developer-team", "customer-support", "logistics", "public-nonprofit"],
    tags: ["트렌드", "에이전트", "가드레일"],
    variables: ["자동화 목표", "사용할 도구", "금지 행동", "사람 검토가 필요한 조건"],
    outputFormat: "작업 흐름, 도구 사용 조건, 중단 규칙, 검수 지점, 로그 항목",
    description: "최근 에이전트형 업무 자동화에서 중요해진 제약, 검증, 중단 조건을 설계하는 프롬프트입니다.",
    instruction:
      "자동화가 해도 되는 일과 멈춰야 하는 일을 명확히 나누고, 위험한 단계에는 사람 승인 조건을 넣어 주세요.",
  },
  {
    id: "prompt-to-workflow",
    title: "한 문장 목표를 업무 파이프라인으로 바꾸기",
    functionId: "automation",
    industryIds: ["marketing-agency", "creator", "ecommerce", "hr", "events-community"],
    tags: ["트렌드", "워크플로", "자동화"],
    variables: ["최종 목표", "반복되는 입력", "사용 가능한 도구", "검토 담당자"],
    outputFormat: "트리거, 단계별 작업, 산출물, 예외 처리, 리뷰 게이트",
    description: "단일 프롬프트보다 흐름과 리뷰 게이트를 설계하는 방식으로 확장한 업무 자동화 프롬프트입니다.",
    instruction:
      "한 번의 답변이 아니라 반복 실행 가능한 흐름으로 쪼개고, 각 단계의 입력과 산출물을 짝지어 주세요.",
  },
  {
    id: "wait-what-hook",
    title: "X/Threads용 '잠깐 뭐라고?' 훅 만들기",
    functionId: "social-content",
    industryIds: ["creator", "marketing-agency", "saas-startup", "freelancer", "career-transition"],
    tags: ["트렌드", "X", "훅"],
    variables: ["주제", "타깃 독자", "반전 포인트", "말투"],
    outputFormat: "짧은 훅 20개, 본문 스레드 3개, 댓글 유도 문장, 피해야 할 과장",
    description: "X와 Threads에서 많이 쓰이는 반전형 첫 문장 구조를 실무 콘텐츠로 바꾸는 프롬프트입니다.",
    instruction:
      "낚시성 문장보다 실제 배울 점이 있는 반전으로 시작하고, 첫 문장만 강한 글이 되지 않게 본문 논리를 이어 주세요.",
  },
  {
    id: "thats-me-story",
    title: "독자가 '이거 내 얘기다'라고 느끼는 짧은 이야기",
    functionId: "social-content",
    industryIds: ["restaurant-cafe", "beauty", "academy", "creator", "parent-learning"],
    tags: ["트렌드", "공감", "스토리"],
    variables: ["상황", "독자의 속마음", "전환점", "제안하고 싶은 행동"],
    outputFormat: "짧은 이야기 5개, 첫 문장, 감정 포인트, CTA, 댓글 질문",
    description: "Instagram/Reels 계정에서 자주 쓰는 공감형 스토리텔링을 업종별 콘텐츠로 바꾸는 프롬프트입니다.",
    instruction:
      "과한 드라마 대신 실제 고객이 겪는 작은 불편과 속마음을 중심으로 짧고 선명하게 작성해 주세요.",
  },
  {
    id: "seven-second-reel",
    title: "7초 안에 붙잡는 숏폼 오프닝",
    functionId: "social-content",
    industryIds: ["creator", "restaurant-cafe", "beauty", "travel", "game-entertainment"],
    tags: ["트렌드", "릴스", "숏폼"],
    variables: ["영상 주제", "첫 장면", "시청자", "원하는 반응"],
    outputFormat: "7초 오프닝 15개, 화면 구성, 자막, 컷 전환, 다음 장면",
    description: "Reels/TikTok/Shorts에서 반복되는 초반 유지율 중심의 숏폼 훅 프롬프트입니다.",
    instruction:
      "첫 2초의 화면과 자막을 함께 제안하고, 소리 없이 봐도 이해되는 구조로 작성해 주세요.",
  },
  {
    id: "spicy-carousel",
    title: "의견처럼 시작해 유용하게 끝나는 캐러셀",
    functionId: "social-content",
    industryIds: ["marketing-agency", "finance-insurance", "legal", "teacher-instructor", "pm-po"],
    tags: ["트렌드", "캐러셀", "교육"],
    variables: ["주제", "논쟁적 관점", "알려줄 핵심", "독자 수준"],
    outputFormat: "슬라이드 8장, 각 장 제목, 본문, 저장 유도 문장, 댓글 질문",
    description: "Instagram/LinkedIn에서 반응이 좋은 관점 제시형 교육 캐러셀 프롬프트입니다.",
    instruction:
      "자극적인 제목으로 시작하되 본문은 실용적인 기준과 예시로 설득하고, 단정적 조언은 피해주세요.",
  },
  {
    id: "linkedin-contrarian",
    title: "LinkedIn용 반대 관점 인사이트 글",
    functionId: "social-content",
    industryIds: ["b2b-sales", "saas-startup", "hr", "freelancer", "finance-tax"],
    tags: ["트렌드", "LinkedIn", "인사이트"],
    variables: ["업계 통념", "반대 근거", "경험 사례", "독자가 얻을 교훈"],
    outputFormat: "포스트 3개, 오프닝, 본문 구조, 한 줄 교훈, 댓글 유도 질문",
    description: "LinkedIn에서 공유되는 '통념 뒤집기' 형식의 전문성 콘텐츠 프롬프트입니다.",
    instruction:
      "억지 반박이 아니라 실제 경험과 근거를 기반으로 통념의 한계를 설명하고, 실무자가 쓸 수 있는 기준으로 마무리해 주세요.",
  },
  {
    id: "reddit-ama-seed",
    title: "Reddit/커뮤니티 토론을 여는 질문 글",
    functionId: "social-content",
    industryIds: ["game-entertainment", "developer-team", "student-club", "public-nonprofit", "media-publishing"],
    tags: ["트렌드", "Reddit", "커뮤니티"],
    variables: ["커뮤니티 주제", "내 경험", "묻고 싶은 논점", "분위기"],
    outputFormat: "게시글 5개, 제목, 본문, 토론 질문, 모더레이션 주의점",
    description: "Reddit식 토론 게시글과 AMA 오프닝을 한국어 커뮤니티 운영에 맞춘 프롬프트입니다.",
    instruction:
      "홍보성 문구를 줄이고, 사람들이 자기 경험을 남기고 싶어지는 열린 질문으로 구성해 주세요.",
  },
  {
    id: "action-figure-visual",
    title: "브랜드/직무를 액션 피규어 패키지로 시각화하기",
    functionId: "brand-message",
    industryIds: ["creator", "freelancer", "beauty", "real-estate", "job-seeker"],
    tags: ["트렌드", "이미지", "액션피규어"],
    variables: ["인물 또는 브랜드", "상징 소품", "패키지 문구", "사용 플랫폼"],
    outputFormat: "이미지 생성 프롬프트, 캡션 5개, 썸네일 문구, 사용 주의점",
    description: "X/Instagram에서 확산된 액션 피규어 패키지 이미지를 포트폴리오와 브랜드 소개용으로 바꾸는 프롬프트입니다.",
    instruction:
      "실존 인물의 권리와 허위 과장을 피하고, 업의 특징이 소품과 패키지 정보로 보이게 구성해 주세요.",
  },
  {
    id: "career-caricature",
    title: "커리어 캐리커처형 자기소개 이미지",
    functionId: "brand-message",
    industryIds: ["career-transition", "job-seeker", "college-student", "creator", "freelancer"],
    tags: ["트렌드", "이미지", "캐리커처"],
    variables: ["나의 역할", "강점", "취미 또는 개성", "피하고 싶은 이미지"],
    outputFormat: "이미지 프롬프트, 자기소개 문구, 게시 캡션, 포트폴리오 활용안",
    description: "SNS에서 유행한 캐리커처/프로필 이미지 흐름을 커리어 브랜딩에 맞춘 프롬프트입니다.",
    instruction:
      "외모 평가가 아니라 역할, 강점, 도구, 작업 환경을 시각적 단서로 표현하고, 전문성이 흐려지지 않게 조정해 주세요.",
  },
  {
    id: "retro-polaroid",
    title: "레트로 폴라로이드 무드의 사례 콘텐츠",
    functionId: "social-content",
    industryIds: ["travel", "restaurant-cafe", "food-agriculture", "architecture-interior", "events-community"],
    tags: ["트렌드", "이미지", "레트로"],
    variables: ["보여줄 장면", "감정", "브랜드 톤", "게시 채널"],
    outputFormat: "이미지 프롬프트, 캡션 5개, 스토리 문구, 해시태그",
    description: "Instagram에서 반복적으로 보이는 빈티지/폴라로이드형 이미지 무드를 홍보 콘텐츠로 바꾸는 프롬프트입니다.",
    instruction:
      "분위기만 있는 이미지가 아니라 제품, 장소, 경험이 분명히 보이도록 장면과 소품을 구체화해 주세요.",
  },
  {
    id: "miniature-3d-mockup",
    title: "3D 미니어처/디오라마 상품 소개",
    functionId: "product-planning",
    industryIds: ["ecommerce", "manufacturing", "architecture-interior", "food-agriculture", "game-entertainment"],
    tags: ["트렌드", "이미지", "3D"],
    variables: ["상품 또는 공간", "핵심 특징", "비율 또는 구도", "사용처"],
    outputFormat: "이미지 프롬프트, 상세페이지 문구, 비교 포인트, 주의 문구",
    description: "3D 피규어/미니어처 이미지 트렌드를 상품 설명과 시각 자료 제작에 맞춘 프롬프트입니다.",
    instruction:
      "실제 상품 정보와 혼동되지 않도록 컨셉 이미지임을 구분하고, 구매 판단에 필요한 핵심 특징을 함께 설명해 주세요.",
  },
  {
    id: "how-you-treat-me",
    title: "AI가 보는 관계/브랜드 경험 이미지",
    functionId: "brand-message",
    industryIds: ["customer-support", "parent-learning", "teacher-instructor", "clinic", "finance-insurance"],
    tags: ["트렌드", "이미지", "브랜딩"],
    variables: ["상대 또는 고객", "관계의 특징", "보여주고 싶은 감정", "금지 표현"],
    outputFormat: "이미지 프롬프트, 해석 문구, 개선 포인트, 게시 여부 체크리스트",
    description: "'나를 어떻게 대하는지 이미지로 표현해줘' 유형의 유행을 고객 경험 점검용으로 재구성한 프롬프트입니다.",
    instruction:
      "감성적인 표현에 그치지 말고 관계에서 반복되는 행동, 말투, 기대를 시각적 은유와 개선 포인트로 연결해 주세요.",
  },
  {
    id: "skill-tree-learning",
    title: "스킬 트리 기반 학습 로드맵",
    functionId: "study-learning",
    industryIds: ["middle-high-student", "college-student", "graduate-researcher", "exam-certificate", "study-abroad-language"],
    tags: ["트렌드", "학습", "로드맵"],
    variables: ["배울 주제", "현재 수준", "주당 학습 시간", "목표"],
    outputFormat: "스킬 트리, 선행 개념, 4주 계획, 연습 과제, 자가 테스트",
    description: "Reddit에서 인기를 얻은 단계형 학습 설계 프롬프트를 한국어 학습 상황에 맞춘 버전입니다.",
    instruction:
      "학습 스타일 같은 근거 약한 분류보다 현재 수준, 시간, 목표에 맞춘 선행 개념과 연습 루틴을 중심으로 설계해 주세요.",
  },
  {
    id: "mistake-notebook",
    title: "오답과 실패를 패턴으로 바꾸는 복기 프롬프트",
    functionId: "study-learning",
    industryIds: ["middle-high-student", "college-student", "exam-certificate", "developer-team", "b2b-sales"],
    tags: ["트렌드", "복기", "개선"],
    variables: ["실패한 결과", "내가 한 선택", "정답 또는 좋은 예", "다음 기회"],
    outputFormat: "실패 패턴, 원인 가설, 다음 행동, 연습문제, 체크 질문",
    description: "학습과 업무에서 결과보다 반복 패턴을 찾는 복기형 프롬프트입니다.",
    instruction:
      "사용자를 비난하지 말고 반복되는 판단 패턴과 환경 요인을 분리해, 다음 시도에서 바꿀 행동을 구체화해 주세요.",
  },
  {
    id: "paper-synthesis-map",
    title: "문헌/자료를 논쟁 지도로 정리하기",
    functionId: "market-research",
    industryIds: ["graduate-researcher", "data-research", "media-publishing", "legal", "public-nonprofit"],
    tags: ["트렌드", "리서치", "종합"],
    variables: ["자료 묶음", "연구 질문", "대립되는 관점", "활용 목적"],
    outputFormat: "관점 지도, 합의점, 쟁점, 빈틈, 다음 자료 수집 질문",
    description: "긴 자료를 요약만 하지 않고 주장과 근거의 지도로 바꾸는 리서치 프롬프트입니다.",
    instruction:
      "각 자료의 주장을 동일한 기준으로 비교하고, 출처가 필요한 사실은 사용자가 확인할 수 있게 표시해 주세요.",
  },
  {
    id: "hyper-personalized-dm",
    title: "조사한 티가 나는 초개인화 DM",
    functionId: "cold-outreach",
    industryIds: ["b2b-sales", "freelancer", "marketing-agency", "saas-startup", "real-estate"],
    tags: ["트렌드", "DM", "개인화"],
    variables: ["상대 공개 정보", "내 제안", "공통 맥락", "원하는 다음 행동"],
    outputFormat: "짧은 DM 5개, 이메일 3개, 팔로업 2개, 과한 표현 제거 목록",
    description: "콜드메일보다 짧고 구체적인 X/LinkedIn/Instagram DM 흐름을 영업용으로 다듬는 프롬프트입니다.",
    instruction:
      "상대가 감시받는 느낌을 받지 않도록 공개 정보 활용을 자연스럽게 제한하고, 요청은 하나만 남겨 주세요.",
  },
  {
    id: "one-page-business-plan",
    title: "1페이지 사업계획과 90일 실행안",
    functionId: "product-planning",
    industryIds: ["local-business", "ecommerce", "saas-startup", "freelancer", "student-club"],
    tags: ["트렌드", "사업계획", "90일"],
    variables: ["아이디어", "고객", "수익모델", "첫 마케팅 채널"],
    outputFormat: "1페이지 사업계획, 90일 실행안, 검증 지표, 중단 기준",
    description: "소셜에서 많이 공유되는 1페이지 사업계획 프롬프트를 실제 실행과 검증 중심으로 보강했습니다.",
    instruction:
      "멋진 계획서보다 첫 90일에 검증할 가설, 필요한 증거, 그만둘 기준을 분명히 써 주세요.",
  },
];

const buildTrendPrompt = (pattern, industry, index) => {
  const workflow = WORKFLOWS.find((item) => item.id === pattern.functionId);
  const playbook = getWorkflowPlaybook(workflow);
  const audienceGuide = getAudienceGuide(industry);
  const variant = getPromptVariant(index + BASE_PROMPTS.length);
  const variableLines = pattern.variables
    .map((variable) => `- ${variable}: {${variable}}`)
    .join("\n");

  return {
    id: `trend-${String(index + 1).padStart(4, "0")}`,
    title: `${industry.name} - ${pattern.title}`,
    industry: industry.name,
    industryId: industry.id,
    audience: industry.audience,
    function: workflow.name,
    functionId: workflow.id,
    tags: [...new Set([...industry.tags, ...workflow.tags, ...pattern.tags])],
    variables: pattern.variables,
    description: `${industry.context} 맥락에 맞춰 ${pattern.description} ${variant.suffix}`,
    outputFormat: pattern.outputFormat,
    exampleInput: `${pattern.variables[0]}: ${industry.context}`,
    prompt: `당신은 "${industry.name}" 분야의 실무 맥락과 최신 AI 활용 흐름을 함께 이해하는 프롬프트 코치입니다.

목표:
- Reddit, X, Instagram에서 반응이 좋은 구조를 실무 결과물로 번역합니다.
- 유행 문법을 그대로 따라 하지 않고 "${industry.context}" 상황에서 쓸 수 있게 조정합니다.
- 이번 프롬프트는 ${variant.label}입니다. ${variant.intent}

배경:
- 분야: ${industry.name}
- 대상: ${industry.audience}
- 산업 키워드: ${listIndustryTags(industry)}
- 맥락: ${industry.context}
- 업무 유형: ${workflow.name}
- 트렌드 패턴: ${pattern.title}
- 실무 관점: ${playbook.lens}

사용자 입력:
${variableLines}

트렌드 적용 방식:
1. 먼저 이 패턴이 왜 반응을 얻는지 심리적/실무적 이유를 3개로 설명해 주세요.
2. ${pattern.instruction}
3. ${playbook.method}
4. ${variant.step}
5. ${audienceGuide}
6. 과장, 낚시, 권리 침해, 민감한 단정이 생길 수 있는 지점을 표시하고 안전한 대안을 제시해 주세요.
7. 같은 내용을 보수적 버전, 강한 버전, 짧은 버전으로 변형해 주세요.
8. 바로 복사해서 쓸 수 있는 최종 산출물과 검수 체크리스트를 함께 주세요.

품질 기준:
- ${playbook.qualityBar}
- 유행 포맷의 재미와 실무자의 신뢰를 동시에 만족해야 합니다.
- 이미지/인물/브랜드가 관련되면 초상권, 상표, 허위 표현 가능성을 점검하세요.
- 마지막에는 게시 또는 실행 전에 확인할 항목 5개를 적어 주세요.

피해야 할 실수:
- ${playbook.avoid}
- 바이럴 문장만 만들고 실제 메시지나 행동으로 이어지지 않는 결과를 피하세요.
- 출처 없는 수치, 특정 플랫폼에서 보장된 성과, 타인 사칭을 암시하지 마세요.

출력 형식:
${pattern.outputFormat}`,
  };
};

const TREND_PROMPTS = TREND_PATTERNS.flatMap((pattern) =>
  pattern.industryIds.map((industryId) =>
    INDUSTRIES.find((industry) => industry.id === industryId),
  ),
).map((industry, index) => {
  const pattern = TREND_PATTERNS[Math.floor(index / 5)];
  return buildTrendPrompt(pattern, industry, index);
});

const PROMPTS = [...BASE_PROMPTS, ...TREND_PROMPTS];
