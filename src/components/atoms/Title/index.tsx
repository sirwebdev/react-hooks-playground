import React from "react";

import { Container } from "./styles";

type TTitleProps = {
  value: string;
  type?: "small" | "large";
};

const Title: React.FC<TTitleProps> = ({ value, type = "large" }) => {
  return <Container type={type}>{value}</Container>;
};

export default Title;
