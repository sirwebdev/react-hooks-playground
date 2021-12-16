import React from "react";

import { Container } from "./styles";

type TDescriptionProps = {
  value: string;
};

const Description: React.FC<TDescriptionProps> = ({ value }) => {
  return <Container>{value}</Container>;
};

export default Description;
