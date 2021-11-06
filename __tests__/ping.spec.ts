import app from "../src/application.routes";
import * as request from "supertest";

describe("We are grateful to you for doing this it.", () => {
  it("thanks you", async () => {
    await request(app)
      .get("/events")
      .expect(200)
      .expect(function (res) {
        expect(res.body).toBeTruthy();
      });
  });
});
