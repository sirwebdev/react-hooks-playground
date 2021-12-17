import React from "react";

import { Container } from "./styles";

type TReactLogoIconProps = {
  currentSize?: "small" | "large";
};

const ReactLogoIcon: React.FC<TReactLogoIconProps> = ({
  currentSize = "large",
}) => {
  return <Container currentSize={currentSize} />;
};

export default ReactLogoIcon;
