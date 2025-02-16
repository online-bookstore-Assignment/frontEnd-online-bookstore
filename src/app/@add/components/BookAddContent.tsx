"use client";

import Modal from "@/components/Modal";
import { useToast } from "@/context/ToastContext";
import addBook from "@/fetch/client/addBook";
import { BookInfoType } from "@/type/book";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BookAddContent = () => {
  const router = useRouter();
  const { addToast } = useToast();
  const [bookInfo, setBookInfo] = useState<BookInfoType>({
    title: "",
    author: "",
    price: 0,
    ea: 0,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "price" || name === "ea") {
      setBookInfo((prev) => ({
        ...prev,
        [name]: Number(value.replace(/[^0-9]/g, "")),
      }));
    } else {
      setBookInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const editHandler = async (e: React.FormEvent) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    const response = await addBook(bookInfo);

    addToast(response?.message, "success");
    router.refresh();
  };

  const modalHandler = {
    editHandler,
    book: bookInfo,
    onChange,
  };
  return <Modal modalName="addModal" modalHandler={modalHandler} />;
};

export default BookAddContent;
