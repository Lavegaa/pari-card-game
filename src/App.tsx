import React from "react";
import { Route, Routes } from "react-router-dom";
import SettingPage from "./pages/SettingPage";
import GamePage from "./pages/GamePage";
import "./assets/style/font.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SettingPage />} />
      <Route path="game/:stage" element={<GamePage />} />
    </Routes>
  );
}

export default App;
