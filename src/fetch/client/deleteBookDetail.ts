import { Message } from "@/type/book";
import { Delete } from ".";
import Paths from "./path";

const deleteBookDetail = async (id: string): Promise<Message | null> => {
  if (!id) {
    return null;
  }
  try {
    const bookDetailResponse = await Delete<Message, unknown>(
      `${Paths.default}/${id}`
    );
    return bookDetailResponse.data;
  } catch (error) {
    console.error("요청 중 오류가 발생했습니다:", error);
    return { message: "요청 중 오류가 발생했습니다." };
  }
};

export default deleteBookDetail;
