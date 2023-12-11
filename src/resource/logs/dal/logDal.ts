import logModel from "../../../mongoDB/Schemas/LogsSchema";

export const getAllHoursDal = async (dateIid: string) => {
  try {
    const arrayOfHours = Array(24).fill(0);
    const foundDate = await logModel.find({ shortDate: dateIid });
    if (foundDate.length > 0) {
      for (const element of foundDate) {
        const dateString = element.date;
        const dateObject = new Date(parseInt(dateString));
        const hour = dateObject.getHours();
        arrayOfHours[hour] += 1;
      }
    }
    return arrayOfHours;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
