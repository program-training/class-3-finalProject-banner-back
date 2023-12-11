import { pool } from "../../../postgresql/connectToDBPg";

export const getAllHoursDal = async (dateId: String) => {
  try {
    const arrayOfHours = Array(24).fill(0);
    const foundDate = await pool.query(
      `SELECT * FROM logs WHERE shortDate = $1`,
      [dateId]
    );

    if (foundDate.rows.length > 0) {
      for (const element of foundDate.rows) {
        const dateString = element.date;
        const dateObject = new Date(parseInt(dateString));
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
