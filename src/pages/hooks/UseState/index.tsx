import React, { useState } from "react";
import PageHeader from "../../../components/molecules/PageHeader";
import Counter from "../../../components/organisms/Counter";

import { Container, Content } from "./styles";

const UseState: React.FC = () => {
  const [counterNumber, setCounterNumber] = useState(0);

  return (
    <Container>
      <PageHeader title="useState" />

      <Content>
        <Counter
          counter={counterNumber}
          handleIncrement={() => setCounterNumber(state => state + 1)}
          handleDecrement={() =>
            setCounterNumber(state => (state > 0 ? state - 1 : state))
          }
          handleResetCounter={() => setCounterNumber(0)}
        />
      </Content>
    </Container>
  );
};

export default UseState;
