import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const NotoSansKR = Noto_Sans_KR({
  subsets: ["latin"], // 사용할 언어 서브셋
  weight: ["300", "400", "500", "600", "700"], // 사용할 폰트 두께
  style: ["normal"], // 사용할 스타일
  display: "swap", // 폰트 로딩 전략
});

export const metadata: Metadata = {
  title: "온라인 서점",
  description: "서점에 가기 힘든 당신을 위한 온라인 서점입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${NotoSansKR.className} antialiased`}>{children}</body>
    </html>
  );
}
