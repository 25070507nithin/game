import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QRCodePage from "./QRCodePage";
import EnterName from "./EnterName";
import QuestionPage from "./QuestionPage";
import GameOver from "./GameOver";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodePage />} />
        <Route path="/enter-name" element={<EnterName />} />
        <Route path="/question/:id" element={<QuestionPage />} /> {/* Passing id */}
        <Route path="/game-over" element={<GameOver />} />
      </Routes>
    </Router>
  );
}

export default App;
