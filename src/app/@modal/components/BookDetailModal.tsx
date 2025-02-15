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
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={closeModal}>닫기</button>
      </div>
    </div>
  );
};

export default BookDetailModal;
