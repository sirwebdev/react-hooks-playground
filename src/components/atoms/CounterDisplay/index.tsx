import React, {
  ButtonHTMLAttributes,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { Container } from "./styles";

type TCounterDisplay = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: number;
};

export type TCounterDisplayRef = {
  click(): void;
  toggleDisplayVisibility(): void;
};

const CounterDisplay: React.ForwardRefRenderFunction<
  TCounterDisplayRef,
  TCounterDisplay
> = ({ value, ...rest }, reference) => {
  const [isDisplayVisible, setIsDisplayVisible] = useState(true);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(() => {
    buttonRef.current?.click();
  }, [buttonRef]);

  const toggleDisplayVisibility = useCallback(() => {
    setIsDisplayVisible(state => !state);
  }, []);

  useImperativeHandle(
    reference,
    (): TCounterDisplayRef => ({
      click: handleClick,
      toggleDisplayVisibility,
    }),
    [buttonRef],
  );

  return (
    <Container {...rest} ref={buttonRef} visible={isDisplayVisible}>
      <b>{value}</b>
    </Container>
  );
};

export default forwardRef(CounterDisplay);
