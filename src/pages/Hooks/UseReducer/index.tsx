import React from "react";

// import Counter from "../../../components/organisms/Counter";

import PageHeader from "../../../components/molecules/PageHeader";

import SplitHookContent from "../../../components/templates/SplitHookContent";

import { Container } from "./styles";

const UseReducer: React.FC = () => {
  // TODO: Use Counter with useReducer Hook.

  return (
    <Container>
      <PageHeader title="useState" />

      <SplitHookContent topics={[]}>{/* <Counter /> */}</SplitHookContent>
    </Container>
  );
};

export default UseReducer;
