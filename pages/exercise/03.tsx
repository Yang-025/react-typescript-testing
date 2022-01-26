import React from "react";

type Props = {
  content: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

// onclick call back
const Button = ({ content, onClick }: Props) => {
  return (
    <button
      className="eb-bg-yellow-500 hover:eb-bg-yellow-700 eb-text-white eb-font-bold eb-py-2 eb-px-4 eb-rounded"
      onMouseDown={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
