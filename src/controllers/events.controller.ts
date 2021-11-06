import "reflect-metadata";

import { Request, Response } from "express";
import createEventService from "../services/CreateEventService";

export const getEvents = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const events = await createEventService.execute(req.params.page);
  return res.json(events);
};
