import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "모바일 편지 - 리모트마인드",
  description: "온라인으로 마음이 담긴 편지를 작성하고 링크로 공유하세요.",
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.className} antialiased grid place-items-center`}
      >
        <Suspense>
          <div className="w-screen max-w-[1200px]">{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
