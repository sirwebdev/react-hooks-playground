import React, { useState } from "react";

import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseState: React.FC = () => {
  const [counterNumber, setCounterNumber] = useState(0);

  return (
    <Container>
      <PageHeader title="useState" />

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

export default UseState;
