import React, {
  useCallback,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

import Draggable, { DraggableData } from "react-draggable";

import CounterButton from "../../atoms/CounterButton";
import CounterDisplay from "../../atoms/CounterDisplay";

import { Container } from "./styles";

export type TForwardCounterRef = {
  resetCounterFromReference(): void;
  toggleDisplayVisibility(): void;
  toggleDraggableFeature(): void;
};

type TForwardCounterProps = {
  counter: number;
  handleIncrement(): void;
  handleDecrement(): void;
  handleResetCounter(): void;
};

const ForwardCounter: React.ForwardRefRenderFunction<
  TForwardCounterRef,
  TForwardCounterProps
> = (
  { counter, handleIncrement, handleDecrement, handleResetCounter },
  reference,
) => {
  const [isDisplayVisible, setIsDisplayVisible] = useState(true);
  const [isDraggable, setIsDraggable] = useState(true);

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

  const toggleDisplayVisibility = useCallback(() => {
    setIsDisplayVisible(state => !state);
  }, []);

  const toggleDraggableFeature = useCallback(() => {
    setIsDraggable(state => !state);
  }, []);

  useImperativeHandle(
    reference,
    (): TForwardCounterRef => ({
      resetCounterFromReference: handleResetCounter,
      toggleDisplayVisibility,
      toggleDraggableFeature,
    }),
    [handleResetCounter, toggleDisplayVisibility, toggleDraggableFeature],
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
        disabled={!isDraggable}
      >
        <CounterDisplay
          value={counter}
          onClick={handleIncrement}
          isDisplayVisible={isDisplayVisible}
        />
      </Draggable>
      <CounterButton value="x" onClick={handleResetCounter} />
      <CounterButton value="+" onClick={handleIncrement} />
    </Container>
  );
};

export default forwardRef(ForwardCounter);
