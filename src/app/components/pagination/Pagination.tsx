"use client";

import ArrowLeft from "@/assets/svg/ArrowLeft";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import ArrowRight from "@/assets/svg/ArrowRight";
import { useBookSearchValueContext } from "@/context/BookSearchValueContext";
import { BookInterface } from "@/type/book";
import { useEffect, useState } from "react";
import PageButton from "./Button";
import PostItem from "./Item";

interface PostContainerProps {
  dataArray: BookInterface[]; // 원본 배열
  maxPost?: number; // 한번에 보여줄 게시글 개수
  maxButton?: number; // 한번에 보여줄 버튼 개수
}

const Pagination = ({
  dataArray,
  maxPost = 10,
  maxButton = 5,
}: PostContainerProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageQuery = searchParams.get("p") || "";
  const { searchValue } = useBookSearchValueContext();
  const [pagination, setPagination] = useState({
    currentPage: 1,
    currentButton: 1,
  });

  const filterArray = dataArray.filter(
    (book) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      book.author.toLowerCase().includes(searchValue.toLowerCase())
  );

  // 검색시 p 파라미터 1로 초기화
  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams);
    setPagination({
      currentPage: 1,
      currentButton: 1,
    });
    currentParams.set("p", `1`);
    router.push(`/?${currentParams.toString()}`, {
      scroll: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    if (pageQuery) {
      setPagination({
        currentPage: Number(pageQuery),
        currentButton:
          Math.ceil(Number(pageQuery) / maxButton) * maxButton -
          (maxButton - 1),
      });
    }
    if (Number(pageQuery) === 0) {
      setPagination({
        currentPage: 1,
        currentButton: 1,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageQuery]);

  // 페이지 파라미터
  const routerHandler = (num: number) => {
    const currentParams = new URLSearchParams(searchParams);
    // 페이지 쿼리 파라미터 추가
    currentParams.set("p", `${num}`);

    if (pathname === "/") {
      router.push(`/?${currentParams.toString()}`, {
        scroll: false,
      });
    }
  };

  // 최대 버튼 개수 생성
  const tatalPageButton = Math.ceil(filterArray.length / maxPost);
  const arr = [...new Array(tatalPageButton)].map((_, i) => i + 1);

  // 보여지는 게시글
  const currentPosts = filterArray.slice(
    (pagination.currentPage - 1) * maxPost,
    maxPost + (pagination.currentPage - 1) * maxPost
  );
  // 보여지는 버튼
  const button = [...arr].slice(
    pagination.currentButton - 1,
    maxButton + (pagination.currentButton - 1)
  );

  // 페이지 핸들러
  const handelPage = (page: number) => {
    setPagination((pre) => ({ ...pre, currentPage: page }));
    routerHandler(page);
  };

  // 버튼 핸들러
  const handelButton = (direction: string) => {
    if (direction === "next") {
      const nextButton = pagination.currentButton + maxButton;

      if (nextButton <= tatalPageButton) {
        setPagination({
          currentPage: nextButton,
          currentButton: nextButton,
        });
        routerHandler(nextButton);
      }
    }

    if (direction === "pre") {
      const prevButton = pagination.currentButton - maxButton;

      if (prevButton > 0) {
        setPagination({
          currentPage: prevButton,
          currentButton: prevButton,
        });
        routerHandler(prevButton);
      }
    }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2 items-center">
        {currentPosts.map((book) => (
          <PostItem book={book} key={book.id} />
        ))}
      </div>
      <div className="pt-10 flex gap-3 sm:gap-6 items-center justify-center text-base">
        <PageButton
          abled={pagination.currentButton === 1}
          handelButton={handelButton}
          arrow="pre"
        >
          <ArrowLeft style={{ strokeWidth: 1 }} />
        </PageButton>
        {button.map((button) => (
          <button
            className={`${
              button === pagination.currentPage
                ? "bg-[rgb(53,54,56)] rounded-full text-white"
                : ""
            } w-8 h-8`}
            onClick={() => handelPage(button)}
            disabled={button === pagination.currentPage}
            key={button}
          >
            <div className="mb-[3px]">{button}</div>
          </button>
        ))}
        <PageButton
          abled={pagination.currentButton + maxButton > tatalPageButton}
          handelButton={handelButton}
          arrow="next"
        >
          <ArrowRight style={{ strokeWidth: 1 }} />
        </PageButton>
      </div>
    </>
  );
};

export default Pagination;
