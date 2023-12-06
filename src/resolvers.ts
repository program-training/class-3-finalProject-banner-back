import { createRecProducts, deleteRecProductsById, getRecProductsByCategoryNameDal, readRecProducts, readRecProductsByProductId, readRecProductsByRecId } from "./resource/recommendedProducts/dal";
import { recProductsInterface } from "./resource/recommendedProducts/interfaces/recProductsInterfaces";

import {
    createBannerDal,
    deleteBannerDal,
    editBannerDal,
    getAllBannersDal,
    getAllCategoriesDal,
    getBannerByIdDal,
    getBannerByTitleDal,
    getBannersByCategoryNameDal,
  } from "../src/resource/banners/dal";
  import BannerInterface from "./resource/banners/interfaces/BannersInterface";
  import { shuffleAndSlice } from "./resource/banners/getRandomCategories";
  import { CategoryInterface } from "./resource/banners/interfaces/BannersInterface";

export const resolvers = {
    Query: {
        async recProducts() {
            try {
                const getRecProduct = await readRecProducts();
                return getRecProduct
            }catch(err) {
                console.log('error to get all recommended',err)
            } 
        },

        async recProductById(_:recProductsInterface, { id }:  { id: string }) {
            try {
                const getRecById = await readRecProductsByRecId(id);
                return getRecById;
            } catch (err) {
                console.error('Error fetching recommendation by id', err);
                throw new Error('Failed to fetch recommendation by id');
            }
        },
        

        async recProductsByProductId(_:recProductsInterface, { productID }:  { productID: string }) {
            try {
            const getRecByProductId = await readRecProductsByProductId(productID);
            return getRecByProductId
            }catch(err) {
                console.log('error to get recommend by product id',err);
                throw new Error('Failed to fetch recommendation by product id');
            }
        },

        async categoryName(_:recProductsInterface, {category, quantity}: {category: string, quantity: string} ) {
            try {
              // Add validation for category
              if (!category) {
                throw new Error('Category is required.');
              }
          
              // Add validation for quantity
              if (!quantity) {
                throw new Error('Quantity is required.');
              }
          
              const getRecByCategory = await getRecProductsByCategoryNameDal(category, quantity);
          
              if (!getRecByCategory || getRecByCategory.length === 0) {
                throw new Error(`No recommendations found for category: ${category}`);
              }
          
              return getRecByCategory;
            } catch (err) {
              console.log(`Error fetching recommendation by category name: `);
              throw new Error('Failed to fetch recommendation by category name');
            }
          },


          getAllBanners: async () => {
            try {
              const banners = await getAllBannersDal();
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
              const banner = await getBannerByIdDal(bannerId);
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
              const banners = await getBannerByTitleDal(bannerTitle);
              return banners;
            } catch (error) {
              console.error(error);
              throw error;
            }
          },
          getAllCategories: async () => {
            try {
              const banners = await getAllCategoriesDal();
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
                const result = await getBannersByCategoryNameDal(categoryName);
                return result;
              } else {
                const categories: CategoryInterface[] = await getAllCategoriesDal();
                const oneCategory = shuffleAndSlice(categories);
      
                const result = await getBannersByCategoryNameDal(
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
        createRecProduct: async (_:recProductsInterface, { input }: { input: recProductsInterface }) => {
            try {
                const newRec = await createRecProducts(input);
                return newRec;
            } catch (err) {
                console.log('Error creating recProduct:', err);
                throw new Error('Error creating recProduct'); // Make sure to throw the error
            }
        },

        deleteRecProduct: async (_:recProductsInterface, { id }: {id: string}) => {
            try {
            const deleteRec = await deleteRecProductsById(id);
            return deleteRec;
            }catch(err) {
                console.log('Error deleting recProduct:', err);
                throw new Error('Error deleting recProduct');
            }

        },


        
        createNewBanner: async (
            _: BannerInterface,
            { newBanner }: { newBanner: BannerInterface }
          ) => {
            try {
              const banners = await createBannerDal(newBanner);
              return banners;
            } catch (error) {
              console.error(error);
              throw error;
            }
          },
          deleteBannerByID: async (
            _: BannerInterface,
            { bannerId }: { bannerId: string }
          ) => {
            try {
              const banners = await deleteBannerDal(bannerId);
              return banners;
            } catch (error) {
              console.error(error);
              throw error;
            }
          },
          editExistBanner: async (
            _: BannerInterface,
            {
              bannerId,
              editBanner,
            }: { bannerId: string; editBanner: BannerInterface }
          ) => {
            try {
              const banners = await editBannerDal(bannerId, editBanner);
              return banners;
            } catch (error) {
              console.error(error);
              throw error;
            }
          },
    }
    
}
    