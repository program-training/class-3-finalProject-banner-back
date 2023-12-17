import { pool } from "../../../postgresql/connectToDBPg";

export const getAllHoursDal = async (dateId: string) => {
  try {
    const arrayOfHours = Array(24).fill(0);
    const foundDate = await pool.query(
      `SELECT created_at FROM users_log WHERE DATE(created_at) = $1`,
      [dateId]
    );    

    if (foundDate.rows.length > 0) {
      for (const element of foundDate.rows) {
        const dateString = element.created_at;
        const dateObject = new Date(dateString);
        const hour = dateObject.getHours();
        arrayOfHours[hour - 1] += 1;
      }
    }
    return arrayOfHours;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
