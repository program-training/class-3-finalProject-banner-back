import { Types } from "mongoose";

export interface recProductsInterface {
  productId: string;
  name: string;
  salePrice: number;
  quantity: number;
  description: string;
  category: string;
  discountPercentage: number;
  image: {
    url: string;
    alt: string;
  };
  createdAt: Date;
  author: string;
}

export interface CategoryProps {
  categoryName: string;
  quantity: number;
}
