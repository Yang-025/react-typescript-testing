import { useState, useCallback } from "react";

type Props = {
  count: number;
  increment: () => void;
};

// https://github.com/testing-library/react-hooks-testing-library
function useCounter(): Props {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((x) => x + 1), []);

  return { count, increment };
}

export default useCounter;
