import { trim } from "lodash";
import { Context } from "koa";
import * as KoaRouter from "koa-router";

import logger from "../utils/logger";
import { renderJson, internalServerError, badRequest } from "../utils/web";
import { AlertsRepository } from "../models";
import { Next } from "./types/koa";
import Mailer from "../connectors/mail";

// Create a router with PREFIX url for out APIs.
const router = new KoaRouter({ prefix: "/api" });

/**
 * Send an alert
 */
router.post(
  "/alert",
  async (ctx: Context, next: Next): Promise<void> => {
    logger.info("[api] Send alert entry point");
    const { message } = ctx.request.body;

    try {
      if (message == null || typeof message !== "string") {
        throw new Error("MESSAGE_INVALID_TYPE");
      }

      const trimmedMessage = trim(message);
      if (trimmedMessage.length === 0) {
        throw new Error("MESSAGE_INVALID_SIZE");
      }
    } catch (error) {
      logger.error("[api] Error at send alert entry point", error);

      return badRequest(ctx);
    }

    ctx.request.body.message = trim(message);
    return next();
  },
  async (ctx: Context): Promise<void> => {
    logger.info("[api] Send alert");
    const { message } = ctx.request.body;

    try {
      const creatingAlert = AlertsRepository.createAlert(message);
      const sendingAlert = Mailer.sendMail(message);

      await Promise.all([creatingAlert, sendingAlert]);

      return renderJson(ctx);
    } catch (error) {
      logger.error("[api] Error at send alert", error);

      return internalServerError(ctx);
    }
  }
);

/**
 * Catch all for api: 404
 */
router.all(
  "*",
  async (ctx: Context): Promise<void> => {
    return renderJson(ctx, { error: "not found" }, 404);
  }
);

export default router;
