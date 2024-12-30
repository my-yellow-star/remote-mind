import { LetterModel } from "@/data/letter";
import { letterPaperList } from "@/data/letter-paper";
import { classNames } from "@/lib/function";
import Image from "next/image";
import { fonts } from "../fonts/fonts";

export function LetterContainer({ letter }: { letter: LetterModel }) {
  const paper = letterPaperList.find((e) => e.id === letter.paperOption)!;
  const font = fonts.find((e) => e.id === letter.fontOption);

  return (
    <div>
      <p className={classNames("text-white p-2", font?.className)}>
        To. {letter.to}
      </p>
      <div className="relative">
        <Image
          src={paper.url}
          quality={100}
          width={580}
          height={800}
          className="w-full h-auto aspect-[0.67]"
          alt="편지지 배경"
        />
        <div className="w-full h-full absolute top-0 left-0 px-4 py-6 md:px-6 md:py-10">
          <div className="w-full h-full p-4 bg-[#ffffff40] rounded-xl overflow-y-auto text-lg md:text-xl">
            <p
              style={{
                color: letter.fontColor ?? "#111111",
              }}
              className={classNames(
                "max-w-[480px] whitespace-pre-line",
                font?.className
              )}
            >
              {letter.message}
            </p>
          </div>
        </div>
      </div>
      <p className={classNames("text-white p-2", font?.className)}>
        From. {letter.from}
      </p>
    </div>
  );
}
