import React, { useCallback, useState } from "react";

import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseMemo: React.FC = () => {
  const [counterNumber, setCounterNumber] = useState(0);

  const handleIncrement = useCallback(
    () => setCounterNumber(state => state + 1),
    [],
  );

  const handleDecrement = useCallback(
    () => setCounterNumber(state => (state > 0 ? state - 1 : state)),
    [],
  );

  const handleResetCounter = useCallback(() => setCounterNumber(0), []);

  // TODO: Make a pure component.
  // TODO: Get the counterNumber by useMemo.

  return (
    <Container>
      <PageHeader title="useMemo" />

      <SplitHookContent topics={[]}>
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

export default UseMemo;
