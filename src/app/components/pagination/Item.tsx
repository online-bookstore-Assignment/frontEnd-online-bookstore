import { BookInterface } from "@/type/boos";
import Link from "next/link";

interface ItemProps {
  book: BookInterface;
}

const Item = ({ book }: ItemProps) => {
  return (
    <div className="w-fit border overflow-hidden rounded-xl ">
      <Link className="" href={`/${book.id}`}>
        {book.title}
      </Link>
    </div>
  );
};

export default Item;
