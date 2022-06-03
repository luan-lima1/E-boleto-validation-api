import express from "express";
import errorHandler from "./middleware/error-handler";
import router from "./router";

const app = express();

app.use(express.json());
app.use(router);

app.use(errorHandler);

export default app;
