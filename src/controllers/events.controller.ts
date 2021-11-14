import "reflect-metadata";

import { Request, Response } from "express";

import createEventService from "../services/CreateEventsService";
import { AppError } from "../errors/AppError";

export const getEvents = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const events = await createEventService.execute(req.params.page);
    return res.json(events);
  } catch (error: any) {
    throw new AppError(error.message, 500);
  }
};
