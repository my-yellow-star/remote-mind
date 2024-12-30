import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Suspense } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "모바일 편지 - 리모트마인드",
  description: "온라인으로 마음이 담긴 편지를 작성하고 링크로 공유하세요.",
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

const GA_TRACKING_ID = "G-J94Z3BH6H1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="google" content="notranslate" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="ko" />
        <meta name="apple-mobile-web-app-title" content="리모트마인드" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
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
