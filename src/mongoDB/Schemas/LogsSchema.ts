import mongoose, { Schema, Model, Document } from "mongoose";
import { LogsInterface } from "../../resource/logs/interfaces/logInterface";

const logSchema = new Schema<LogsInterface>({
  shortDate: { type: String, required: true },
  date: { type: String, required: true },
});

const logModel: Model<LogsInterface> = mongoose.model("log", logSchema);

export default logModel;
