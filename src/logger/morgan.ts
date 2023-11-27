import morgan from "morgan";
import { morganTime } from "../utils/timeService";
import chalk from "chalk";
import { Request as ExpressRequest } from "express";
import { UserInterface } from "../resource/users/interfaces/UserInterface";

interface CustomRequest extends ExpressRequest {
  user?: UserInterface;
}

const morganLogger = morgan((tokens, req: CustomRequest, res) => {
  const status = tokens.status(req, res);
  const morganString = [
    morganTime(),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    "-",
    tokens["response-time"](req, res),
    "MS",
    `User: ${req.user?.email}`,
  ].join(" ");

  if (+status! >= 400) return chalk.redBright(morganString);
  return chalk.cyanBright(morganString);
});

export default morganLogger;
