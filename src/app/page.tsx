import { Suspense } from "react";
import BookListContainer from "./components/BookListContainer";

const Home = () => {
  return (
    <div className="">
      <Suspense fallback={<div>데이터 불러오는 중...</div>}>
        <BookListContainer />
      </Suspense>
    </div>
  );
};

export default Home;
