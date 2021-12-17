import React, { ButtonHTMLAttributes } from "react";
import ReactLogoIcon from "../../atoms/ReactLogoIcon";

import { Container } from "./styles";

export type THookButton = {
  name: string;
};

type THookButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  data: THookButton;
};

const HookButton: React.FC<THookButtonProps> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <ReactLogoIcon />

      <b>{data.name}</b>
    </Container>
  );
};

export default HookButton;
