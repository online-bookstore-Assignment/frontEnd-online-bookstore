import getBookList from "@/fetch/getBookList";
import Pagination from "./pagination/Pagination";

const BookListContainer = async () => {
  const bookList = await getBookList();

  console.log(bookList);
  return <Pagination dataArray={bookList} />;
};

export default BookListContainer;
