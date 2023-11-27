export default interface BannerInterface {
  _id: string;
  category: string;
  image: {
    url: string;
    alt: string;
  };
  title: string;
  text: string;
  createAt: Date;
  author: string;
}
