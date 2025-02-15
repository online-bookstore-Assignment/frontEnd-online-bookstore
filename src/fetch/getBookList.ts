import { BookInterface } from "@/type/boos";
import { Get } from ".";
import Paths from "./path";

const getBookList = async (): Promise<BookInterface[]> => {
  const characterResponse = await Get<BookInterface[]>(Paths.default);

  return characterResponse.data;
};

export default getBookList;
