import React, { useMemo } from "react";
import Topic, { TTopic } from "../../atoms/Topic";

import { Container } from "./styles";

type TTopicsProps = {
  data: TTopic[];
};

const Topics: React.FC<TTopicsProps> = ({ data }) => {
  const TopicList = useMemo(() => {
    if (!data.length) return;

    return data.map(value => <Topic key={value} text={value} />);
  }, []);

  return <Container>{TopicList}</Container>;
};

export default Topics;
