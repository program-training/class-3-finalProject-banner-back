import { Pool } from "pg";
import UserModel from "../../mongoDB/Schemas/UserSchema";
import { handleDBResponseError } from "../../utils/handleErrors";
import { UserInterface, UserLoginInterface } from "./interfaces/UserInterface";
import { pool } from "../../postgresql/connectToDBPg";

type CollectionResult = Promise<Record<string, unknown>[] | Error>;

export const createUser = async (userData: UserInterface) => {

  const { fullName, email, password, isAdmin } = userData;
  const query = 'INSERT INTO public.users(user_name, email, password, "isAdmin") VALUES($1, $2, $3, $4) RETURNING *';
  const values = [fullName, email, password, isAdmin];
  
  try {
    const client = await pool.connect()
    const result = await client.query(query, values)
    client.release()
    return (result.rows[0]);
  } catch (error) {
    console.error('Error creating user:', error);
    return handleDBResponseError(error);
  }
};

export const readUsers = async (): CollectionResult => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM public.users');
    client.release()
    return result.rows[0];
  } catch (error) {
    console.error('Error creating user:', error);
    return handleDBResponseError(error);
  }
};

export const readUserById = async (id: UserInterface['id']) => {

  const query = 'SELECT * FROM public.users WHERE id = $1';

  try {
    const result = await pool.query(query, [id]);
    
    if (result.rows.length > 0) {
      return result.rows[0];
    } else {
      throw new Error('User Not Found!');
    }
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const readUserByEmail = async (email: UserLoginInterface['email']) => {
  const query = 'SELECT * FROM public.users WHERE email = $1';
  try {
    const client = await pool.connect()
    const result = await client.query(query, [email]);
    client.release()

    if (result.rows.length > 0) {
      return result.rows[0];
    } else {
      throw new Error('User Not Found!');
    }
  } catch (error) {
    return handleDBResponseError(error);
  }
};
