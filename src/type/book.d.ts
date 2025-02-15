export interface BookInterface {
  id: number;
  title: string;
  author: string;
  price: number;
  ea: number;
}

export type BookInfoType = {
  title: string;
  author: string;
  price: number;
  ea: number;
};

export interface Message {
  message: string;
}
