import chalk from "chalk";
import {
  createBannerDal,
  deleteBannerDal,
  editBannerDal,
  getAllBannersDal,
  getAllCategoriesDal,
  getBannerByIdDal,
  getBannerByTitleDal,
  getBannersByCategoryNameDal,
} from "../dal";
import BannerInterface from "../interfaces/BannersInterface";

export const getAllBannersService = async () => {
  try {
    const result = await getAllBannersDal();
    return result;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const getBannerByIdService = async (id: string) => {
  try {
    const BannerByIdFromDAL = await getBannerByIdDal(id);
    return BannerByIdFromDAL;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const getBannerByTitleService = async (title: string) => {
  try {
    const BannerByTitleFromDAL = await getBannerByTitleDal(title);
    return BannerByTitleFromDAL;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const getAllCategoriesService = async () => {
  try {
    const allCategoriesFromDAL = await getAllCategoriesDal();
    return allCategoriesFromDAL;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const createBannerService = async (newBanner: BannerInterface) => {
  try {
    const Banner = await createBannerDal(newBanner);
    return Banner;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const deleteBannerService = async (id: string) => {
  try {
    const Banner = await deleteBannerDal(id);
    return Banner;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};
export const editBannerService = async (
  id: string,
  editBanner: BannerInterface
) => {
  try {
    const Banner = await editBannerDal(id, editBanner);
    return Banner;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const getBannersByCategoryNameService = async (categoryName: string) => {
  try {
    const result = await getBannersByCategoryNameDal(categoryName);
    return result;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};
