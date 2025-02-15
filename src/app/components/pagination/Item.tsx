"use client";

import TrashCan from "@/assets/svg/TrashCan";
import deleteBookDetail from "@/fetch/deleteBookDetail";
import { BookInterface } from "@/type/boos";
import { useRouter, useSearchParams } from "next/navigation";

interface ItemProps {
  book: BookInterface;
}

const Item = ({ book }: ItemProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const openProductModal = () => {
    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("modal", `${book.id}`);

    router.push(`/?${currentParams}`);
  };

  const DeleteBookHandler = async () => {
    const result = confirm("계속하시겠습니까?");
    if (result) {
      try {
        const res = await deleteBookDetail(String(book.id));

        router.refresh();
        alert(res?.message);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-3/4 px-6 py-2 border overflow-hidden rounded-xl ">
      <div onClick={() => openProductModal()} className="flex justify-between">
        <div>
          <h2>{book.title}</h2>
          <p className="text-sm">{book.author}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            DeleteBookHandler();
          }}
          className="z-10"
        >
          <TrashCan />
        </button>
      </div>
    </div>
  );
};

export default Item;
