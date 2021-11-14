import * as express from "express";
import { getEvents } from "../../controllers/events.controller";

export const eventRouters = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
eventRouters.get("/events/:page*?", getEvents);
