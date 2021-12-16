import React from "react";

import { Container } from "./styles";

const DefaultPage: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default DefaultPage;
