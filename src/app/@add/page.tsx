import { Suspense } from "react";
import BookAddContent from "./components/BookAddContent";
import BookAddModal from "./components/BookAddModal";

const BookAddPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookAddModal>
        <BookAddContent />
      </BookAddModal>
    </Suspense>
  );
};

export default BookAddPage;
