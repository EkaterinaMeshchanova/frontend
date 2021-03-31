export type BookType = {
  author: string;
  name:  string;
  photo: string;
  price: string;
};

export type ImageType = {
  url: string;
};

export type BookResponseType = {
  author: string;
  name:  string;
  image: ImageType[] | [];
  description: string;
  price: string;
  annotate: string;
};

export type Chategory = {
  selected: boolean;
  value: string;
};

export type BookInitialState = {
  books: BookType[] | [];
  cathegories: string[] | [];
  selectedCathegory: string;
};
