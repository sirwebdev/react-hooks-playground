import React from "react";

import Routers from "./routes";
import Wrapper from "./components/templates/Wrapper";

import { GlobalStyle } from "./styles/globalStyle";

const App: React.FC = () => {
  return (
    <Wrapper>
      <Routers />
      <GlobalStyle />
    </Wrapper>
  );
};

export default App;
