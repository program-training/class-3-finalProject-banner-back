import mongoose, { Schema, Model, Document } from "mongoose";
import { LogsInterface } from "../../resource/logs/interfaces/logInterface";

interface LogDocument extends LogsInterface, Document {}

const logSchema = new Schema<LogDocument>({
  shortDate: { type: String, required: true },//12/07/2023
  date: { type: String, required: true },//512559529529529
});

const logModel: Model<LogDocument> = mongoose.model("log", logSchema);

export default logModel;
