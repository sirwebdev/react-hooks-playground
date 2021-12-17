import React from "react";

import PageHeader from "../../components/molecules/PageHeader";
import HookButtons from "../../components/organisms/HookButtons";

import hookList from "../../mocks/hookList.json";

import { Container } from "./styles";

const Hooks: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Pick up some item to test" navigateTo="/" />

      <HookButtons data={hookList} />
    </Container>
  );
};

export default Hooks;
