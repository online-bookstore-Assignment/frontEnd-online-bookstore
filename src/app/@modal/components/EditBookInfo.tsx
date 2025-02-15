"use client";

import editBookDetail from "@/fetch/EditBookDetail";
import { BookInterface } from "@/type/boos";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputFilde from "./InputFilde";

interface EditBookInfoProps {
  bookInfo: BookInterface;
}

const EditBookInfo = ({ bookInfo }: EditBookInfoProps) => {
  const router = useRouter();
  const [bookInfoValue, setBookInfoValue] = useState<BookInterface>(bookInfo);

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
        value={bookInfoValue.title}
      />
      <InputFilde
        title="저자"
        name="author"
        onChange={onChange}
        value={bookInfoValue.author}
      />
      <InputFilde
        title="가격"
        name="price"
        pattern="^\d+$"
        onChange={onChange}
        value={bookInfoValue.price}
      />
      <InputFilde
        title="수량"
        name="ea"
        pattern="^\d+$"
        onChange={onChange}
        value={bookInfoValue.ea}
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

export default EditBookInfo;
