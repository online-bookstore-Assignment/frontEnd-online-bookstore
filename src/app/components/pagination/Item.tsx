import TrashCan from "@/assets/svg/TrashCan";
import { BookInterface } from "@/type/boos";
import Link from "next/link";

interface ItemProps {
  book: BookInterface;
}

const Item = ({ book }: ItemProps) => {
  return (
    <div className="w-3/4 px-6 py-2 border overflow-hidden rounded-xl ">
      <Link className="flex justify-between" href={`/${book.id}`}>
        <div>
          <h2>{book.title}</h2>
          <p className="text-sm">{book.author}</p>
        </div>
        <button className="">
          <TrashCan />
        </button>
      </Link>
    </div>
  );
};

export default Item;
