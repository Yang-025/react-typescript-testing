import { screen, render } from "@testing-library/react";
import Button from "../../exercise/06";
import { ButtonType } from "../../exercise/06types";

// before
describe("Button with diferrent type", () => {
  test("with type A", async () => {
    render(<Button type={ButtonType.A} />);
    expect(screen.getByText(/hi/i)).toHaveClass("eb-bg-green-500");
  });
  test("with type B", async () => {
    render(<Button type={ButtonType.B} />);
    expect(screen.getByText(/hi/i)).toHaveClass("eb-bg-blue-500");
  });
  test("with type C", async () => {
    render(<Button type={ButtonType.C} />);
    expect(screen.getByText(/hi/i)).toHaveClass("eb-bg-red-500");
  });

  test("with type X", async () => {
    render(<Button type={"X"} />);
    expect(screen.getByText(/hi/i)).toHaveClass("eb-bg-green-500");
  });
});
 