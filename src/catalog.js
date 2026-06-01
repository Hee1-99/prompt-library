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

const buildPrompt = (industry, workflow, index) => {
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
    description: `${industry.context} 맥락에서 ${workflow.name} 업무를 바로 시작할 수 있게 돕는 프롬프트입니다.`,
    outputFormat: workflow.output,
    exampleInput: `${workflow.variables[0]}: ${industry.context}`,
    prompt: `당신은 "${industry.name}" 분야의 실무를 잘 이해하는 AI 업무 파트너입니다.

배경:
- 분야: ${industry.name}
- 대상: ${industry.audience}
- 맥락: ${industry.context}
- 업무 유형: ${workflow.name}

사용자 입력:
${variableLines}

작업:
1. 먼저 사용자의 상황을 한 문단으로 재정의해 주세요.
2. ${workflow.instruction}
3. 실행자가 바로 복사해서 쓸 수 있는 문장과 체크리스트를 포함해 주세요.
4. 확실하지 않은 내용은 "확인 필요"로 표시하고, 추가로 물어볼 질문을 적어 주세요.
5. 한국어로 자연스럽고 실무적인 톤을 유지해 주세요.

출력 형식:
${workflow.output}`,
  };
};

const PROMPTS = INDUSTRIES.flatMap((industry, industryIndex) =>
  WORKFLOWS.map((workflow, workflowIndex) =>
    buildPrompt(industry, workflow, industryIndex * WORKFLOWS.length + workflowIndex),
  ),
);
