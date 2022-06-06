import joi from "joi";
import { name, version } from "../../../package.json";

export default joi
  .object({
    NODE_ENV: joi
      .string()
      .lowercase()
      .valid("local", "test", "development", "production")
      .required(),
    APPLICATION_NAME: joi.string().default(name),
    APPLICATION_VERSION: joi.string().default(version),
    LOGGER_LEVEL: joi
      .string()
      .lowercase()
      .valid("fatal", "error", "warn", "info", "debug", "trace")
      .required(),
    LOGSTASH_ENABLED: joi.string().default(true),
    PORT: joi.string().required(),
  })
  .unknown()
  .required();
