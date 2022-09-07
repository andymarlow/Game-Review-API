const request = require("supertest");
const app = require("../app");
const db = require("../db/connection");
const seed = require("../db/seeds/seed");
const testData = require("../db/data/test-data/index");

beforeEach(() => {
  return seed(testData);
});

afterAll(() => {
  return db.end();
});

describe("Ping server", () => {
  test("200: should respond with a json object containing a 'message' key", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ message: "Server says hi" });
      });
  });
});

describe("GET categories", () => {
  test("200: should respond an array of category objects with the properties slug and description", () => {
    return request(app)
      .get("/api/categories")
      .expect(200)
      .then((res) => {
        const categories = res.body.categories;
        expect(Array.isArray(categories)).toBe(true);
        categories.forEach((category) => {
          expect(category).toEqual(
            expect.objectContaining({
              slug: expect.any(String),
              description: expect.any(String),
            })
          );
        });
      });
  });
  test("status:404, responds with an error message when user trying to access an endpoint that does not exist", () => {
    return request(app)
      .get("/api/categoriesss")
      .expect(404)
      .then(({ body }) => {
        expect(body).toEqual({ msg: "Page/File Not Found" });
      });
  });
});

describe("GET review by id", () => {
  test("200: should respond with an object that contains the relavant review properties", () => {
    return request(app)
      .get("/api/reviews/1")
      .expect(200)
      .then((res) => {
        expect(typeof res.body).toBe("object");
        expect(res.body.reviewToSend).toEqual(
          expect.objectContaining({
            review_id: expect.any(Number),
            title: expect.any(String),
            review_body: expect.any(String),
            designer: expect.any(String),
            review_img_url: expect.any(String),
            votes: expect.any(Number),
            category: expect.any(String),
            owner: expect.any(String),
            created_at: expect.any(String),
          })
        );
      });
  });
  test("404: should return 404 error when an id is requested that does not exist", () => {
    return request(app)
      .get("/api/reviews/10000")
      .expect(404)
      .then(({ body }) => {
        expect(body).toEqual({ msg: "Page/File Not Found" });
      });
  });
});
