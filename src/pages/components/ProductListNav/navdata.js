const MENUS = [
  {
    koreanName: "문구",
    englishName: "Stationery",
    categories: [
      {
        title: "프리미엄 펜",
        subcategories: [
          "153프리미엄",
          "데스크펜/스마트펜",
          "파카",
          "카렌다쉬",
          "카웨코",
          "메뉴스크립트"
        ]
      },
      {
        title: "펜/펜슬",
        subcategories: ["볼펜", "수성펜/사인펜", "연필/샤프", "형광펜"]
      },
      {
        title: "마카",
        subcategories: ["네임펜/유성매직", "생활/보드마카", "패브릭/세라믹마카"]
      },
      {
        title: "컬러링/브러쉬",
        subcategories: ["컬러링펜", "브러쉬펜", "미술용품"]
      },
      {
        title: "디자인문구",
        subcategories: [
          "다이어리/노트",
          "카드/봉투",
          "파우치",
          "풀/스티커/테이프",
          "스탬프",
          "데스크용품",
          "모나위 MD상품"
        ]
      }
    ]
  },
  {
    koreanName: "모나위펫",
    englishName: "MonawePet",
    dog: {
      categories: [
        {
          title: "사료",
          subcategories: ["건식사료", "습식사료", "퍼피", "어덜트", "시니어"]
        },
        {
          title: "간식",
          subcategories: [
            "동결건조간식",
            "껌",
            "저키/트릿",
            "비스킷/소시지",
            "캔/파우치",
            "수제간식영양제"
          ]
        },
        {
          title: "용품",
          subcategories: [
            "홈리빙",
            "배변",
            "그루밍",
            "외출",
            "놀이/훈련",
            "패션"
          ]
        },
        {
          title: "프리미엄식품관",
          subcategories: [
            "K9",
            "맥아담스",
            "카나간",
            "헤일로",
            "오리젠",
            "윔지스"
          ]
        }
      ]
    },
    cat: {
      categories: [
        {
          title: "사료",
          subcategories: ["건식사료", "습식사료", "키튼", "어덜트", "시니어"]
        },
        {
          title: "간식",
          subcategories: [
            "동결건조간식",
            "저키/트릿",
            "비스킷/소시지",
            "캔/파우치",
            "수제간식영양제",
            "캣닢/캣그라스"
          ]
        },
        {
          title: "용품",
          subcategories: [
            "홈리빙",
            "배변",
            "그루밍",
            "외출",
            "놀이/훈련",
            "패션"
          ]
        },
        {
          title: "프리미엄식품관",
          subcategories: [
            "K9(필라인)",
            "RAWZ",
            "아카나",
            "헤일로",
            "오리젠",
            "게더"
          ]
        }
      ]
    }
  },
  {
    koreanName: "취미DIY",
    englishName: "Craft&Hobby",
    subcategories: ["DY/KIT", "아트/북", "잉크랩", "클래스"]
  },
  {
    koreanName: "모나르떼",
    englishName: "monarte",
    subcategories: ["모나르떼"]
  },
  {
    koreanName: "스토리픽",
    englishName: "StoryPick",
    categories: [
      {
        title: "Stationery",
        subcategories: ["필기", "취미"]
      },
      {
        title: "Monawepet",
        subcategories: ["Puppy's Diary", "훈련", "노하우", "일상", "푸드"]
      },
      {
        title: "Craft&Hobby",
        subcategories: ["Diy", "Gift", "인테리어"]
      },
      {
        title: "Monarte",
        subcategories: ["교육", "미술"]
      }
    ]
  },
  {
    koreanName: "이벤트",
    englishName: "Event",
    subcategories: ["이벤트", "기획전", "아울렛"]
  }
];

export default MENUS;
