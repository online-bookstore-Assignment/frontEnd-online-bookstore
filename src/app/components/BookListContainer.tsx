import getBookList from "@/fetch/sever/getBookList";
import Pagination from "./pagination/Pagination";

const BookListContainer = async () => {
  const bookList = await getBookList();

  return (
    <>
      {bookList && <Pagination dataArray={bookList} />}
      {!bookList && <div>데이터를 불러올 수 없습니다.</div>}
    </>
  );
};

export default BookListContainer;
