import { getAllHoursDal } from "../dal/dal";

export const getAllHoursService = async (dateId: string) => {
  try {
    const result = await getAllHoursDal(dateId);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
