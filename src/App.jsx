import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Speaker from "./pages/Speaker";
import Schedule from "./pages/Schedule";
import Sponser from "./pages/Sponser";
import ConatctPage from "./pages/ConatctPage";
import NavbarTicketButton from "./components/NavbarTicketButton";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sponser" element={<Sponser />} />
        <Route path="/contact" element={<ConatctPage />} />
        <Route path="/ticket-buy" element={<NavbarTicketButton />} />
      </Routes>
    </div>
  );
}

export default App;
