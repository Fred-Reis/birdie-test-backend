import "dotenv/config";

import express from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import { eventRouters } from "../routes/events.routes";

const app = express();
// eslint-disable-next-line @typescript-eslint/no-floating-promises
createConnection();

app.use(cors());
app.use(express.json());

app.use(eventRouters);

export { app };
