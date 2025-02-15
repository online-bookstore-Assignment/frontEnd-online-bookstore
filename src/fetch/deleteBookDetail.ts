import { Delete } from ".";
import Paths from "./path";

interface Message {
  message: string;
}

const deleteBookDetail = async (id: string): Promise<Message | null> => {
  if (!id) {
    return null;
  }
  const bookDetailResponse = await Delete<Message>(`${Paths.default}${id}`);

  return bookDetailResponse.data;
};

export default deleteBookDetail;
