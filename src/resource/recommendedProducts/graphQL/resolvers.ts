import {
  createRecProducts,
  deleteRecProductsById,
  getRecProductsByCategoryNameDal,
  readRecProducts,
  readRecProductsByProductId,
  readRecProductsByRecId,
} from "../dal";
import { recProductsInterface } from "../interfaces/recProductsInterfaces";

export const resolvers = {
  Query: {
    async recProducts() {
      try {
        const getRecProduct = await readRecProducts();
        return getRecProduct;
      } catch (err) {
        console.log("error to get all recommended", err);
      }
    },

    async recProductById(_: recProductsInterface, { id }: { id: string }) {
      try {
        const getRecById = await readRecProductsByRecId(id);
        return getRecById;
      } catch (err) {
        console.error("Error fetching recommendation by id", err);
        throw new Error("Failed to fetch recommendation by id");
      }
    },

    async recProductsByProductId(
      _: recProductsInterface,
      { productID }: { productID: string }
    ) {
      try {
        const getRecByProductId = await readRecProductsByProductId(productID);
        return getRecByProductId;
      } catch (err) {
        console.log("error to get recommend by product id", err);
        throw new Error("Failed to fetch recommendation by product id");
      }
    },

    async categoryName(
      _: recProductsInterface,
      { category, quantity }: { category: string; quantity: string }
    ) {
      try {
        // Add validation for category
        if (!category) {
          throw new Error("Category is required.");
        }

        // Add validation for quantity
        if (!quantity) {
          throw new Error("Quantity is required.");
        }

        const getRecByCategory = await getRecProductsByCategoryNameDal(
          category,
          quantity
        );

        if (!getRecByCategory || getRecByCategory.length === 0) {
          throw new Error(`No recommendations found for category: ${category}`);
        }

        return getRecByCategory;
      } catch (err) {
        console.log(`Error fetching recommendation by category name: `);
        throw new Error("Failed to fetch recommendation by category name");
      }
    },
  },

  Mutation: {
    createRecProduct: async (
      _: recProductsInterface,
      { input }: { input: recProductsInterface }
    ) => {
      try {
        const newRec = await createRecProducts(input);
        return newRec;
      } catch (err) {
        console.log("Error creating recProduct:", err);
        throw new Error("Error creating recProduct"); // Make sure to throw the error
      }
    },

    deleteRecProduct: async (
      _: recProductsInterface,
      { id }: { id: string }
    ) => {
      try {
        const deleteRec = await deleteRecProductsById(id);
        return deleteRec;
      } catch (err) {
        console.log("Error deleting recProduct:", err);
        throw new Error("Error deleting recProduct");
      }
    },
  },
};
