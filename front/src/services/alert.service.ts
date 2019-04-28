import { trim } from "lodash";

import { API_ENDPOINT } from "../environment";

export enum AlertServiceError {
  "MESSAGE_EMPTY" = "MESSAGE_EMPTY"
}

export class AlertService {
  public static sendAlert = async (message: string): Promise<void> => {
    const trimmedMessage = trim(message);
    if (trimmedMessage.length === 0) {
      throw new Error(AlertServiceError.MESSAGE_EMPTY);
    }

    try {
      const response = await fetch(`${API_ENDPOINT}/alert`, {
        body: JSON.stringify({ message: trimmedMessage }),
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });
      const json: ISendAlertResponse = await response.json();

      if (json.error) {
        throw new Error(json.error);
      }
    } catch (error) {
      throw error;
    }
  };
}

interface ISendAlertResponse {
  error?: string;
}
