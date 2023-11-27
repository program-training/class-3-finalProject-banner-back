import mongoose, { Schema, Model } from "mongoose";
import BannersInterface from "../../resource/banners/interfaces/BannersInterface";

const bannerSchema = new Schema<BannersInterface>({
  category: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: {
    url: { type: String, required: true },
    alt: { type: String, required: true },
  },
  author: { type: String, required: true },
  createAt: { type: Date, required: true },
});

const BannerModel: Model<BannersInterface> = mongoose.model(
  "banner",
  bannerSchema
);

export default BannerModel;
