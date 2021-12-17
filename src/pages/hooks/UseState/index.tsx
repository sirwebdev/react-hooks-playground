import React from "react";

// import Counter from "../../../components/organisms/Counter";
import PageHeader from "../../../components/molecules/PageHeader";
import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseState: React.FC = () => {
  // TODO: Use Counter with useState Hook.

  return (
    <Container>
      <PageHeader title="useState" />

      <SplitHookContent topics={[]}>{/* <Counter /> */}</SplitHookContent>
    </Container>
  );
};

export default UseState;
