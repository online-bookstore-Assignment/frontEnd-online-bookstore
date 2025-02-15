"use client";

import { createContext, useContext, useMemo, useState } from "react";

interface MainCharacterContextType {
  searchValue: string;
  setSearchValue: (newValue: string) => void;
}

const BookSearchValueContext = createContext<null | MainCharacterContextType>(
  null
);

const BookSearchValueProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  // value 객체를 useMemo로 메모이제이션
  const value = useMemo(() => ({ searchValue, setSearchValue }), [searchValue]);

  return (
    <BookSearchValueContext.Provider value={value}>
      {children}
    </BookSearchValueContext.Provider>
  );
};

export const useBookSearchValueContext = () => {
  const context = useContext(BookSearchValueContext);
  if (!context) {
    throw new Error(
      "useMainCharacterContext must be used within a BookSearchValueProvider"
    );
  }
  return context;
};

export default BookSearchValueProvider;
