"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface BookDetailModalProps {
  children: React.ReactNode;
}

const BookDetailModal = ({ children }: BookDetailModalProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const modalType = searchParams.get("modal");

  const closeModal = () => {
    router.back(); // 모달 닫기
  };

  if (!modalType) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-content relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute bottom-5 right-5 bg-[rgb(53,54,56)] rounded-full text-white mt-2 py-1  w-1/3"
          onClick={closeModal}
        >
          나가기
        </button>
        {children}
      </div>
    </div>
  );
};

export default BookDetailModal;
