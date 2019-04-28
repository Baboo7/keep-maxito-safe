import { Context } from "koa";

import logger from "./logger";

/**
 * Helper to render json into koa context.
 *
 * @param ctx
 * @param data
 */
export const renderJson = (
  ctx: Context,
  data: any = {},
  status: number = 200
): void => {
  ctx.set("Content-Type", "application/json");
  ctx.status = status;
  ctx.body = data;

  if (status >= 500) {
    logger.error(data);
  }
};

export const badRequest = (ctx: Context) =>
  renderJson(ctx, { error: "Bad Request" }, 400);

export const internalServerError = (ctx: Context) =>
  renderJson(ctx, { error: "Internal Server Error" }, 500);
