import { render, screen } from "@testing-library/react";
import Button from "../../exercise/02";

test("Button displays correct content", async () => {
  // 準備
  const content = "ABC";
  
  // 執行
  render(<Button content={content} />);

  // 驗證
  expect(screen.getByRole("button")).toHaveTextContent(content);
});
