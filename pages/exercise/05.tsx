import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #ffac27;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ffac27;
  border-radius: 3px;
`;

// styled component
const Button = () => {
  return <StyledButton>Hi</StyledButton>;
};

export default Button;
