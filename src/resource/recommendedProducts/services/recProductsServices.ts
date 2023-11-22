import { CategoryProps } from "../interfaces/recProductsInterfaces";
import { getRecProductsByCategoryNameDal } from "../dal";
import { getAllProductsDal } from "../dal";

export const getRecProductsByCategoryNameService = async (
  categoryName: CategoryProps,
  quantity: CategoryProps
) => {
  try {
    const result = await getRecProductsByCategoryNameDal(
      categoryName,
      quantity
    );
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
