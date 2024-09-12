import React, { useCallback, useState } from "react";

import useTopic from "../../../hooks/useTopic";

import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseCallback: React.FC = () => {
  const [counterNumber, setCounterNumber] = useState(0);
  const { selectedTopics } = useTopic();

  // TODO: Provide a better way to create a function callback.

  const handleIncrement = useCallback(() => {
    setCounterNumber(counterNumber + 1);
  }, [counterNumber]);

  const handleDecrement = useCallback(() => {
    if (counterNumber <= 0) return setCounterNumber(counterNumber);

    setCounterNumber(counterNumber - 1);
  }, [counterNumber]);

  const handleResetCounter = useCallback(() => {
    setCounterNumber(0);
  }, []);

  return (
    <Container>
      <PageHeader title="useCallback" />

      <SplitHookContent topics={selectedTopics}>
        <Counter
          counter={counterNumber}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleResetCounter={handleResetCounter}
        />
      </SplitHookContent>
    </Container>
  );
};

export default UseCallback;
