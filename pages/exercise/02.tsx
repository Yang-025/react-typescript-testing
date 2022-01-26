import React from "react";

type Props = {
  content: string;
};

// props
const Button = ({ content }: Props) => {
  return <button className="eb-bg-green-500 hover:eb-bg-green-700 eb-text-white eb-font-bold eb-py-2 eb-px-4 eb-rounded">{content}</button>;
};

export default Button;
