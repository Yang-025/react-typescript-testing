import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Button from "../../exercise/03";

test("Button onclick", async () => {
  // 準備
  const content = "Click";
  const handleClick = jest.fn();

  // 執行
  render(<Button content={content} onClick={handleClick} />);
  // fireEvent.click(screen.getByText(/click/i));
  userEvent.click(screen.getByText(/click/i));

  // 驗證
  expect(handleClick).toHaveBeenCalledTimes(1);
   
});
