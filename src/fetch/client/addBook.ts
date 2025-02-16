import { BookInfoType, Message } from "@/type/book";
import { Post } from ".";
import Paths from "./path";

const addBook = async (data: BookInfoType): Promise<Message> => {
  try {
    const bookListResponse = await Post<Message, BookInfoType>(
      Paths.default,
      data
    );

    return bookListResponse.data;
  } catch (error) {
    console.error("요청 중 오류가 발생했습니다:", error);

    return { message: "요청 중 오류가 발생했습니다." };
  }
};

export default addBook;
