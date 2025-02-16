import ToastContainer from "@/components/ToastContainer";
import BookSearchValueProvider from "@/context/BookSearchValueContext";
import { ToastProvider } from "@/context/ToastContext";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const NotoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "온라인 서점",
  description: "서점에 가기 힘든 당신을 위한 온라인 서점입니다.",
};

const RootLayout = ({
  children,
  modal,
  add,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  add: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body
        className={`${NotoSansKR.className} antialiased flex justify-center items-center`}
      >
        <ToastProvider>
          <BookSearchValueProvider>
            <div id="main-content">
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
              {modal}
              {add}
              <ToastContainer />
            </div>
          </BookSearchValueProvider>
        </ToastProvider>
      </body>
    </html>
  );
};

export default RootLayout;
