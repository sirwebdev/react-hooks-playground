import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type TCounterDisplay = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: number;
};

const CounterDisplay: React.FC<TCounterDisplay> = ({ value, ...rest }) => {
  return (
    <Container {...rest}>
      <b>{value}</b>
    </Container>
  );
};

export default CounterDisplay;
