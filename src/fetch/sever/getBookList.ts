import { BookInterface } from "@/type/book";
import { Get } from ".";
import Paths from "./path";

const getBookList = async (): Promise<BookInterface[] | any> => {
  try {
    const bookListResponse = await Get<BookInterface[]>(Paths.default);

    return bookListResponse.data;
  } catch (error) {
    console.error("요청 중 오류가 발생했습니다:", error);

    return error;
  }
};

export default getBookList;
