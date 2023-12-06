import {
  createBannerService,
  deleteBannerService,
  editBannerService,
  getAllBannersService,
  getAllCategoriesService,
  getBannerByIdService,
  getBannerByTitleService,
  getBannersByCategoryNameService,
} from "../services/bannersService";
import BannerInterface, {
  CategoryInterface,
} from "../interfaces/BannersInterface";
import { shuffleAndSlice } from "../getRandomCategories";

export const resolvers = {
  Query: {
    getAllBanners: async () => {
      try {
        const banners = await getAllBannersService();
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
        const banner = await getBannerByIdService(bannerId);
        console.log("hey", banner);
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
        const banners = await getBannerByTitleService(bannerTitle);
        return banners;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    getAllCategories: async () => {
      try {
        const banners = await getAllCategoriesService();
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
          const result = await getBannersByCategoryNameService(categoryName);
          return result;
        } else {
          const categories: CategoryInterface[] =
            await getAllCategoriesService();
          const oneCategory = shuffleAndSlice(categories);

          const result = await getBannersByCategoryNameService(
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
        const banners = await createBannerService(newBanner);
        return banners;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    deleteBanner: async (
      _: BannerInterface,
      { bannerId }: { bannerId: string }
    ) => {
      try {
        const banners = await deleteBannerService(bannerId);
        return banners;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    editBanner: async (
      _: BannerInterface,
      {
        bannerId,
        editBanner,
      }: { bannerId: string; editBanner: BannerInterface }
    ) => {
      try {
        const banners = await editBannerService(bannerId, editBanner);
        return banners;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};
