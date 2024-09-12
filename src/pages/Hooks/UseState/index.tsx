import React, { useState } from "react";

import useTopic from "../../../hooks/useTopic";

import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseState: React.FC = () => {
  // TODO: Use Counter with useState Hook.
  const [counterNumber, SetCounterNumber] = useState(0);
  const { selectedTopics } = useTopic();

  return (
    <Container>
      <PageHeader title="useState" />

      <SplitHookContent topics={selectedTopics}>
        <Counter
          counter={counterNumber}
          handleIncrement={() => SetCounterNumber(state => state + 1)}
          handleDecrement={() =>
            SetCounterNumber(state => (state > 0 ? state - 1 : state))
          }
          handleResetCounter={() => SetCounterNumber(0)}
        />
      </SplitHookContent>
    </Container>
  );
};

export default UseState;
