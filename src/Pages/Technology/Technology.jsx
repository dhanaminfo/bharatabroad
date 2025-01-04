import React from "react";
import TechNavBar from "../../Components/TechNavBar/TechNavBar";
import TechHome from "./TechHome";
import Ai from "./Ai";
import Ml from "./Ml";
import Vr from "./Vr";
import { Outlet, Route, Routes } from "react-router-dom";

const Technology = () => {
  return (
    <div>
      <TechNavBar />
      <Routes>
        {/* Default route for tech */}
        <Route index element={<TechHome />} />
        {/* technology route for tech */}
        <Route path="technology/*" element={<TechHome />} />
        <Route path="artificial-intelligence" element={<Ai />} />
        <Route path="machine-learning" element={<Ml />} />
        <Route path="virtual-reality" element={<Vr />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Technology;
