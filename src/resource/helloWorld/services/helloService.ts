import { handlerGetHelloDal } from "../dal";

export const handlerGetHelloService = async () => {
  try {
    const result = await handlerGetHelloDal();
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
