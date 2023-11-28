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

export const getBannersByCategoryNameController = async (
  req: Request,
  res: Response
) => {
  try {
    const categoryName = req.query.categoryName as string;

    const result = await getBannersByCategoryNameService(categoryName);
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};
