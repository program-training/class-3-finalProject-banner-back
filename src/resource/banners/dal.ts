import axios from "axios";
import { handleDBResponseError } from "../../utils/handleErrors";
import BannerModel from "../../mongoDB/Schemas/BannerSchema";
import BannerInterface from "./interfaces/BannersInterface";

export const getAllBannersDal = async () => {
  try {
    return BannerModel.find({});
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const getBannerByIdDal = async (id: string) => {
  try {
    return BannerModel.findOne({ _id: id });
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const getBannerByTitleDal = async (title: string) => {
  try {
    return BannerModel.findOne({ title: title });
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const createBannerDal = async (newBanner: BannerInterface) => {
  try {
    // return BannerModel.create({
    //   category: newBanner.category,
    //   image: {
    //     url: newBanner.image.url,
    //     alt: newBanner.image.alt,
    //   },
    //   title: newBanner.title,
    //   text: newBanner.text,
    //   createAt: new Date(),
    //   author: newBanner.author,
    // });
    const banner = new BannerModel({
      category: newBanner.category,
      image: {
        url: newBanner.image.url,
        alt: newBanner.image.alt,
      },
      title: newBanner.title,
      text: newBanner.text,
      createAt: new Date(),
      author: newBanner.author,
    });
    banner.isNew = true;
    await banner.save();
    return banner;
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const deleteBannerDal = async (id: string) => {
  try {
    const banner = await BannerModel.findOneAndDelete({
      _id: id,
    });
    if (!banner) throw new Error("recProduct Not Found to be deleted !");
    return banner;
  } catch (error) {
    return handleDBResponseError(error);
  }
};
export const editBannerDal = async (id: string, newBanner: BannerInterface) => {
  try {
    return BannerModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        category: newBanner.category,
        image: {
          url: newBanner.image.url,
          alt: newBanner.image.alt,
        },
        title: newBanner.title,
        text: newBanner.text,
        createAt: new Date(),
        author: newBanner.author,
      }
    );
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const getAllCategoriesDal = async () => {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL_ERP}api/shop_inventory/categories`
    );
    if (response.status < 300 && response.status >= 200) {
      const categories = response.data;
      return categories;
    }
  } catch (error) {
    return handleDBResponseError(error);
  }
};

function shuffleAndSlice<T>(array: T[]): T[] {
  const shuffledArray = array.slice();
  const quantityAsNumber = 1;

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.slice(0, quantityAsNumber);
}

export const getBannersByCategoryNameDal = async (categoryName: string) => {
  try {
    const bannerFromCategories = await BannerModel.find({
      category: categoryName,
    });
    if (!bannerFromCategories) {
      console.log("No matching document found.");
    }
    const shuffledCategories = shuffleAndSlice(bannerFromCategories);
    return shuffledCategories;
  } catch (error) {
    return handleDBResponseError(error);
  }
};
