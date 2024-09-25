export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string[];
};

export type CategoryType = {
  id: string;
  name: string;
  products: string[];
};
