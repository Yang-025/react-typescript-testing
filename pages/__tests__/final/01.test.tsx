import { render, screen } from "@testing-library/react";

import Button from "../../exercise/01";

test("Button displays hi", async () => {
  render(<Button />);

  expect(screen.getByRole("button")).toHaveTextContent(/hi/i);

  expect(
    screen.getByRole("button", {
      name: /hi/i,
    })
  ).toBeInTheDocument();
});
