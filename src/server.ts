import express from "express";
import router from "./router/router";
import chalk from "chalk";
import morgan from "./logger/morgan";
import connectToDatabase from "./mongoDB/mongoConnection";
import cors from "cors";
require('dotenv').config();

const app = express();

app.use(morgan);
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 8181;

app.listen(PORT, async () => {
  console.log(chalk.blueBright(`Server listening on port: ${PORT}`));
  connectToDatabase()
});
