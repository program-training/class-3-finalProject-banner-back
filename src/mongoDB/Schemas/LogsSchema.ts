import mongoose, { Schema, Model, Document } from "mongoose";
import { LogsInterface } from "../../resource/logs/interfaces/logInterface";

interface LogDocument extends LogsInterface, Document {}

const logSchema = new Schema<LogDocument>({
  shortDate: { type: String, required: true },
  date: { type: String, required: true },
});

const logModel: Model<LogDocument> = mongoose.model("log", logSchema);

export default logModel;
