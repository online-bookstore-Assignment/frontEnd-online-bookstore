import { Message } from "@/type/book";
import { Delete } from ".";
import Paths from "./path";

const deleteBookDetail = async (id: string): Promise<Message | null> => {
  if (!id) {
    return null;
  }
  const bookDetailResponse = await Delete<Message, unknown>(
    `${Paths.default}${id}`
  );

  return bookDetailResponse.data;
};

export default deleteBookDetail;
