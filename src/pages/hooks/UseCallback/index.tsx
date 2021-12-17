import React, { useCallback, useEffect, useState } from "react";

import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseCallback: React.FC = () => {
  const [counterNumber, setCounterNumber] = useState(0);

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

      <SplitHookContent
        topics={[
          "It's a callback manager.",
          "Most used to prevent useless render of callbacks.",
        ]}
      >
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
