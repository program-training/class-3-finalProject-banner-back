import { CategoryNameProps } from "../interfaces/recProductsInterfaces";
import { getRecProductsByCategoryNameDal } from "../dal";
import { getAllProductsDal } from "../dal";

export const getRecProductsByCategoryNameService = async (
  categoryName: CategoryNameProps
) => {
  try {
    const result = await getRecProductsByCategoryNameDal(categoryName);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllProductsService = async () => {
  try {
    const result = await getAllProductsDal();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
