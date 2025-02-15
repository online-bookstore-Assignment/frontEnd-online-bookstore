"use client";

import { useBookSearchValueContext } from "@/context/BookSearchValueContext";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler } from "react";

const Menu = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { searchValue, setSearchValue } = useBookSearchValueContext();

  const searchValueHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.currentTarget.value);
  };

  const openProductModal = () => {
    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("addModal", `true`);

    router.push(`/?${currentParams}`);
  };

  return (
    <nav className="mb-5 w-96 ">
      <ul className="flex flex-row justify-between">
        <li>
          <div
            onClick={openProductModal}
            className="px-2 py-1 border bg-[rgb(53,54,56)] rounded-xl text-white"
          >
            책 추가
          </div>
        </li>
        <li>
          <input
            value={searchValue}
            onChange={searchValueHandler}
            className="px-2 py-1 border rounded-xl outline-none"
            placeholder="제목 혹은 저자를 입력해주세요"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
