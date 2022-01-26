import { rest } from "msw";

export const handlers = [
  rest.get("http://my-backend/fake-data", (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.json(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
    );
  }),
];
