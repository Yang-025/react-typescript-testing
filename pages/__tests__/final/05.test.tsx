import { render } from "@testing-library/react";
import "jest-styled-components";
import Button from "../../exercise/05";

test("StyledButton", async () => {
  // 執行
  const { container, debug } = render(<Button />);
   
  // 驗證
  expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  color: #ffac27;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ffac27;
  border-radius: 3px;
}

<button
  class="c0"
>
  Hi
</button>
`);
});
