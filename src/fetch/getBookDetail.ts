import { BookInterface } from "@/type/boos";
import { Get } from ".";
import Paths from "./path";

const getBookDetail = async (id: string): Promise<BookInterface | null> => {
  if (!id) {
    return null;
  }
  const bookDetailResponse = await Get<BookInterface>(`${Paths.default}${id}`);

  return bookDetailResponse.data;
};

export default getBookDetail;
