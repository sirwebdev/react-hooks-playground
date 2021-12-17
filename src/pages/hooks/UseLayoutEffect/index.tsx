import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";
import useTopic from "../../../hooks/useTopic";

const UseLayoutEffect: React.FC = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const [counterNumber, setCounterNumber] = useState(0);

  const { selectedTopics } = useTopic();

  const handleIncrement = useCallback(
    () => setCounterNumber(state => state + 1),
    [],
  );

  const handleDecrement = useCallback(
    () => setCounterNumber(state => (state > 0 ? state - 1 : state)),
    [],
  );

  const handleResetCounter = useCallback(() => setCounterNumber(0), []);

  // TODO: Show the difference of synchronization between useEffect and useLayoutEffect.
  // useLayoutEffect(() => {
  //   if (!counterRef.current) return;

  //   const { bottom } = counterRef.current.getBoundingClientRect();

  //   counterRef.current.style.bottom = `${bottom - 300}px`;
  // }, [counterRef]);

  // useEffect(() => {
  //   console.log("Calling the useEffect callback");

  //   if (!counterRef.current) return;

  //   const { bottom } = counterRef.current.getBoundingClientRect();

  //   counterRef.current.style.bottom = `${bottom - 300}px`;
  // }, [counterRef]);

  useLayoutEffect(() => {
    console.log("Calling the useLayoutEffect callback");
  }, []);

  useEffect(() => {
    console.log("Calling the useEffect callback");
  }, []);

  return (
    <Container>
      <PageHeader title="useLayoutEffect" />

      <SplitHookContent topics={selectedTopics}>
        <section ref={counterRef} style={{ position: "absolute" }}>
          <Counter
            counter={counterNumber}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleResetCounter={handleResetCounter}
          />
        </section>
      </SplitHookContent>
    </Container>
  );
};

export default UseLayoutEffect;
