import React, { useCallback, useState } from "react";

import Button from "../../../components/atoms/Button";

import ForwardCounter from "../../../components/organisms/ForwardCounter";

import PageHeader from "../../../components/molecules/PageHeader";

import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container, ButtonsContainer } from "./styles";

const UseImperativeHandle: React.FC = () => {
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

  return (
    <Container>
      <PageHeader title="UseImperativeHandle" />

      <SplitHookContent topics={[]}>
        <ForwardCounter
          counter={counterNumber}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleResetCounter={handleResetCounter}
        />

        <ButtonsContainer>
          <Button text="Toggle visibility" />

          <Button text="Reset Counter" />
          <Button text="Toggle draggable" />
        </ButtonsContainer>
      </SplitHookContent>
    </Container>
  );
};

export default UseImperativeHandle;
