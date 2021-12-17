import React, { useCallback, forwardRef } from "react";
import Draggable, { DraggableData } from "react-draggable";

import CounterButton from "../../atoms/CounterButton";
import CounterDisplay, { TCounterDisplayRef } from "../../atoms/CounterDisplay";

import { Container } from "./styles";

type TForwardCounterProps = {
  counter: number;
  handleIncrement(): void;
  handleDecrement(): void;
  handleResetCounter(): void;
};

const ForwardCounter: React.ForwardRefRenderFunction<
  TCounterDisplayRef,
  TForwardCounterProps
> = (
  { counter, handleIncrement, handleDecrement, handleResetCounter },
  reference,
) => {
  const handleDragEnd = useCallback(
    (data: DraggableData) => {
      const { x, y } = data;

      const isDraggableToTheRight = x > 15;
      const isDraggableToTheLeft = x < -15;

      const isDraggableToTheBottom = y >= 50 && x < 25 && x > -25;

      if (isDraggableToTheLeft) handleDecrement();
      if (isDraggableToTheRight) handleIncrement();
      if (isDraggableToTheBottom) handleResetCounter();
    },
    [handleDecrement, handleIncrement, handleResetCounter],
  );

  return (
    <Container>
      <CounterButton value="-" onClick={handleDecrement} />

      <Draggable
        onStop={(_, data) => handleDragEnd(data)}
        bounds={{
          bottom: 70,
          right: 70,
          top: 0,
          left: -70,
        }}
        position={{
          x: 0,
          y: 0,
        }}
        handle=""
      >
        <CounterDisplay
          value={counter}
          onClick={handleIncrement}
          ref={reference}
        />
      </Draggable>
      <CounterButton value="x" onClick={handleResetCounter} />
      <CounterButton value="+" onClick={handleIncrement} />
    </Container>
  );
};

export default forwardRef(ForwardCounter);
