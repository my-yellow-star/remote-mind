import { classNames } from "@/lib/function";
import Image from "next/image";

interface LetterEditorProp {
  paperUrl: string;
  onChangeMessage: (message: string) => void;
  fontClass?: string;
  textColor?: string;
  message: string;
}

export function LetterEditor({
  paperUrl,
  onChangeMessage,
  textColor,
  fontClass,
  message,
}: LetterEditorProp) {
  return (
    <div className="relative">
      <Image
        src={paperUrl}
        alt=""
        width={578}
        height={862}
        quality={100}
        className="w-full h-auto"
      />
      <div className="w-full h-full absolute top-0 left-0 px-4 py-6 md:px-6 md:py-10">
        <div className="w-full h-full p-4 bg-[#ffffff40] rounded-xl">
          <textarea
            value={message}
            onChange={(e) => onChangeMessage(e.target.value)}
            style={{
              color: textColor ?? "#111111",
            }}
            className={classNames(
              "w-full h-full resize-none text-lg md:text-xl focus:outline-none bg-transparent",
              fontClass
            )}
          />
        </div>
      </div>
    </div>
  );
}
