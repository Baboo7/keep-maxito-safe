import AlertModel, { IAlert } from "./alerts";
import logger from "../utils/logger";

export class AlertsRepository {
  public static createAlert = async (message: string): Promise<IAlert> => {
    try {
      return await AlertModel.create({ message });
    } catch (error) {
      logger.error("[alert repository] Error while creating alert", error);
      throw error;
    }
  };
}
