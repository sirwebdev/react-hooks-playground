import React, { useCallback, useRef, useState } from "react";

import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseLayoutEffect: React.FC = () => {
  const [counterNumber, setCounterNumber] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  const handleIncrement = useCallback(
    () => setCounterNumber(state => state + 1),
    [],
  );

  const handleDecrement = useCallback(
    () => setCounterNumber(state => (state > 0 ? state - 1 : state)),
    [],
  );

  const handleResetCounter = useCallback(() => setCounterNumber(0), []);

  // TODO: Show the difference of synchronization between useEffect and useLayoutEffect.

  return (
    <Container>
      <PageHeader title="useLayoutEffect" />

      <SplitHookContent topics={[]}>
        <section ref={counterRef} style={{ position: "absolute" }}>
          <Counter
            counter={counterNumber}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleResetCounter={handleResetCounter}
          />
        </section>
      </SplitHookContent>
    </Container>
  );
};

export default UseLayoutEffect;
