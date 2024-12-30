import { fetchLetter } from "@/data/letter";
import { LetterProps } from "./layout";
import { LetterContainer } from "@/app/components/letter-container";

export default async function LetterPage({ params }: LetterProps) {
  const letter = await fetchLetter((await params).path);

  return (
    <div className="flex flex-col bg-black h-screen items-center">
      <div className="w-full max-w-[480px]">
        <LetterContainer letter={letter} />
      </div>
    </div>
  );
}
