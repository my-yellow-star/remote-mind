import localFont from "next/font/local";

const kccHyerim = localFont({
  src: "./KCCHyerim.woff2",
  display: "swap",
});

const hakgyoansim = localFont({
  src: "./HakgyoansimBadasseugi.otf",
  display: "swap",
});

const cafe24PrettyNight = localFont({
  src: "./Cafe24Oneprettynight.woff2",
  display: "swap",
});

const garamYeonGGot = localFont({
  src: "./나눔손글씨 가람연꽃.woff2",
  display: "swap",
});

const galmatgeul = localFont({
  src: "./나눔손글씨 갈맷글.woff2",
  display: "swap",
});

const yeongRong = localFont({
  src: "./온글잎-영롱.woff",
  display: "swap",
});

export interface Font {
  id: string;
  title: string;
  className: string;
  owner: string;
}

export const fonts: Font[] = [
  {
    id: "HB01",
    title: "학교안심 받아쓰기",
    className: hakgyoansim.className,
    owner: "한국교육학술정보원",
  },
  {
    id: "CPN01",
    title: "카페24 고운밤",
    className: cafe24PrettyNight.className,
    owner: "카페24",
  },
  {
    id: "KCCH01",
    title: "KCC혜림체",
    className: kccHyerim.className,
    owner: "한국저작권위원회",
  },
  {
    id: "NGY01",
    title: "나눔손글씨 가람연꽃",
    className: garamYeonGGot.className,
    owner: "네이버 Clova",
  },
  {
    id: "NGM01",
    title: "나눔손글씨 갈맷글",
    className: galmatgeul.className,
    owner: "네이버 Clova",
  },
  {
    id: "OYR01",
    title: "온글잎 영롱",
    className: yeongRong.className,
    owner: "온글잎",
  },
];
