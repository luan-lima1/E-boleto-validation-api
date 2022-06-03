import pino from "pino";
import createConfig from "../load";

const config = createConfig();

const { enabled, loggerInfo } = config.logger;

export default pino({
  enabled,
  level: loggerInfo,
});
