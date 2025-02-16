import SkeletonItem from "@/components/skeleton/Item";
import { Suspense } from "react";
import BookListContainer from "./components/BookListContainer";
import Menu from "./components/Menu";

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <Menu />
      <Suspense fallback={<SkeletonItem />}>
        <BookListContainer />
      </Suspense>
    </div>
  );
};

export default Home;
