import * as mongoose from "mongoose";

export interface IAlert extends mongoose.Document {
  message: string;
}

const AlertSchema = new mongoose.Schema({
  message: { type: String, required: true }
});

const AlertModel = mongoose.model<IAlert>("Alert", AlertSchema);

export default AlertModel;
