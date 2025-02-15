import { BookInfoType, Message } from "@/type/book";
import { Post } from ".";
import Paths from "./path";

const addBook = async (data: BookInfoType): Promise<Message> => {
  const bookListResponse = await Post<Message, BookInfoType>(
    Paths.default,
    data
  );

  return bookListResponse.data;
};

export default addBook;
