export type NewPainting = {
  name: string;
  imageUrl: string;
  paintedYear: string;
  category: string;
  techniques: string;
  size: string;
  availability: string;
  price: string;
};

export type DBPainting = {
  id: string;
  name: string;
  imageUrl: string;
  paintedYear: string;
  category: string;
  techniques: string;
  size: string;
  availability: string;
  price: string;
};

export type Credentials = {
  email: string;
  password: string;
};
