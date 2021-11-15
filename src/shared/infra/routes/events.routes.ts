import * as express from "express";
import { getEvents } from "../../../modules/events/controllers/EventsController";

export const eventRouters = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
eventRouters.get("/events/:page*?", getEvents);
