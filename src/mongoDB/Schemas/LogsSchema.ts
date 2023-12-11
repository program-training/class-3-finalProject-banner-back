import mongoose, { Schema, Model } from "mongoose";
import { LogsInterface } from "../../resource/logsMongodb/interfaces/logInterface";

const logSchema = new Schema<LogsInterface>({
  shortDate: { type: String, required: true },
  date: { type: String, required: true },
});

const logModel: Model<LogsInterface> = mongoose.model("log", logSchema);

export default logModel;
