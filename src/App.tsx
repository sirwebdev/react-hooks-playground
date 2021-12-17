import React from "react";

import Routers from "./routes";

import TopicProvider from "./contexts/topic";

import Wrapper from "./components/templates/Wrapper";

import { GlobalStyle } from "./styles/globalStyle";

const App: React.FC = () => {
  return (
    <TopicProvider>
      <Wrapper>
        <Routers />
        <GlobalStyle />
      </Wrapper>
    </TopicProvider>
  );
};

export default App;
