import { Metadata } from "next";
import React, { ReactElement, ReactNode } from "react";

import { fetchLetter, LetterModel } from "@/data/letter";
import { letterPaperList } from "@/data/letter-paper";
import { CLIENT_ORIGIN } from "@/lib/constant";

export type LetterProps = {
  params: Promise<{ path: string }>;
};

export async function generateMetadata({
  params,
}: LetterProps): Promise<Metadata> {
  const letter = await fetchLetter((await params).path);
  const title = `To. ${letter.to}`;
  const description = `From. ${letter.from}`;
  const image = letterPaperList.find((e) => e.id === letter.paperOption)?.url;
  const images = image ? [image] : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${CLIENT_ORIGIN}`,
      images,
      type: "website",
      locale: "ko_KR",
      siteName: "리모트 마인드",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export default async function LetterLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ path: string }>;
}) {
  const letter = await fetchLetter((await params).path);

  return React.cloneElement(children as ReactElement<{ letter: LetterModel }>, {
    letter,
  });
}
