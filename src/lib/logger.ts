import pino from "pino";

export const logger = pino({
  level:
    process.env.LOG_LEVEL ||
    (process.env.NODE_ENV === "production" ? "info" : "debug"),
  transport:
    process.env.NODE_ENV === "production"
      ? undefined
      : { target: "pino-pretty" },
});
