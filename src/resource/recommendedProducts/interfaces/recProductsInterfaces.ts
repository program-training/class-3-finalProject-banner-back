import { Types } from "mongoose";

export interface recProductsInterface {
  productId: Types.ObjectId;
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
