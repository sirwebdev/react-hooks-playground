import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Hooks from "../pages/hooks";
import NotFoundPage from "../pages/404";
import UseRef from "../pages/hooks/UseRef";
import UseMemo from "../pages/hooks/UseMemo";
import UseState from "../pages/hooks/UseState";
import UseEffect from "../pages/hooks/UseEffect";
import UseReducer from "../pages/hooks/UseReducer";
import UseContext from "../pages/hooks/UseContext";
import UseCallback from "../pages/hooks/UseCallback";
import UseLayoutEffect from "../pages/hooks/UseLayoutEffect";
import UseImperativeHandle from "../pages/hooks/UseImperativeHandle";

const Routers: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/hooks/useRef" element={<UseRef />} />
      <Route path="/hooks/useMemo" element={<UseMemo />} />
      <Route path="/hooks/useState" element={<UseState />} />
      <Route path="/hooks/useEffect" element={<UseEffect />} />
      <Route path="/hooks/useReducer" element={<UseReducer />} />
      <Route path="/hooks/useCallback" element={<UseCallback />} />
      <Route path="/hooks/useContext" element={<UseContext />} />
      <Route path="/hooks/useLayoutEffect" element={<UseLayoutEffect />} />
      <Route
        path="/hooks/useImperativeHandle"
        element={<UseImperativeHandle />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
