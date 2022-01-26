import { render, act } from "@testing-library/react";
import useCounter from "../../exercise/08";

test("should increment counter", () => {
  let result;
  function TestCounter() {
    result = useCounter();
    return null;
  }
  render(<TestCounter />);
  
  expect(result.count).toBe(0);
  act(() => {
    result.increment();
  });
  expect(result.count).toBe(1);
});
