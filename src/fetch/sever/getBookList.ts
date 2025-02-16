import { BookInterface } from "@/type/book";
import { Get } from ".";

const getBookList = async (): Promise<BookInterface[] | null> => {
  try {
    const bookListResponse = await Get<BookInterface[]>(
      "https://test-support.shop"
    );

    return bookListResponse.data;
  } catch (error) {
    console.error("요청 중 오류가 발생했습니다:", error);

    return null;
  }
};

export default getBookList;
