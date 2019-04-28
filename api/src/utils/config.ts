import * as koaCors from "@koa/cors";
import * as dotenv from "dotenv";
import * as Koa from "koa";

import { Environment } from "./environment";

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV;

const initEnvironmentVariable = (
  variable: string | undefined,
  label: string
): string => {
  if (NODE_ENV) {
    if (!variable) {
      throw new Error(`Environment variable ${label} is undefined.`);
    }

    return variable;
  }

  return "";
};

export const ALLOWED_ORIGINS = initEnvironmentVariable(
  process.env.ALLOWED_ORIGINS,
  "ALLOWED_ORIGINS"
);

export const LOG_LEVEL = initEnvironmentVariable(
  process.env.LOG_LEVEL,
  "LOG_LEVEL"
);

export const PORT = initEnvironmentVariable(process.env.PORT, "PORT");

export const DB_URI = initEnvironmentVariable(process.env.DB_URI, "DB_URI");

export const MAIL_WATCHERS = initEnvironmentVariable(
  process.env.MAIL_WATCHERS,
  "MAIL_WATCHERS"
);

export const MAIL_NAME = initEnvironmentVariable(
  process.env.MAIL_NAME,
  "MAIL_NAME"
);

export const MAIL_USER = initEnvironmentVariable(
  process.env.MAIL_USER,
  "MAIL_USER"
);

export const MAIL_CLIENT_ID = initEnvironmentVariable(
  process.env.MAIL_CLIENT_ID,
  "MAIL_CLIENT_ID"
);

export const MAIL_CLIENT_SECRET = initEnvironmentVariable(
  process.env.MAIL_CLIENT_SECRET,
  "MAIL_CLIENT_SECRET"
);

export const MAIL_REFRESH_TOKEN = initEnvironmentVariable(
  process.env.MAIL_REFRESH_TOKEN,
  "MAIL_REFRESH_TOKEN"
);

export const MAIL_ACCESS_TOKEN = initEnvironmentVariable(
  process.env.MAIL_ACCESS_TOKEN,
  "MAIL_ACCESS_TOKEN"
);

export const cors = (): Koa.Middleware => {
  const allowedOrigins = ALLOWED_ORIGINS.split(",");
  // tslint:disable-next-line:no-any
  const origin = (ctx: any): string => {
    const requestOrigin = ctx.headers.origin;
    if (allowedOrigins.indexOf(requestOrigin) < 0) {
      return ctx.throw(`${requestOrigin} is not a valid origin`);
    }

    return requestOrigin;
  };

  let options: koaCors.Options = { credentials: true };

  if (NODE_ENV !== Environment.DEV) {
    options = { ...options, origin };
  }

  return koaCors(options);
};
