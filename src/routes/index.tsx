import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Hooks from "../pages/Hooks";
import UseRef from "../pages/Hooks/UseRef";
import UseMemo from "../pages/Hooks/UseMemo";
import UseState from "../pages/Hooks/UseState";
import UseEffect from "../pages/Hooks/UseEffect";
import UseReducer from "../pages/Hooks/UseReducer";
import UseCallback from "../pages/Hooks/UseCallback";
import UseLayoutEffect from "../pages/Hooks/UseLayoutEffect";
import UseImperativeHandle from "../pages/Hooks/UseImperativeHandle";

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
      <Route path="/hooks/useLayoutEffect" element={<UseLayoutEffect />} />
      <Route
        path="/hooks/useImperativeHandle"
        element={<UseImperativeHandle />}
      />
    </Routes>
  </BrowserRouter>
);

export default Routers;
