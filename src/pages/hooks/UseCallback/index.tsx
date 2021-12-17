import React, { useState } from "react";

import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseCallback: React.FC = () => {
  const [counterNumber, setCounterNumber] = useState(0);

  // TODO: Provide a better way to create a function callback.

  return (
    <Container>
      <PageHeader title="useCallback" />

      <SplitHookContent topics={[]}>
        <Counter
          counter={counterNumber}
          handleIncrement={() => setCounterNumber(state => state + 1)}
          handleDecrement={() =>
            setCounterNumber(state => (state > 0 ? state - 1 : state))
          }
          handleResetCounter={() => setCounterNumber(0)}
        />
      </SplitHookContent>
    </Container>
  );
};

export default UseCallback;
