"use client";

import { BookInfoType } from "@/type/book";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ModalContent from "./ModalContent";

interface ModalProps {
  modalName: string;
  modalHandler?: {
    editHandler?: (e: React.FormEvent) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    book?: BookInfoType;
  };
  isFail?: boolean;
}

const Modal = ({
  modalHandler = {},
  modalName,
  isFail = false,
}: ModalProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const modalType = searchParams.get(modalName);

  useEffect(() => {
    // isFail가 true이고 아직 한 번도 URL 업데이트를 수행하지 않았다면
    if (isFail) {
      router.replace(pathname);
    }
  }, [isFail]);

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
        <ModalContent isFail={isFail} modalHandler={modalHandler} />
      </div>
    </div>
  );
};

export default Modal;
