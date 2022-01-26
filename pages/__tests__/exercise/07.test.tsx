import {
  screen,
  render,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { server } from "../../../test/server";
import Button from "../../exercise/07";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("test api success", async () => {
  // gogo
});

test("test api fail", async () => {
  // gogo
});
