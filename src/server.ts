import express from "express";
import morgan from "./logger/morgan";
import connectToDatabase from "./mongoDB/mongoConnection";
import cors from "cors";
import * as dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./resource/banners/graphQL/schema";
import { resolvers } from "./resource/banners/graphQL/resolvers";

dotenv.config();

export const app = express();

app.use(morgan);
app.use(cors());
app.use(express.json());


const server = new ApolloServer({ typeDefs, resolvers });
const connect = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, async () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    ),
      connectToDatabase();
  });
};
connect();


