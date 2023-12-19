import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kontaktinfo from "./pages/Kontaktinfo";
import Kurs from "./pages/Kurs";
import Info from "./pages/Info";
//import Turer from "./pages/Turer";
import Utstyr from "./pages/Utstyr";
import Vilkaar from "./pages/Vilkaar";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/kontaktinfo" element={<Kontaktinfo />} />
      <Route path="/kurs" element={<Kurs />} />
      <Route path="/utstyr" element={<Utstyr />} />
      <Route path="/vilkaar" element={<Vilkaar />} />
      <Route
        path="*"
        element={
          <div>
            <div>Her var det ikke noe innhold! Sjekk kart og kompass</div>
          </div>
        }
      />
    </Routes>
  );
}

export default AppRoutes;