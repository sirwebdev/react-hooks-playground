import React from "react";

import { Container } from "./styles";

type TContainerButtonProps = {
  value: string;
};

const CounterButton: React.FC<TContainerButtonProps> = ({ value }) => {
  return (
    <Container>
      <b>{value}</b>
    </Container>
  );
};

export default CounterButton;
