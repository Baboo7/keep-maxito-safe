import * as winston from "winston";

import { LOG_LEVEL } from "./config";

export default winston.createLogger({
  format: winston.format.json(),
  level: LOG_LEVEL,
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});
