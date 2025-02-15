"use client";

import ArrowLeft from "@/assets/svg/ArrowLeft";
import ArrowRight from "@/assets/svg/ArrowRight";
import { BookInterface } from "@/type/boos";
import { useState } from "react";
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
  const [pagination, setPagination] = useState({
    currentPage: 1,
    currentButton: 1,
  });

  // 최대 버튼 개수 생성
  const tatalPageButton = Math.ceil(dataArray.length / maxPost);
  const arr = [...new Array(tatalPageButton)].map((_, i) => i + 1);

  // 보여지는 게시글
  const currentPosts = dataArray.slice(
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
      }
    }

    if (direction === "pre") {
      const prevButton = pagination.currentButton - maxButton;

      if (prevButton > 0) {
        setPagination({
          currentPage: prevButton,
          currentButton: prevButton,
        });
      }
    }
  };

  return (
    <>
      {currentPosts.map((book) => (
        <PostItem book={book} key={book.id} />
      ))}
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
