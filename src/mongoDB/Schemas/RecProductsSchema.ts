import mongoose, { Schema, Model, Types } from "mongoose";
import { recProductsInterface } from "../../resource/recommendedProducts/interfaces/recProductsInterfaces";

const recProductsSchema = new Schema<recProductsInterface>({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  salePrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
  discountPercentage: { type: Number, required: true },
  image: {
    large: { type: String, required: true },
    medium: { type: String, required: true },
    small: { type: String, required: true },
    alt: { type: String, required: true },
  },
  createdAt: { type: Date, required: true },
  author: { type: String, required: true },
});

const recProductsModel: Model<recProductsInterface> = mongoose.model(
  "recProducts",
  recProductsSchema
);

export default recProductsModel;
