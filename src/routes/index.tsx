import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import UseState from "../pages/hooks/UseState";

const Routers: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hooks/useState" element={<UseState />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
