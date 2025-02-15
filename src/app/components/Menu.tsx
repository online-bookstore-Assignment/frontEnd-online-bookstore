"use client";

const Menu = () => {
  return (
    <nav className="mb-5 w-full ">
      <ul className="flex flex-row justify-between">
        <li>
          <button className="px-2 py-1 border rounded-xl">책 추가</button>
        </li>
        <li>
          <input
            className="px-2 py-1 border rounded-xl"
            placeholder="제목 혹은 저자를 입력해주세요"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
