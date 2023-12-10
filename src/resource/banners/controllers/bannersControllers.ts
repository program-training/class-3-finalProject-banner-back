import { Request, Response } from "express";
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
import { handleError } from "../../../utils/handleErrors";
import BannerInterface from "../interfaces/BannersInterface";
import { CategoryInterface } from "../interfaces/BannersInterface";
import { string } from "joi";

export const getAllBannersController = async (req: Request, res: Response) => {
  try {
    const banners = await getAllBannersService();
    return res.send(banners);
  } catch (error) {
    handleError(res, error);
  }
};

export const getBannerByIdController = async (req: Request, res: Response) => {
  try {
    const id = req.params.bannerId;
    const banner = await getBannerByIdService(id);
    return res.send(banner);
  } catch (error) {
    handleError(res, error);
  }
};

export const getBannerByTitleController = async (
  req: Request,
  res: Response
) => {
  try {
    const title = req.params.bannerTitle;
    const banners = await getBannerByTitleService(title);
    return res.send(banners);
  } catch (error) {
    handleError(res, error);
  }
};

export const getAllCategoriesController = async (
  req: Request,
  res: Response
) => {
  try {
    const banners = await getAllCategoriesService();
    return res.send(banners);
  } catch (error) {
    handleError(res, error);
  }
};

export const createBannerController = async (req: Request, res: Response) => {
  try {
    const newBanner = req.body as BannerInterface;
    const banners = await createBannerService(newBanner);
    return res.send(banners);
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteBannerController = async (req: Request, res: Response) => {
  try {
    const id = req.params.bannerId;
    const banners = await deleteBannerService(id);
    return res.send(banners);
  } catch (error) {
    handleError(res, error);
  }
};

export const editBannerController = async (req: Request, res: Response) => {
  try {
    const id = req.params.bannerId;
    const editBanner = req.body as BannerInterface;
    const banners = await editBannerService(id, editBanner);
    return res.send(banners);
  } catch (error) {
    handleError(res, error);
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
export const getBannersByCategoryNameController = async (
  req: Request,
  res: Response
) => {
  try {
    if (req.query.categoryName) {
      const categories = req.query.categoryName as string;
      const result = await getBannersByCategoryNameService(categories);
      return res.send(result);
    } else {
      const categories: CategoryInterface[] = await getAllCategoriesService();
      const oneCategory = shuffleAndSlice(categories);

      const result = await getBannersByCategoryNameService(
        oneCategory[0].name.toString()
      );

      return res.send(result);
    }
  } catch (error) {
    handleError(res, error);
  }
};
