import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type TContainerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

const CounterButton: React.FC<TContainerButtonProps> = ({ value, ...rest }) => {
  return (
    <Container {...rest}>
      <b>{value}</b>
    </Container>
  );
};

export default CounterButton;
