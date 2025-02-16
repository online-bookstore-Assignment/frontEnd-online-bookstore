// components/DetailFetchContainer.tsx
import Modal from "@/components/Modal";
import getBookDetail from "@/fetch/getBookDetail";
import BookDetailContent from "./BookDetailContent";

interface DetailFetchContainerProps {
  modal: string; // 타입 단언 제거
}

const DetailFetchContainer = async ({ modal }: DetailFetchContainerProps) => {
  const bookInfo = await getBookDetail(modal);

  if (bookInfo === null) {
    return <Modal modalName="modal" isFail={true} />;
  }

  return <BookDetailContent bookInfo={bookInfo} />;
};

export default DetailFetchContainer;
