import React from "react";
import Routers from "./routes";

import { GlobalStyle } from "./styles/globalStyle";

const App: React.FC = () => {
  return (
    <>
      <Routers />
      <GlobalStyle />
    </>
  );
};

export default App;
