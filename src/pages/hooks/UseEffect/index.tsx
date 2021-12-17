import React, { useCallback, useState } from "react";

import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseEffect: React.FC = () => {
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

  // TODO: Make a interval counter.

  // TODO: Stops interval counter when component will unmount.

  return (
    <Container>
      <PageHeader title="useEffect" />

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

export default UseEffect;
