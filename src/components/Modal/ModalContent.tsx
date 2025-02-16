"use client";

import InputFilde from "@/components/InputFilde";
import { BookInfoType } from "@/type/book";

interface ModalContentProps {
  modalHandler?: {
    editHandler?: (e: React.FormEvent) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    book?: BookInfoType;
  };
  isFail: boolean;
}

const dummyBook = {
  title: "",
  author: "",
  price: 0,
  ea: 0,
};

const ModalContent = ({ modalHandler = {}, isFail }: ModalContentProps) => {
  const { editHandler, onChange, book = dummyBook } = modalHandler;

  return (
    <form className="flex gap-2 flex-col" onSubmit={editHandler}>
      <InputFilde
        title="제목"
        name="title"
        onChange={onChange}
        value={book.title}
        isFail={isFail}
      />
      <InputFilde
        title="저자"
        name="author"
        onChange={onChange}
        value={book.author}
        isFail={isFail}
      />
      <InputFilde
        title="가격"
        name="price"
        pattern="^\d+$"
        onChange={onChange}
        value={book.price}
        isFail={isFail}
      />
      <InputFilde
        title="수량"
        name="ea"
        pattern="^\d+$"
        onChange={onChange}
        value={book.ea}
        isFail={isFail}
      />
      <button
        className="bg-[rgb(53,54,56)] rounded-full text-white mt-2 py-1 w-1/3"
        type="submit"
      >
        제출
      </button>
    </form>
  );
};

export default ModalContent;
