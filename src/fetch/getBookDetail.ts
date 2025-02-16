import { BookInterface } from "@/type/book";
import { Get } from ".";
import Paths from "./path";

const simulateDelay = (ms: number = 2000): Promise<void> => {
  return new Promise((resolve) => {
    // 개발 환경에서만 지연 적용 (선택 사항)
    setTimeout(resolve, ms);
  });
};

const getBookDetail = async (id: string): Promise<BookInterface | null> => {
  if (!id) {
    return null;
  }
  try {
    await simulateDelay();

    const bookDetailResponse = await Get<BookInterface>(
      `${Paths.default}${id}`
    );

    return bookDetailResponse.data;
  } catch (error) {
    // console.error("요청 중 오류가 발생했습니다:", error);

    return null;
  }
};

export default getBookDetail;
