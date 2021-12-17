import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Hooks from "../pages/Hooks";
import UseState from "../pages/Hooks/UseState";
import UseImperativeHandle from "../pages/Hooks/UseImperativeHandle";

const Routers: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/hooks/useState" element={<UseState />} />
      <Route
        path="/hooks/useImperativeHandle"
        element={<UseImperativeHandle />}
      />
    </Routes>
  </BrowserRouter>
);

export default Routers;
