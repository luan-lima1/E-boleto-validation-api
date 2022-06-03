import loadConfig from "./load-config";
import configSchema from "./config-schema";

const config = () => loadConfig(configSchema, process.env);

export default config;
