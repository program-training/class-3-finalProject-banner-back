import axios from "axios";
import { handleDBResponseError } from "../../utils/handleErrors";
import BannerModel from "../../mongoDB/Schemas/BannerSchema";

export const getAllBannersDal = async () => {
  try {
    return BannerModel.find({});
  } catch (error) {
    return handleDBResponseError(error);
  }
};
