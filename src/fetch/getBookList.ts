import { BookInterface } from "@/type/boos";
import { Get } from ".";
import Paths from "./path";

const getBookList = async (): Promise<BookInterface[]> => {
  const bookListResponse = await Get<BookInterface[]>(Paths.default);

  return bookListResponse.data;
};

export default getBookList;
