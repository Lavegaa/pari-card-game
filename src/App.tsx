import React from "react";
import { Route, Routes } from "react-router-dom";
import SettingPage from "./pages/SettingPage";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SettingPage />} />
      <Route path="game" element={<GamePage />} />
    </Routes>
  );
}

export default App;
