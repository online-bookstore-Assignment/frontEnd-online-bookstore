"use client";

import Modal from "@/components/Modal";
import { useToast } from "@/context/ToastContext";
import editBookDetail from "@/fetch/client/editBookDetail";
import { BookInterface } from "@/type/book";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BookDetailContentProps {
  bookInfo: BookInterface;
  hasError?: boolean;
}

const BookDetailContent = ({ bookInfo, hasError }: BookDetailContentProps) => {
  const router = useRouter();
  const { addToast } = useToast();
  const [bookInfoValue, setBookInfoValue] = useState<BookInterface>(bookInfo);

  useEffect(() => {
    if (hasError) {
      addToast("책 정보를 불러오는 데 실패했습니다.", "error");
    }
  }, [hasError, addToast]);

  useEffect(() => {
    setBookInfoValue(bookInfo);
  }, [bookInfo]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "price" || name === "ea") {
      console.log(name);
      setBookInfoValue((prev) => ({
        ...prev,
        [name]: Number(value.replace(/[^0-9]/g, "")),
      }));
    } else {
      console.log(name);
      setBookInfoValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const editHandler = async (e: React.FormEvent) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    try {
      const response = await editBookDetail(String(bookInfo.id), bookInfoValue);

      router.refresh();
      addToast(response?.message, "success");
    } catch (error) {
      console.error(error);
    }
  };

  const modalHandler = {
    editHandler,
    book: bookInfoValue,
    onChange,
  };
  return <Modal modalName="modal" modalHandler={modalHandler} />;
};

export default BookDetailContent;
