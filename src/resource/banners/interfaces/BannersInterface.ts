import { Types } from "mongoose";



export default interface BannerInterface {
  _id: Types.ObjectId;
  category: string
  image: {
      url: string;
      alt: string;
  }
  title: string
  text: string;
  createAt: Date;
  author: Types.ObjectId;
  
}