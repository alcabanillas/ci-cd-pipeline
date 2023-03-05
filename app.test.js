const request = require("supertest");
const app = require('./app')


describe("GET /todos", () => {
  it("Should find 'Hello World!' in the DOM 2", async () => {
    const response = await request(app).get("/")
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});
