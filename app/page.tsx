"use client";

import {
  letterPaperList,
  letterPaperThemeList,
  LetterPaperThemeType,
} from "@/data/letter-paper";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  const [themeType, setThemeType] = useState<LetterPaperThemeType>("basic");
  const router = useRouter();

  const themeButtonClassName = (type: LetterPaperThemeType) => {
    const common = " px-2 py-1 rounded-lg cursor-pointer";
    return type === themeType
      ? "bg-[#111111] text-white" + common
      : "bg-[#e1e1e1]" + common;
  };

  const letterPaperData = letterPaperList.filter((e) =>
    themeType ? e.theme === themeType : true
  );

  return (
    <div className="h-full">
      <Header />
      <main className="py-6 md:py-10">
        <h1 className="pl-4 text-xl md:text-2xl font-bold text-center">
          예쁜 편지지로
          <br />
          진심을 담아보세요
        </h1>
        <div className="mt-6 md:mt-10 px-4">
          <h2 className="md:text-lg font-semibold">편지지 배경 선택</h2>
          <ul className="py-2 flex gap-2 flex-wrap">
            {letterPaperThemeList.map((theme) => (
              <div
                onClick={() => setThemeType(theme.id)}
                key={theme.id}
                className={themeButtonClassName(theme.id)}
              >
                {theme.title}
              </div>
            ))}
          </ul>
          <section className="grid mt-2 grid-cols-2 md:grid-cols-5 gap-x-2 md:gap-x-4 gap-y-4 md:gap-y-8">
            {letterPaperData.map((paper) => (
              <div key={paper.id} className="cursor-pointer">
                <figure>
                  <div className="relative">
                    <Image
                      src={paper.url}
                      alt={`${paper.title} - 편지지 사진`}
                      height={500}
                      width={300}
                      className="w-full h-auto aspect-[67 / 100]"
                    />
                    <div
                      onClick={() => router.push(`/create?paper=${paper.id}`)}
                      className="grid text-white place-items-center ease-in-out transition-opacity w-full h-full absolute top-0 left-0 bg-black opacity-0 md:hover:opacity-50"
                    >
                      <p>편지 작성하기</p>
                    </div>
                  </div>
                  <figcaption about={paper.title}>
                    <h3 className="text-center mt-1 opacity-50">
                      {paper.title.replace("_", " ")}
                    </h3>
                  </figcaption>
                </figure>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
