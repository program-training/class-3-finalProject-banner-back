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
import { shuffleAndSlice } from "../getRandomCategories";
import { CategoryInterface } from "../interfaces/BannersInterface";
export const resolvers = {
  Query: {
    getAllBanners: async () => {
      try {
        const banners = await getAllBannersDal();
        return banners;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    getBannerById: async (
      _: BannerInterface,
      { bannerId }: { bannerId: string }
    ) => {
      try {
        const banner = await getBannerByIdDal(bannerId);
        return banner;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    getBannerByTitle: async (
      _: BannerInterface,
      { bannerTitle }: { bannerTitle: string }
    ) => {
      try {
        const banners = await getBannerByTitleDal(bannerTitle);
        return banners;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    getAllCategories: async () => {
      try {
        const banners = await getAllCategoriesDal();
        return banners;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    getBannersByCategoryName: async (
      _: BannerInterface[],
      { categoryName }: { categoryName: string }
    ) => {
      try {
        if (categoryName) {
          const result = await getBannersByCategoryNameDal(categoryName);
          return result;
        } else {
          const categories: CategoryInterface[] = await getAllCategoriesDal();
          const oneCategory = shuffleAndSlice(categories);

          const result = await getBannersByCategoryNameDal(
            oneCategory[0].name.toString()
          );

          return result;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  Mutation: {
    createNewBanner: async (
      _: BannerInterface,
      { newBanner }: { newBanner: BannerInterface }
    ) => {
      try {
        const banners = await createBannerDal(newBanner);
        return banners;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    deleteBannerByID: async (
      _: BannerInterface,
      { bannerId }: { bannerId: string }
    ) => {
      try {
        const banners = await deleteBannerDal(bannerId);
        return banners;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    editExistBanner: async (
      _: BannerInterface,
      {
        bannerId,
        editBanner,
      }: { bannerId: string; editBanner: BannerInterface }
    ) => {
      try {
        const banners = await editBannerDal(bannerId, editBanner);
        return banners;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};











