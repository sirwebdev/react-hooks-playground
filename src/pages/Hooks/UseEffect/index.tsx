import React, { useCallback, useEffect, useState } from "react";

import useTopic from "../../../hooks/useTopic";

import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseEffect: React.FC = () => {
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

  // TODO: Make a interval counter.
  // TODO: Stops interval counter when component will unmount.
  useEffect(() => {
    const intervalCounter = setInterval(() => handleIncrement(), 1000);

    console.log("Calling the useEffect callback");

    // When component will unmout call the destructor
    return () => {
      clearInterval(intervalCounter);
      console.log("Calling the useEffect destructor");
    };
  }, [handleIncrement]);

  // When component update do it
  useEffect(() => {
    console.log("CountNumber is: ", counterNumber);
  }, [counterNumber]);

  return (
    <Container>
      <PageHeader title="useEffect" />

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

export default UseEffect;
