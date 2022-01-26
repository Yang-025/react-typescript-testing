import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "../../exercise/08";

test("should increment counter", () => {
  const { result } = renderHook(() => useCounter());
 
  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(2);
});
