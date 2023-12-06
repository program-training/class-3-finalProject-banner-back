export const typeDefs = `#graphql
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

type Query {
    recProducts: [RecProduct]
    recProductById(id: ID): RecProduct
    recProductsByProductId(productID: String): RecProduct
    categoryName(category: String, quantity: String): [RecProduct]
}

type Mutation {
    createRecProduct(input: NewRecProductInput): RecProduct!
    deleteRecProduct(id: ID): RecProduct!
}

schema {
    query: Query
    mutation: Mutation
}

`;
