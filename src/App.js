import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ParentPage from "./components/ParentPage";
import HomePage from "./components/HomePage";
import Event from "./Event";
import Placementlogo from "./Placementlogo";
import AchievementsCarousel from "./AchievementsCarousel";
import "./index.css";
import IT from "./components/departments/itdep/it"; // Correct path to IT component
import Facility from "./components/departments/itdep/facility_lib"; // Correct path to Facility component
import High from "./components/departments/itdep/ithigh"
export default function App() {
  const location = useLocation(); // Get the current route path
  return (
    <>
      <Navbar /> {/* Include Navbar on all pages */}
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Route for Parent Page */}
        <Route path="/parent" element={<ParentPage />} />
        <Route path="/departments/itdep/it" element={<IT />} />
        <Route path="/departments/itdep/facility_lib" element={<Facility />} />
        <Route path="/departments/itdep/ithigh" element={<High />} />
      </Routes>

      {/* Show Event and Placementlogo only on HomePage */}
      {location.pathname === "/" && (
        <>
          <AchievementsCarousel />
          <Event />
          <Placementlogo />
        </>
      )}
    </>
  );
}
