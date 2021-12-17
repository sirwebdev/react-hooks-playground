import React from "react";

import { Container } from "./styles";

export type TTopic = string;

type TTopicProps = {
  text: TTopic;
};

const Topic: React.FC<TTopicProps> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Topic;
