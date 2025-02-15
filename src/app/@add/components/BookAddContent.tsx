"use client";

import InputFilde from "@/components/InputFilde";
import addBook from "@/fetch/addBook";
import { BookInfoType } from "@/type/book";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BookAddContent = () => {
  const router = useRouter();
  const [bookInfo, setBookInfo] = useState<BookInfoType>({
    title: "",
    author: "",
    price: 0,
    ea: 0,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "price" || name === "ea") {
      console.log(name);
      setBookInfo((prev) => ({
        ...prev,
        [name]: Number(value.replace(/[^0-9]/g, "")),
      }));
    } else {
      console.log(name);
      setBookInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const editHandler = async (e: React.FormEvent) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    try {
      const response = await addBook(bookInfo);

      console.log(response);
      router.refresh();
      alert(response?.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="flex gap-2 flex-col" onSubmit={editHandler}>
      <InputFilde
        title="제목"
        name="title"
        onChange={onChange}
        value={bookInfo.title}
      />
      <InputFilde
        title="저자"
        name="author"
        onChange={onChange}
        value={bookInfo.author}
      />
      <InputFilde
        title="가격"
        name="price"
        pattern="^\d+$"
        onChange={onChange}
        value={bookInfo.price}
      />
      <InputFilde
        title="수량"
        name="ea"
        pattern="^\d+$"
        onChange={onChange}
        value={bookInfo.ea}
      />
      <button
        className="bg-[rgb(53,54,56)] rounded-full text-white mt-2 py-1  w-1/3"
        type="submit"
      >
        제출
      </button>
    </form>
  );
};

export default BookAddContent;
