import React, { useState } from "react";

import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseState: React.FC = () => {
  // TODO: Use Counter with useState Hook.
  const [counterNumber, SetCounterNumber] = useState(0);

  return (
    <Container>
      <PageHeader title="useState" />

      <SplitHookContent
        topics={[
          "It's a state manager.",
          "Return array of 2 types, an actual state and a callback to update state.",
          "Can be started with a callback.",
        ]}
      >
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
