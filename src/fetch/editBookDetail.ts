import { BookInterface, Message } from "@/type/book";
import { Put } from ".";
import Paths from "./path";

const editBookDetail = async (
  id: string,
  data: BookInterface
): Promise<Message | null> => {
  if (!id) {
    return null;
  }

  const bookDetailResponse = await Put<Message, BookInterface>(
    `${Paths.default}${id}`,
    data
  );

  return bookDetailResponse.data;
};

export default editBookDetail;
