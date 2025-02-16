import { BookInterface, Message } from "@/type/book";
import { Put } from ".";
import Paths from "./path";

const editBookDetail = async (
  id: string,
  data: BookInterface
): Promise<Message> => {
  if (!id) {
    return { message: "유효하지 않은 책 ID 입니다." };
  }
  try {
    const bookDetailResponse = await Put<Message, BookInterface>(
      `${Paths.default}/${id}`,
      data
    );

    return bookDetailResponse.data;
  } catch (error) {
    console.error("요청 중 오류가 발생했습니다:", error);

    return { message: "요청 중 오류가 발생했습니다." };
  }
};

export default editBookDetail;
