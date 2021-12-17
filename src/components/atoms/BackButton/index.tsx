import React from "react";

import { Container } from "./styles";

type TBackButton = {
  onClick?(): void;
};

const BackButton: React.FC<TBackButton> = ({ onClick }) => {
  return <Container size={25} onClick={onClick} />;
};

export default BackButton;
