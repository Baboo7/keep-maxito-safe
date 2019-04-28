import * as mongoose from "mongoose";

import logger from "./logger";
import { DB_URI } from "./config";

export const connectToDatabase = async (attemps = 5): Promise<void> => {
  if (attemps === 0) {
    throw new Error("Could not connect to database");
  }

  logger.info("Trying to connect to database...");
  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    logger.info("MongoDB connected");
  } catch (error) {
    logger.error("Error while connecting to MongoDB", error);
    setTimeout(() => connectToDatabase(attemps - 1), 5000);
  }
};
