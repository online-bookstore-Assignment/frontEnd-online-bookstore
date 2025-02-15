"use client";

import TrashCan from "@/assets/svg/TrashCan";
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

  return (
    <div className="w-3/4 px-6 py-2 border overflow-hidden rounded-xl ">
      <div onClick={() => openProductModal()} className="flex justify-between">
        <div>
          <h2>{book.title}</h2>
          <p className="text-sm">{book.author}</p>
        </div>
        <button className="">
          <TrashCan />
        </button>
      </div>
    </div>
  );
};

export default Item;
