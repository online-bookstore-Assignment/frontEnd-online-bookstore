"use client";

import { BookInterface } from "@/type/boos";
import { useEffect, useState } from "react";

interface EditBookInfoProps {
  bookInfo: BookInterface;
}

const EditBookInfo = ({ bookInfo }: EditBookInfoProps) => {
  const [bookInfoValue, setBookInfoValue] = useState<BookInterface>(bookInfo);

  useEffect(() => {
    setBookInfoValue(bookInfo);
  }, [bookInfo]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setBookInfoValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editHandler = () => {
    console.log("수정 어쩌구저쭈구");
  };

  return (
    <form>
      <button onClick={editHandler}>수정</button>
      <h2>
        <input name="title" value={bookInfoValue.title} onChange={onChange} />
      </h2>
      <p>
        저자 :{" "}
        <input name="author" value={bookInfoValue.author} onChange={onChange} />
      </p>
      <p>
        가격 :{" "}
        <input name="price" value={bookInfoValue.price} onChange={onChange} />
      </p>
      <p>
        수량 : <input name="ea" value={bookInfoValue.ea} onChange={onChange} />
      </p>
    </form>
  );
};

export default EditBookInfo;
