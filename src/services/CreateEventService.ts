import "reflect-metadata";

import { getRepository } from "typeorm";
import { Events } from "../entity/Events";

class CreateEventsService {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async execute(page: string) {
    const events = await getRepository(Events).find({
      take: 100,
      skip: Number(page) * 100,
    });
    return events;
  }
}

export default new CreateEventsService();
