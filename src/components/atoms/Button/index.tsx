import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type TButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  text: string;
};

const Button: React.FC<TButtonProps> = ({ text, ...rest }) => {
  return (
    <Container {...rest} type="button">
      <b>{text}</b>
    </Container>
  );
};

export default Button;
