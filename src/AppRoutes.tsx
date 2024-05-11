import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kurs from "./pages/Kurs";
import Info from "./pages/Info";
import Turer from "./pages/Turer";
import Utstyr from "./pages/Utstyr";
import Vilkaar from "./pages/Vilkaar";
import TourDetailPage from "./pages/TourDetailPage";
import Error from "./components/Error";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/kurs" element={<Kurs />} />
      <Route path="/turer" element={<Turer/>} />
      <Route path="/turer/:tourId" element={<TourDetailPage/>}/>
      <Route path="/utstyr" element={<Utstyr />} />
      <Route path="/vilkaar" element={<Vilkaar />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;
