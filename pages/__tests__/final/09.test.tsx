import { screen, render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import Demo from "../../exercise/09";

test("Demo", () => {
  render(<Demo />);

  expect(
    screen.getByRole("heading", {
      name: /100個木頭可以做什麼？/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      name: /50個木頭拿去交易/i,
    })
  ).toBeInTheDocument();
    
  // 😱
  // expect(screen.getByText(/賣完，得到 \$ 7233/i)).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      name: /50個木頭拿去裝飾/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByText(/拿去裝飾小花園的圍籬/i)).toBeInTheDocument();
});
