import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type TCounterDisplay = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: number;
  isDisplayVisible?: boolean;
};

const CounterDisplay: React.FC<TCounterDisplay> = ({
  value,
  isDisplayVisible = true,
  ...rest
}) => {
  return (
    <Container {...rest} visible={isDisplayVisible}>
      <b>{value}</b>
    </Container>
  );
};

export default CounterDisplay;
