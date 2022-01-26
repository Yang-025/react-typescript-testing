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
 
// after
test.each([
  [ButtonType.A, "eb-bg-green-500"],
  [ButtonType.B, "eb-bg-blue-500"],
  [ButtonType.C, "eb-bg-red-500"],
  ["X", "eb-bg-green-500"],
])("type %s will has class %s", (type, expected) => {
  render(<Button type={type} />);

  expect(screen.getByText(/hi/i)).toHaveClass(expected);
});

test.each([
  { type: ButtonType.A, expected: "eb-bg-green-500" },
  { type: ButtonType.B, expected: "eb-bg-blue-500" },
  { type: ButtonType.C, expected: "eb-bg-red-500" },
  { type: "X", expected: "eb-bg-green-500" },
])("type $type will has class $expected", ({ type, expected }) => {
  render(<Button type={type} />);

  expect(screen.getByText(/hi/i)).toHaveClass(expected);
});

test.each`
  type            | expected
  ${ButtonType.A} | ${"eb-bg-green-500"}
  ${ButtonType.B} | ${"eb-bg-blue-500"}
  ${ButtonType.C} | ${"eb-bg-red-500"}
  ${"X"}          | ${"eb-bg-green-500"}
`("type $type will has class $expected", ({ type, expected }) => {
  render(<Button type={type} />);

  expect(screen.getByText(/hi/i)).toHaveClass(expected);
});
