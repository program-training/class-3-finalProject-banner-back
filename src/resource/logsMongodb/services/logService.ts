import { getAllHoursDal } from "../dal/logDal";

export const getAllHoursService = async (dateIid: string) => {
  try {
    const result = await getAllHoursDal(dateIid);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
