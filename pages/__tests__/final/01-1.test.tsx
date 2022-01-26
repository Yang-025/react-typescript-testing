import { render } from "@testing-library/react";
import Button from "../../exercise/01";

// snapshot
test("Button displays hi", async () => {
  const { container, debug } = render(<Button />);
  expect(container).toMatchInlineSnapshot(`
<div>
  <button
    class="eb-bg-green-500 hover:eb-bg-green-700 eb-text-white eb-font-bold eb-py-2 eb-px-4 eb-rounded"
  >
    Hi
  </button>
</div>
`);
  // expect(container).toMatchSnapshot();
});
