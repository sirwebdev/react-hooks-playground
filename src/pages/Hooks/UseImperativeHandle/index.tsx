import React, { useCallback, useState } from "react";

import Button from "../../../components/atoms/Button";

import PageHeader from "../../../components/molecules/PageHeader";

import ForwardCounter from "../../../components/organisms/ForwardCounter";

import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container, ButtonsContainer } from "./styles";

const UseImperativeHandle: React.FC = () => {
  const [counterNumber, setCounterNumber] = useState(0);

  // TODO: Create a reference and manipulate it on child component.

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
