import { hashSync, compareSync } from "bcryptjs";

export const comparePassword = (passwordFromClient: string, passwordFromDB: string) => compareSync(passwordFromClient, passwordFromDB);
