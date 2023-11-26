export interface recProductsInterface {
  productId: string;
  _id?: string;
  name: string;
  salePrice: number;
  quantity: number;
  description: string;
  category: string;
  discountPercentage: number;
  image: {
    large: string;
    medium: string;
    small: string;
    alt: string;
  };
  createdAt: Date;
  author: string;
}
