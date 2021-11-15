import "reflect-metadata";

import { getRepository } from "typeorm";
import { Events } from "../entities/Events";
import { AppError } from "../../../shared/errors/AppError";

class CreateEventsService {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async execute(page?: string | "0") {
    try {
      const events = await getRepository(Events).find({
        take: 100,
        skip: Number(page) * 100,
      });
      return events;
    } catch (error: any) {
      throw new AppError(error.message, 404);
    }
  }
}

export default new CreateEventsService();
