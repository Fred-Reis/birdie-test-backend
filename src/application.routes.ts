import * as express from "express";
import { getEvents } from "./controllers/events.controller";

export const eventRouters = express.Router();

eventRouters.get("/events/:page", getEvents);
