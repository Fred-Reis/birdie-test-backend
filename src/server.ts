import express from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import { eventRouters } from "./application.routes";

const port = process.env.PORT || 8000;

const app = express();
// eslint-disable-next-line @typescript-eslint/no-floating-promises
createConnection();

app.use(cors());
app.use(express.json());

app.use(eventRouters);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${port}`);
});
