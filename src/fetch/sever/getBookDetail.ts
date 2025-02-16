import { BookInterface } from "@/type/book";
import { Get } from ".";
import Paths from "./path";

const getBookDetail = async (id: string): Promise<BookInterface | null> => {
  if (!id) {
    return null;
  }
  try {
    const bookDetailResponse = await Get<BookInterface>(
      `${Paths.default}${id}`
    );

    return bookDetailResponse.data;
  } catch (error) {
    console.error("요청 중 오류가 발생했습니다:", error);

    return null;
  }
};

export default getBookDetail;
