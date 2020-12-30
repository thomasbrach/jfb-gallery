export type Painting = {
  id: string;
  name: string;
  imageUrl: string;
  paintedYear: number;
  type: string;
  description: string;
  techniques: string[];
  size: string;
  availability: boolean;
  price: number;
};

export type Credentials = {
  email: string;
  password: string;
};
