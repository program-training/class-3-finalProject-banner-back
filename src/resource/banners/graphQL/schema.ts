export const typeDefs = `#graphql
    input ImageTypeInput {
        url: String
        alt: String
    }
    
    type Banners {
        _id: String
        url: String
        category: String
        image: ImageType
        title: String
        text: String
        createAt: String
        author: String
    }

    type ImageType {
        url: String
        alt: String
    }

    type Categories {
        _id: String
        name: String
        img: String
    }

    type Query {
        getAllBanners: [Banners]
        getBannerById(bannerId: ID!): Banners
        getBannerByTitle(bannerTitle: String!): Banners
        getAllCategories: [Categories]
        getBannersByCategoryName(categoryName: String!): [Banners]
    }

    input CreateBannerInput {
        _id: String
        url: String
        category: String
        image: ImageTypeInput
        title: String
        text: String
        createAt: String
        author: String
    }

    input DeleteBannerInput {
        bannerId: String!
    }

    input EditBannerInput {
        _id: String
        url: String
        category: String
        image: ImageTypeInput
        title: String
        text: String
        createAt: String
        author: String
    }

    type Mutation {
        createNewBanner(newBanner: CreateBannerInput!): Banners
        deleteBanner(bannerId: DeleteBannerInput): Banners
        editBanner(bannerId: String!, editBanner: EditBannerInput!): Banners 
    }
`;
