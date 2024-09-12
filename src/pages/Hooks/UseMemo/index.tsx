import React, { useCallback, useState, useMemo } from "react";

import useTopic from "../../../hooks/useTopic";

import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseMemo: React.FC = () => {
  const [counterNumber, setCounterNumber] = useState(0);
  const { selectedTopics } = useTopic();

  const handleIncrement = useCallback(
    () => setCounterNumber(state => state + 1),
    [],
  );

  const handleDecrement = useCallback(
    () => setCounterNumber(state => (state > 0 ? state - 1 : state)),
    [],
  );

  const handleResetCounter = useCallback(() => setCounterNumber(0), []);

  // TODO: Get the counterNumber by useMemo.
  const counter = useMemo((): number => counterNumber, [counterNumber]);

  // TODO: Make a pure component.
  const counterComponent = useMemo(() => {
    return (
      <Counter
        counter={counter}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleResetCounter={handleResetCounter}
      />
    );
  }, [counter, handleIncrement, handleDecrement, handleResetCounter]);

  return (
    <Container>
      <PageHeader title="useMemo" />

      <SplitHookContent topics={selectedTopics}>
        {counterComponent}
      </SplitHookContent>
    </Container>
  );
};

export default UseMemo;
