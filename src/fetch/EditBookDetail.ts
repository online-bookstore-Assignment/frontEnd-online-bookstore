import { BookInterface } from "@/type/boos";
import { Put } from ".";
import Paths from "./path";

interface Message {
  message: string;
}

const editBookDetail = async (
  id: string,
  data: BookInterface
): Promise<Message | null> => {
  if (!id) {
    return null;
  }

  const bookDetailResponse = await Put<Message>(`${Paths.default}${id}`, data);

  return bookDetailResponse.data;
};

export default editBookDetail;
