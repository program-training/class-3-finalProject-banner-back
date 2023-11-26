import { getAllBannersDal } from "../dal";

export const getAllBannersService = async () => {
  try {
    const result = await getAllBannersDal();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
