import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "./pages/Home/Home.jsx"
import MapPage from "./pages/Map/MapPage.jsx";
import './App.css'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  )
}

export default App
