import { gql } from 'apollo-server';

export const typeDefs = gql`
type RecProduct {
    productId: String!
    _id: ID!
    name: String!
    salePrice: Float!
    quantity: Float!
    description: String
    category: String!
    discountPercentage: Float!
    image: ImageType!
    createdAt: String
    author: String
}

type ImageType {
    large: String!
    medium: String!
    small: String!
    alt: String!
}

input NewRecProductInput {
    productId: String!
    _id: ID!
    name: String!
    salePrice: Float!
    quantity: Float!
    description: String
    category: String!
    discountPercentage: Float!
    image: ImageTypeInput!
    createdAt: String
    author: String
}

input ImageTypeInput {
    large: String!
    medium: String!
    small: String!
    alt: String!
}

input ImageTypeInputBanner {
        url: String
        alt: String
    }
    
    type Banners {
        _id: String
        url: String
        category: String
        image: ImageTypeBanners
        title: String
        text: String
        createAt: String
        author: String
    }

    type ImageTypeBanners {
        url: String
        alt: String
    }

    type Categories {
        _id: String
        name: String
        img: String
    }

    input CreateBannerInput {
        _id: String
        url: String
        category: String
        image: ImageTypeInputBanner
        title: String
        text: String
        createAt: String
        author: String
    }

    input EditBannerInput {
        _id: String
        url: String
        category: String
        image: ImageTypeInputBanner
        title: String
        text: String
        createAt: String
        author: String
    }

type Query {
    recProducts: [RecProduct]
    recProductById(id: ID): RecProduct
    recProductsByProductId(productID: String): RecProduct
    categoryName(category: String, quantity: String): [RecProduct]

    getAllBanners: [Banners]
    getBannerById(bannerId: String!): Banners
    getBannerByTitle(bannerTitle: String!): Banners
    getAllCategories: [Categories]
    getBannersByCategoryName(categoryName: String!): [Banners]
}

type Mutation {
    createRecProduct(input: NewRecProductInput): RecProduct!
    deleteRecProduct(id: ID): RecProduct!

    createNewBanner(newBanner: CreateBannerInput!): Banners
    deleteBannerByID(bannerId: String): Banners
    editExistBanner(bannerId: String!, editBanner: EditBannerInput!): Banners 
}

schema {
    query: Query
    mutation: Mutation
}

`;
