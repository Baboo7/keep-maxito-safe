import * as Koa from "koa";
import * as KoaJson from "koa-json";
import * as KoaMorgan from "koa-morgan";
import * as KoaBodyParser from "koa-bodyparser";

import api from "./middlewares/api";
import { cors, PORT } from "./utils/config";
import logger from "./utils/logger";
import { connectToDatabase } from "./utils/database";

/** CONNECT TO DATABASE */
connectToDatabase();

const app = new Koa();

/** FOR ACCESS LOGS */
app.use(KoaMorgan("combined"));

/** FOR CORS */
app.use(cors());

/** API endpoints */
app.use(KoaJson());
app.use(KoaBodyParser());
app.use(api.routes()).use(api.allowedMethods());

export const server = app.listen(PORT, () => {
  const base = `http://localhost:${PORT}`;
  logger.info(`🚀 API: ${base}/api/`);
});
