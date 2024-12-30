export type LetterPaperThemeType =
  | "basic"
  | "love"
  | "watercolor"
  | "cloud"
  | "universe"
  | "gradient"
  | "etc";

export interface LetterPaperTheme {
  id: LetterPaperThemeType;
  title: string;
}

export interface LetterPaper {
  id: string;
  title: string;
  url: string;
  theme: LetterPaperThemeType;
}

export const letterPaperThemeList: LetterPaperTheme[] = [
  { id: "basic", title: "심플" },
  { id: "love", title: "사랑" },
  { id: "watercolor", title: "수채화" },
  { id: "cloud", title: "구름" },
  { id: "universe", title: "우주" },
  { id: "gradient", title: "그라디언트" },
  { id: "etc", title: "기타" },
];

export const letterPaperList: LetterPaper[] = [
  {
    id: "B01",
    title: "하늘",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B01_하늘.png",
    theme: "basic",
  },
  {
    id: "B02",
    title: "라임",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B02_라임.png",
    theme: "basic",
  },
  {
    id: "B03",
    title: "복숭아",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B03_복숭아.png",
    theme: "basic",
  },
  {
    id: "B04",
    title: "자몽",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B04_자몽.png",
    theme: "basic",
  },
  {
    id: "B05",
    title: "감귤",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B05_감귤.png",
    theme: "basic",
  },
  {
    id: "B06",
    title: "액자",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B06_액자.png",
    theme: "basic",
  },
  {
    id: "B07",
    title: "보라",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B07_보라.png",
    theme: "basic",
  },
  {
    id: "B08",
    title: "한지_기본",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B08_한지_기본.png",
    theme: "basic",
  },
  {
    id: "B09",
    title: "한지_황토",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B09_한지_황토.png",
    theme: "basic",
  },
  {
    id: "B10",
    title: "한지_녹차",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B10_한지_녹차.png",
    theme: "basic",
  },
  {
    id: "B11",
    title: "한지_먹",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B11_한지_먹.png",
    theme: "basic",
  },
  {
    id: "B12",
    title: "패턴_노랑불빛",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B12_패턴_노랑불빛.png",
    theme: "basic",
  },
  {
    id: "B13",
    title: "패턴_흐린구름",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B13_패턴_흐린구름.png",
    theme: "basic",
  },
  {
    id: "B14",
    title: "패턴_맑은구름",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B14_패턴_맑은구름.png",
    theme: "basic",
  },
  {
    id: "B15",
    title: "패턴_민트하트",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B15_패턴_민트하트.png",
    theme: "basic",
  },
  {
    id: "B16",
    title: "패턴_달과구름",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B16_패턴_달과구름.png",
    theme: "basic",
  },
  {
    id: "B17",
    title: "패턴_초록줄",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/basic/B17_패턴_초록줄.png",
    theme: "basic",
  },
  {
    id: "L01",
    title: "인연의실",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/love/L01_인연의실.png",
    theme: "love",
  },
  {
    id: "L02",
    title: "수줍음",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/love/L02_수줍음.png",
    theme: "love",
  },
  {
    id: "L03",
    title: "애교",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/love/L03_애교.png",
    theme: "love",
  },
  {
    id: "L04",
    title: "하트와별",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/love/L04_하트와별.png",
    theme: "love",
  },
  {
    id: "L05",
    title: "설렘",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/love/L05_설렘.png",
    theme: "love",
  },
  {
    id: "L06",
    title: "빛나는마음",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/love/L06_빛나는마음.png",
    theme: "love",
  },
  {
    id: "L07",
    title: "그대에게",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/love/L07_그대에게.png",
    theme: "love",
  },
  {
    id: "L08",
    title: "하트베개",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/love/L08_하트베개.png",
    theme: "love",
  },
  {
    id: "L09",
    title: "하트방울",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/love/L09_하트방울.png",
    theme: "love",
  },
  {
    id: "S01",
    title: "봉숭아",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/watercolor/S01_봉숭아.png",
    theme: "watercolor",
  },
  {
    id: "S02",
    title: "소풍",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/watercolor/S02_소풍.png",
    theme: "watercolor",
  },
  {
    id: "S03",
    title: "환상_섬",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/watercolor/S03_환상_섬.png",
    theme: "watercolor",
  },
  {
    id: "S04",
    title: "환상_바다",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/watercolor/S04_환상_바다.png",
    theme: "watercolor",
  },
  {
    id: "S05",
    title: "환상_밤하늘",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/watercolor/S05_환상_밤하늘.png",
    theme: "watercolor",
  },
  {
    id: "S06",
    title: "환상_우주",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/watercolor/S06_환상_우주.png",
    theme: "watercolor",
  },
  {
    id: "S07",
    title: "호수",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/watercolor/S07_호수.png",
    theme: "watercolor",
  },
  {
    id: "S08",
    title: "초승달",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/watercolor/S08_초승달.png",
    theme: "watercolor",
  },
  {
    id: "S09",
    title: "담벼락",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/watercolor/S09_담벼락.png",
    theme: "watercolor",
  },
  {
    id: "S10",
    title: "물결_1",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/watercolor/S10_물결_1.png",
    theme: "watercolor",
  },
  {
    id: "S11",
    title: "물결_2",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/watercolor/S11_물결_2.png",
    theme: "watercolor",
  },
  {
    id: "C01",
    title: "뭉게구름_1",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C01_뭉게구름_1.png",
    theme: "cloud",
  },
  {
    id: "C02",
    title: "뭉게구름_2",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C02_뭉게구름_2.png",
    theme: "cloud",
  },
  {
    id: "C03",
    title: "뭉게구름_3",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C03_뭉게구름_3.png",
    theme: "cloud",
  },
  {
    id: "C04",
    title: "뭉게구름_4",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C04_뭉게구름_4.png",
    theme: "cloud",
  },
  {
    id: "C05",
    title: "아침노을",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C05_아침노을.png",
    theme: "cloud",
  },
  {
    id: "C06",
    title: "저녁노을",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C06_저녁노을.png",
    theme: "cloud",
  },
  {
    id: "C07",
    title: "한여름밤",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C07_한여름밤.png",
    theme: "cloud",
  },
  {
    id: "C08",
    title: "신기루",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C08_신기루.png",
    theme: "cloud",
  },
  {
    id: "C09",
    title: "안개",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C09_안개.png",
    theme: "cloud",
  },
  {
    id: "C10",
    title: "오늘",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C10_오늘,맑음.png",
    theme: "cloud",
  },
  {
    id: "C11",
    title: "무지개",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C11_무지개.png",
    theme: "cloud",
  },
  {
    id: "C12",
    title: "비그친후",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C12_비그친후.png",
    theme: "cloud",
  },
  {
    id: "C13",
    title: "옛날옛적",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/cloud/C13_옛날옛적.png",
    theme: "cloud",
  },
  {
    id: "U01",
    title: "오색찬란_1",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U01_오색찬란_1.png",
    theme: "universe",
  },
  {
    id: "U02",
    title: "오색찬란_2",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U02_오색찬란_2.png",
    theme: "universe",
  },
  {
    id: "U03",
    title: "오로라",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U03_오로라.png",
    theme: "universe",
  },
  {
    id: "U04",
    title: "샛별",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U04_샛별.png",
    theme: "universe",
  },
  {
    id: "U05",
    title: "꿈동산",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U05_꿈동산.png",
    theme: "universe",
  },
  {
    id: "U06",
    title: "구름너머",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U06_구름너머.png",
    theme: "universe",
  },
  {
    id: "U07",
    title: "별자리",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U07_별자리.png",
    theme: "universe",
  },
  {
    id: "U08",
    title: "은혜",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U08_은혜.png",
    theme: "universe",
  },
  {
    id: "U09",
    title: "혜성",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U09_혜성.png",
    theme: "universe",
  },
  {
    id: "U10",
    title: "성운_1",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U10_성운_1.png",
    theme: "universe",
  },
  {
    id: "U11",
    title: "성운_2",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U11_성운_2.png",
    theme: "universe",
  },
  {
    id: "U12",
    title: "전갈자리",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U12_전갈자리.png",
    theme: "universe",
  },
  {
    id: "U13",
    title: "깊은어둠",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U13_깊은어둠.png",
    theme: "universe",
  },
  {
    id: "U14",
    title: "불꽃축제",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/universe/U14_불꽃축제.png",
    theme: "universe",
  },
  {
    id: "G01",
    title: "열정",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G01_열정.png",
    theme: "gradient",
  },
  {
    id: "G02",
    title: "추억",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G02_추억.png",
    theme: "gradient",
  },
  {
    id: "G03",
    title: "회상",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G03_회상.png",
    theme: "gradient",
  },
  {
    id: "G04",
    title: "고독",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G04_고독.png",
    theme: "gradient",
  },
  {
    id: "G05",
    title: "새싹",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G05_새싹.png",
    theme: "gradient",
  },
  {
    id: "G06",
    title: "희망",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G06_희망.png",
    theme: "gradient",
  },
  {
    id: "G07",
    title: "일몰",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G07_일몰.png",
    theme: "gradient",
  },
  {
    id: "G08",
    title: "애플망고",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G08_애플망고.png",
    theme: "gradient",
  },
  {
    id: "G09",
    title: "꿈결_1",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G09_꿈결_1.png",
    theme: "gradient",
  },
  {
    id: "G10",
    title: "꿈결_2",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G10_꿈결_2.png",
    theme: "gradient",
  },
  {
    id: "G11",
    title: "여명",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G11_여명.png",
    theme: "gradient",
  },
  {
    id: "G12",
    title: "포도",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G12_포도.png",
    theme: "gradient",
  },
  {
    id: "G13",
    title: "가로등",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/gradient/G13_가로등.png",
    theme: "gradient",
  },
  {
    id: "E01",
    title: "여름피서",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/etc/E01_여름피서.png",
    theme: "etc",
  },
  {
    id: "E02",
    title: "바다윤슬",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/etc/E02_바다윤슬.png",
    theme: "etc",
  },
  {
    id: "E04",
    title: "모자이크_초록",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/etc/E04_모자이크_초록.png",
    theme: "etc",
  },
  {
    id: "E05",
    title: "보석같은",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/etc/E05_보석같은.png",
    theme: "etc",
  },
  {
    id: "E06",
    title: "고백",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/etc/E06_고백.png",
    theme: "etc",
  },
  {
    id: "E07",
    title: "설원에서",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/etc/E07_설원에서.png",
    theme: "etc",
  },
  {
    id: "E08",
    title: "눈내리던밤",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/etc/E08_눈내리던밤.png",
    theme: "etc",
  },
  {
    id: "E09",
    title: "야경",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/etc/E09_야경.png",
    theme: "etc",
  },
  {
    id: "E10",
    title: "암막커튼",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/etc/E10_암막커튼.png",
    theme: "etc",
  },
  {
    id: "E11",
    title: "불길",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/etc/E11_불길.png",
    theme: "etc",
  },
  {
    id: "E12",
    title: "망각",
    url: "https://diggingtoon.s3.ap-northeast-2.amazonaws.com/letter-paper/etc/E12_망각.png",
    theme: "etc",
  },
];
