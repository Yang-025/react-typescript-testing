import { screen, render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import Trade from "../../exercise/09/Trade";

test("<Trade />", () => {
  // randomMock = jest.spyOn(global.Math, "random");
  jest.spyOn(global.Math, "random").mockReturnValue(0.1);
  // jest.spyOn(global.Math, 'floor')

  render(<Trade wood={50} />);

  // 😱
  // expect(screen.getByText(/賣完，得到 \$ 7000/i)).toBeInTheDocument();
  expect(screen.getByTestId("sell").textContent).toBe("賣完，得到 $7000");
});
