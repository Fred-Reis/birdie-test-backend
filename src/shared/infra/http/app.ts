import "dotenv/config";

import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { createConnection } from "typeorm";

import { eventRouters } from "../routes/events.routes";

import swaggerFile from "../../../swagger.json";

const app = express();
// eslint-disable-next-line @typescript-eslint/no-floating-promises
createConnection();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(eventRouters);

export { app };
