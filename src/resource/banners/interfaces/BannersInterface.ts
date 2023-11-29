export default interface BannerInterface {
  _id?: string;
  url: string;
  category: string;
  image: {
    url: string;
    alt: string;
  };
  title: string;
  text: string;
  createAt?: Date;
  author: string;
}
export interface CategoryInterface {
  _id?: string;
  name: string;
  img: string;
}
