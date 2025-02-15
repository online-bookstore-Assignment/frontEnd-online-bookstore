import { Suspense } from "react";
import BookListContainer from "./components/BookListContainer";
import Menu from "./components/Menu";

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <Menu />
      <Suspense fallback={<div>데이터 불러오는 중...</div>}>
        <BookListContainer />
      </Suspense>
    </div>
  );
};

export default Home;
