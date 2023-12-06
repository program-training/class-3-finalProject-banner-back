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


export interface RecProduct {
  productId: string;
  _id: string;
  name: string;
  salePrice: number;
  quantity: number;
  description: string;
  category: string;
  discountPercentage: number;
  image: ImageType;
  createdAt?: string; // Make it optional if createdAt can be omitted
  author?: string; // Make it optional if author can be omitted
}

interface ImageType {
  large: string;
  medium: string;
  small: string;
  alt: string;
}
