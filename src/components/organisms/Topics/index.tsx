import React, { useMemo } from "react";
import Description from "../../atoms/Description";
import Title from "../../atoms/Title";
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

  return (
    <Container>
      <section>
        <Title value="Important notes..." type="small" />
        <Description value="Bellow we have some important notes about this hook !!" />
      </section>

      {TopicList}
    </Container>
  );
};

export default Topics;
