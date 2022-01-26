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
  // 準備
  // 執行
  render(<Button />);

  const btn = screen.getByRole("button", {
    name: /請按/i,
  });

  userEvent.click(btn);

  // 驗證
  expect(screen.getByText(/loading\.\.\.\.\.\.\.\./i)).toBeInTheDocument();

  await waitFor(() => {
    // screen.debug();
    screen.getByRole("list");
  });

  const listItems = within(screen.getByRole("list")).getAllByRole(
    "listitem"
  );
  expect(listItems).toHaveLength(3);
  expect(listItems).toMatchInlineSnapshot(`
Array [
  <li>
    1
  </li>,
  <li>
    2
  </li>,
  <li>
    3
  </li>,
]
`);
});

test("test api fail", async () => {
  // 準備
  server.use(
    rest.get("http://my-backend/fake-data", (req, res, ctx) => {
      return res(ctx.status(400), ctx.json("SOMETHING_WRONG"));
    })
  );

  // 執行
  render(<Button />);

  const btn = screen.getByRole("button", {
    name: /請按/i,
  });

  userEvent.click(btn);

  // 驗證
  expect(screen.getByText(/loading\.\.\.\.\.\.\.\./i)).toBeInTheDocument();

  // 1
  await waitFor(() => {
    expect(screen.getByText(/SOMETHING_WRONG/i)).toBeInTheDocument();
  });

  // 2
  expect(await screen.findByText(/SOMETHING_WRONG/i)).toBeInTheDocument();
});
