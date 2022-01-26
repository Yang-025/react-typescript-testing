import { rest } from "msw";

const handlers = [
  rest.get("http://my-backend/fake-data", (req, res, ctx) => {
    return res(
      ctx.json(["1", "2", "3"])
    );
  }),
];

export { handlers };
