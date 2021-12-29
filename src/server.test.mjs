import request from "supertest";
import app from "./server.mjs";

describe("Server", () => {
  it("works", async () => {
    const { body } = await request(app).get("/");
    const expected = { status: "ok" };

    expect(body).toEqual(expected);
  });
});
