import React, { useState } from "react";

// auto timer
const Button = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div>
      {isLoading && <p>loading...</p>}
      <button
        className={`${
          isLoading && "eb-cursor-not-allowed"
        } eb-bg-red-500 hover:eb-bg-red-700 eb-text-white eb-font-bold eb-py-2 eb-px-4 eb-rounded`}
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        }}
        disabled={isLoading}
      >
        你好
      </button>
    </div>
  );
};

export default Button;
