import getBookDetail from "@/fetch/getBookDetail";
import EditBookInfo from "./EditBookInfo";

interface DetailFetchContainerProps {
  modal: any;
}

const DetailFetchContainer = async ({ modal }: DetailFetchContainerProps) => {
  const bookInfo = await getBookDetail(modal as string);

  if (bookInfo === null) return;

  return (
    <>
      <EditBookInfo bookInfo={bookInfo} />
    </>
  );
};

export default DetailFetchContainer;
