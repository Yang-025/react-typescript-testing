import React, { useState } from "react";

import { ButtonType } from "./06types";

type Props = {
  type: ButtonType | string;
};

// subtest: table
const Button = ({ type }: Props) => {
  const getCls = (type: ButtonType | string) => {
    const typeACls = "eb-bg-green-500";
    switch (type) {
      case ButtonType.A:
        return typeACls;
      case ButtonType.B:
        return "eb-bg-blue-500";
      case ButtonType.C:
        return "eb-bg-red-500";
      default:
        return typeACls;
    }
  };

  return (
    <button
      className={`${getCls(
        type
      )} eb-text-white eb-font-bold eb-py-2 eb-px-4 eb-rounded`}
    >
      Hi
    </button>
  );
};

export default Button;
