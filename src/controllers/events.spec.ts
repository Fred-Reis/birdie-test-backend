/* eslint-disable @typescript-eslint/no-misused-promises */
import request from "supertest";

import { app } from "../infra/http/app";

import { createConnection, getConnection } from "typeorm";

const connection = {
  async create(): Promise<void> {
    await createConnection();
  },

  async close(): Promise<void> {
    return await getConnection().close();
  },
};

beforeAll(async (done) => {
  await connection.create();
  done();
});

afterAll(async (done) => {
  await connection.close();
  done();
});

describe("Create events.", () => {
  test("it should return an array of events", async () => {
    await request(app)
      .get("/events")
      .expect(200)
      .expect(function (res) {
        expect(res.body).toBeTruthy();
      });
  });
});
