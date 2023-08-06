const projectDetail = {
  did: {
    subject: "Smart Contract를 통한 신원 인증 사이트",
    period: "2022/08/19 - 2022/09/26",
    imgPath: `${process.env.PUBLIC_URL}/assets/project/did_demo.gif`,
    techStack: [
      "Frontend: Next + Typescript",
      "Backend: Express, MySQL, JWT, Web3.js,",
      "LoginServer: NestJS, MySQL, Redis, JWT, Web3.js",
      "SmartContract: Truffle",
    ],
    assets: {
      github: "https://github.com/bitkunst/DID",
      demo: "",
      video: "",
    },
    intro: [
      "기업 협약 프로젝트 (한아이덴티티코리아)",
      "Smart Contract를 사용한 신원 인증 서비스",
      "인증된 계정을 이용해 타사이트에서 회원가입 및 로그인이 가능한 SSO 구현",
      "같은 계정으로 인증한 사이트간 포인트 공유 시스템 구현",
    ],
    roles: [
      "오프체인 확장 솔루션 중 하나인 Optimism을 사용해 Layer2에 사용자의 신원 정보를 저장하는 컨트랙트 작성 및 배포",
      "Layer1에도 컨트랙트를 배포하고 Layer2에서 Layer1으로 메시지를 전송해 유저들이 이더리움 네트워크에서도 사이트 등록 여부를 조회하는 기능 구현",
      "SSO를 적용할 수 있는 테스트 사이트 제작",
      "사용자들이 메타마스크와 연동해 사이트 등록 여부를 이더리움 네트워크에서 조회할 수 있는 테스트 사이트 제작",
    ],
    lessons: [
      "실제 기업에게 미션 가이드를 받고 협약 프로젝트를 진행해 보는 경험을 통해 현업에서 어떤 식으로 개발이 진행되는지 느껴볼 수 있었습니다.",
      "기업 측에서 해당 프로젝트를 더 발전시켜 실제 서비스로 상용화할 계획 중",
    ],
  },
  blockExplorer: {
    subject: "이더리움 기반 Block Explorer 사이트",
    period: "2022/07/04 - 2022/07/08",
    imgPath: `${process.env.PUBLIC_URL}/assets/project/no_image.png`,
    techStack: [
      "Frontend: React",
      "Backend: Express, Web3.js, Socket.io, MySQL, Sequelize",
    ],
    assets: {
      github: "https://github.com/bitkunst/Block_Explorer",
      demo: "",
      video: "",
    },
    intro: [
      "이더리움 네트워크 상의 Block 및 Transaction 정보 조회 사이트 (EtherScan과 같은 컨셉)",
      "채굴된 블록과 발생한 트랜잭션 정보를 실시간으로 조회 및 검색 가능",
    ],
    roles: [
      "Geth를 사용하여 PoW 방식의 프라이빗 네트워크 구축",
      "Socket.io와 Web3 라이브러리를 사용하여 실시간으로 블록 정보가 조회 가능하게끔 구현",
    ],
    lessons: [
      "Socket.io와 Web3 라이브러리를 같이 사용하여 실시간 블록체인 네트워크 상에 업데이트된 데이터들을 추적하는 스킬셋을 익히게 되었습니다.",
    ],
  },
  toastApp: {
    subject: "Android App 술자리의 민족",
    period: "2022/05/16 - 2022/05/30",
    imgPath: `${process.env.PUBLIC_URL}/assets/project/toastApp.gif`,
    techStack: ["Frontend: React Native + Expo"],
    assets: {
      github: "https://github.com/bitkunst/Project_Drunken_Korean",
      demo: "https://play.google.com/store/apps/details?id=com.jjlee.drunkenKorean",
      video: "",
    },
    intro: [
      "건배사하기 민망했던 경험들에서 아이디어를 얻고 만든 안드로이드 앱",
      "술자리 분위기에 따른 건배사 랜덤 추천",
      "다양한 술게임 설명서 제공",
    ],
    roles: [
      "컨텐츠 기획 및 UI 디자인",
      "술게임 설명서 쪽 화면 작업 및 데이터 수집",
      "구글 플레이스토어 배포",
    ],
    lessons: [
      "Expo 기반의 android 앱을 제작하여 구글플레이스토어에 배포하였습니다. 많은 기술 스텍을 사용하지는 않았지만 React-Native를 경험해 볼 수 있는 기회였습니다.",
      "React Native로 앱 제작하는 방법을 간단하게 배웠고, 웹이 아닌 앱의 배포 과정에 대해서도 간략히 파악하게 되었습니다.",
    ],
  },
  bnw: {
    subject: "리뷰 커뮤니티 사이트 BNW",
    period: "2022/03/21 - 2022/04/08",
    imgPath: `${process.env.PUBLIC_URL}/assets/project/bnw_demo.gif`,
    techStack: [
      "Frontend: HTML, CSS",
      "Backend: Express, Socket.io, JWT, Passport, MySQL",
    ],
    assets: {
      github: "https://github.com/bitkunst/Nodejs_team_project2",
      demo: "",
      video: "",
    },
    intro: [
      "영화, 애니메이션, 음악 등을 리뷰하고 사용자들이 서로 소통하는 리뷰 커뮤니티 사이트",
      "일반적인 리뷰 작성뿐만 아니라 socket을 통한 채팅 가능",
    ],
    roles: [
      "DB 스키마 제작",
      "Socket.io를 사용한 실시간 채팅 기능 및 채팅방 구현",
      "OAuth2.0 카카오/구글/네이버 로그인 구현",
      "검색 기능 및 검색 페이지 제작",
    ],
    lessons: [
      "Express를 사용해 백 서버를 구축하고 Database와의 통신에 대해 익힐 수 있었습니다.",
      "OAuth 2.0 프로토콜을 직접 구현해보면서 사용자 인증과 권한 부여의 복잡성을 깊게 이해할 수 있었습니다.",
      "Socket.io를 사용해 보면서 소켓 통신의 개념에 대해 공부해 볼 수 있었고 채팅방 구현 및 실시간 채팅에 대해 익힐 수 있었습니다.",
    ],
  },
};

export default projectDetail;
