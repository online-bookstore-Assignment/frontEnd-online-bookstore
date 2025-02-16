import SkeletonModal from "@/components/skeleton/modal";
import { Suspense } from "react";
import BookAddContent from "./components/BookAddContent";

const BookAddPage = () => {
  return (
    <Suspense fallback={<SkeletonModal />}>
      <BookAddContent />
    </Suspense>
  );
};

export default BookAddPage;
