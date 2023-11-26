import { Types } from "mongoose";

export default interface BannerInterface {
  _id: string;
  category: string;
  image: {
    large: string;
    medium: string;
    small: string;
    alt: string;
  };
  title: string;
  text: string;
  createAt: Date;
  author: string;
}
