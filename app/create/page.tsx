"use client";

import { letterPaperList } from "@/data/letter-paper";
import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "../components/header";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Font, fonts } from "../fonts/fonts";
import { classNames } from "@/lib/function";
import { LetterEditor } from "../components/letter-editor";
import { API_ORIGIN } from "@/lib/constant";
import { LetterModel } from "@/data/letter";

export default function CreatePage() {
  const searchParam = useSearchParams();
  const paper = letterPaperList.find((e) => e.id == searchParam.get("paper"));
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fontFamily, setFontFamily] = useState<Font>();
  const [message, setMessage] = useState("");
  const [openEditor, setOpenEditor] = useState(false);
  const [status, setStatus] = useState<"PENDING" | "PROCESSING" | "COMPLETE">(
    "PENDING"
  );
  const [link, setLink] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  async function submit() {
    setStatus("PROCESSING");
    if (!paper) {
      alert("편지지를 선택해주세요");
      setStatus("PENDING");
      return;
    }

    const res = await fetch(`${API_ORIGIN}/api/v1/letter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to,
        from,
        envelopOption: "default",
        paperOption: paper?.id,
        fontOption: fontFamily?.id ?? "",
        fontColor: "#111111",
        message,
      }),
    });

    if (res.ok) {
      const parsed = (await res.json()) as LetterModel;
      setLink(`${window.location.origin}/letter/${parsed.path}`);
      setStatus("COMPLETE");
    } else {
      const parsed = await res.json();
      alert(`서버 오류가 발생했어요: ${parsed.error}`);
      setStatus("PENDING");
    }
  }

  async function shareLink() {
    try {
      await navigator.share({
        url: link,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(link);
      setLinkCopied(true);
    } catch (error) {
      console.error(error);
    }
  }

  if (!paper) {
    router.replace("/");
    return;
  }

  return (
    <div>
      <Header />
      <main className="grid place-items-center">
        <div className="w-full max-w-[600px]">
          {status === "COMPLETE" ? (
            <div className="grid place-items-center py-4">
              <h1 className="text-xl font-bold">작성 완료</h1>
              <p className="mt-2">편지 작성이 완료되었어요!</p>
              <p>
                아래 카드를 클릭하여 <span className="font-semibold">공유</span>
                할 수 있어요
              </p>
              <div
                onClick={shareLink}
                className="cursor-pointer w-full max-w-[300px] flex flex-col mt-4 shadow aspect-[1.3] rounded-2xl"
              >
                <Image
                  src={paper.url}
                  alt="편지지 썸네일"
                  width={300}
                  height={300}
                  className="rounded-t-2xl w-full aspect-[2] object-cover"
                />
                <hr />
                <div
                  className={classNames(
                    "px-4 flex flex-col justify-center flex-1 text-[#111111]",
                    fontFamily?.className
                  )}
                >
                  <p className="text-lg">To. {to}</p>
                  <p>From. {from}</p>
                </div>
              </div>
              <p className="mt-8">링크 직접 복사하기</p>
              <div className="mt-2 w-full max-w-[300px] gap-2 flex">
                <div className="overflow-x-auto">
                  <p className="text-[#717171] line-clamp-1">{link}</p>
                </div>
                <p
                  onClick={copyLink}
                  className="cursor-pointer shrink-0 text-[#111111]"
                >
                  {linkCopied ? "복사완료!" : "링크복사"}
                </p>
              </div>
              <button
                onClick={() => router.replace("/")}
                className="mt-10 w-full max-w-[300px] px-2 py-3 bg-[#111111] text-white rounded-lg"
              >
                메인으로
              </button>
            </div>
          ) : openEditor ? (
            <section>
              <div className="px-4 py-2 flex items-center justify-between">
                <button
                  onClick={() => setOpenEditor(false)}
                  className="text-lg text-[#313131]"
                >
                  ← 설정으로
                </button>
                <button
                  disabled={status !== "PENDING"}
                  onClick={submit}
                  className="bg-[#111111] text-white rounded px-4 py-1 disabled:bg-[#c4c4c4]"
                >
                  완료
                </button>
              </div>
              <LetterEditor
                message={message}
                fontClass={fontFamily?.className}
                paperUrl={paper.url}
                onChangeMessage={setMessage}
              />
            </section>
          ) : (
            <section className="px-4 md:px-0 pb-10">
              <div className="px-4 py-2 flex items-center justify-end">
                <button
                  onClick={() => setOpenEditor(true)}
                  className="text-lg text-[#111111]"
                >
                  편지작성 →
                </button>
              </div>
              <div className="flex justify-between bg-[#f1f1f1] rounded p-2">
                <div>
                  <h2 className="text-lg font-semibold">편지지 배경</h2>
                  <p>{paper.title}</p>
                </div>
                <Image
                  src={paper.url}
                  alt={`${paper.title} - 편지지 사진`}
                  height={500}
                  width={300}
                  className="w-[120px] rounded h-auto aspect-[67 / 100]"
                />
              </div>
              <div className="bg-[#f1f1f1] mt-4 p-2 rounded">
                <div className="grid grid-cols-2 items-center">
                  <h2 className="text-lg font-semibold">누구에게</h2>
                  <input
                    onChange={(e) => setTo(e.target.value)}
                    maxLength={20}
                    type="text"
                    className="bg-transparent focus:outline-none px-1 py-1 rounded-none border-b border-black"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 items-center">
                  <h2 className="text-lg font-semibold">누가</h2>
                  <input
                    onChange={(e) => setFrom(e.target.value)}
                    maxLength={20}
                    type="text"
                    className="bg-transparent focus:outline-none rounded-none border-b px-1 py-1 border-black"
                  />
                </div>
              </div>
              <div className="mt-4 bg-[#f1f1f1] p-2 rounded">
                <h2 className="text-lg font-semibold">폰트 선택</h2>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {fonts.map((font) => (
                    <div key={font.id}>
                      <div
                        onClick={() => setFontFamily(font)}
                        className={classNames(
                          "cursor-ponter text-xl md:text-2xl box-border md:hover:text-3xl aspect-square bg-white rounded-lg grid place-items-center",
                          fontFamily === font
                            ? " border-2 border-[#111111]"
                            : ""
                        )}
                      >
                        <p className={`${font.className}`}>그대에게</p>
                      </div>
                      <p className="text-sm text-center mt-1">{font.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
