import BookDetailModal from "./components/BookDetailModal";
import DetailFetchContainer from "./components/DetailFetchContainer";

interface DetailModalPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const DetailModalPage = async ({ searchParams }: DetailModalPageProps) => {
  const { modal } = await searchParams;

  return (
    <BookDetailModal>
      <DetailFetchContainer modal={modal} />
    </BookDetailModal>
  );
};

export default DetailModalPage;
