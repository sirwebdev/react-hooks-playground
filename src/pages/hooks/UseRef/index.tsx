import React, { useCallback, useState } from "react";

import Button from "../../../components/atoms/Button";

import Counter from "../../../components/organisms/Counter";

import PageHeader from "../../../components/molecules/PageHeader";

import SplitHookContent from "../../../components/templates/SplitHookContent";

import { ButtonsContainer, Container } from "./styles";

const UseRef: React.FC = () => {
  const [counterNumber, setCounterNumber] = useState(0);

  // TODO: Log the Counter component into browser console

  const handleIncrement = useCallback(
    () => setCounterNumber(state => state + 1),
    [],
  );

  const handleDecrement = useCallback(
    () => setCounterNumber(state => (state > 0 ? state - 1 : state)),
    [],
  );

  const handleResetCounter = useCallback(() => setCounterNumber(0), []);

  // eslint-disable-next-line
  const handleLogCounterComponentIntoBrowser = useCallback(() => {}, []);

  return (
    <Container>
      <PageHeader title="useRef" />

      <SplitHookContent topics={[]}>
        <Counter
          counter={counterNumber}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleResetCounter={handleResetCounter}
        />
        <ButtonsContainer>
          <Button
            text="Get Log from current reference"
            onClick={handleLogCounterComponentIntoBrowser}
          />
        </ButtonsContainer>
      </SplitHookContent>
    </Container>
  );
};

export default UseRef;
