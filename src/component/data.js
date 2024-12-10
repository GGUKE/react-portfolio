const data = {
	project :[
		{
			id: 1,
			name: "Wylie",
			skills: ["React", "Redux", "JavaScript", "GSAP", "PWA"],
			des: "React를 활용하고 Redux로 상태 관리하여 제작한 클론 사이트입니다. 모바일과 PC에서 볼 수 있게 최대한 반응형을 고려하여 작업하였으며 Redux, redux-toolkit에 대한 학습이 되었습니다. 또한, PWA(progressive web app)를 적용하여 모바일 기기에서도 원활한 사용자 경험을 제공하며 오프라인에서도 작동할 수 있도록 만들었습니다.",
			url: "https://github.com/GGUKE/Wylie-index",
		  },
		  {
			id: 2,
			name: "Art center NABI",
			skills: ["React", "Redux", "JavaScript", "GSAP"],
			des: "React를 활용한 갤러 클론 코딩입니다. Movie, Tv, Search 페이지로 구성되어 있으며. 반응형으로 제작되었습니다. useState() 함수를 이용해 메인 슬라이더의 영상을 제어했습니다.",
			url: "https://github.com/GGUKE/NABI-index",
		  },
		  {
			id: 3,
			name: "O' kichen",
			skills: ["PWA", "Tailwind CSS", "SwiperJS", "GSAP"],
			des: "URL로 접속하여 쉽게 설치하고 이용할 수 있는 프로그레시브 웹 앱입니다. SwiperJS 라이브러리를 통해 컨텐츠와 광고 배너를 둘러볼 수 있게 제작하였으며 검색 버튼을 누르면 검색 화면으로 이동할 수 있습니다. 검색 화면의 '최근에 본 레시피' 섹션에서 '더보기' 버튼을 누르면 상세 페이지로 넘어갈 수 있고, 페이지 이동에 따라 헤더의 디자인과 기능이 변하도록 제작했습니다.",
			url: "https://github.com/GGUKE/O-kichen-index",
		  },
		  {
			id: 4,
			name: "Wconcept",
			skills: ["HTML", "CSS", "JavaScript"],
			des: "Wconcept 프로젝트는 최신 패션 트렌드를 반영한 쇼핑몰 웹사이트입니다. HTML과 CSS로 깔끔하고 직관적인 쇼핑몰 레이아웃을 설계하고, jQuery를 통해 제품 상세 페이지와 슬라이더를 동적으로 구현했습니다. Figma에서 UI/UX 디자인을 반영하여 쇼핑몰의 브랜드 이미지와 사용자의 편리성을 고려한 디자인을 구현하였습니다.",
			url: "https://github.com/GGUKE/Wconcept-index",
		  }
	],
	openSource :[
		{
			id: 1,
			name: "Redux Pagination",
			des: [
				"React Hook 함수 활용, useState() useEffect()",
				"AJAX Fetch API를 활용하여 데이터 로드",
				"데이터 로드 과정에서 로딩 바를 구현",
			],
			image: "/image/project1.png",
			link: "https://jg-open-1.vercel.app/",
		},
		{
			id: 2,
			name: "Menu Style Interaction",
			des: [
				"useState와 useEffect로 네비게이션 데이터 관리",
				"Fetch API로 JSON 데이터 비동기 로드",
				"마우스/키보드 인터랙션으로 메뉴 스타일 변경",
				"서브 메뉴가 있는 다단계 네비게이션",
			],
			image: "/image/project2.png",
			link: "https://jg-open-2.vercel.app/",
		},
		{
			id: 3,
			name: "Data Fetching & Loading",
			des: [
				"useState와 useEffect로 뉴스 데이터 관리",
				"AJAX Fetch로 비동기적으로 JSON 뉴스 데이터 불러오기",
				"로딩 애니메이션과 동적 뉴스 항목 렌더링",
			],
			image: "/image/project3.png",
			link: "https://jg-open-3.vercel.app/",
		},
		{
			id: 4,
			name: "GSAP Animation",
			des: [
				"데이터 로딩과 렌더링 방식",
				"GSAP 애니메이션 적용",
				"접근성 관련 처리",
				"이벤트 처리 및 상태 관리",
			],
			image: "/image/project4.png",
			link: "https://jg-open-4.vercel.app/",
		},
		{
			id: 5,
			name: "Swiper for Mobile",
			des: [
				"화면 크기에 따라 모바일/데스크탑용 슬라이더 분기",
				"모바일에서 Swiper로 슬라이드 수와 레이아웃 조정",
				"데스크탑은 기본 HTML 슬라이더 사용",
				"반응형 레이아웃 및 페이지네이션 지원",
			],
			image: "/image/project5.png",
			link: "https://jg-open-5.vercel.app/",
		},
		{
			id: 6,
			name: "Products with useState",
			des: [
				'"More" 버튼 클릭 시 3개의 제품을 추가로 표시합니다.',
				"제품의 이미지, 제목, 설명을 표시합니다.",
				"제품 데이터는 표시 수를 조정합니다.",
			],
			image: "/image/project6.png",
			link: "https://jg-open-6.vercel.app/",
		},
		{
			id: 7,
			name: "State Updates",
			des: [
				"제목과 날짜로 포트폴리오를 정렬하는 React 앱입니다.",
				"useState, useEffect로 데이터 관리 및 렌더링 처리합니다.",
				"컴포넌트로 각 항목을 표시하며, 정렬은 클릭 시 상태 업데이트로 반영됩니다.",
			],
			image: "/image/project7.png",
			link: "https://jg-open-7.vercel.app/",
		},
	]
}

export default data;