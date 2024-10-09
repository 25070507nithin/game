import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function GameOver() {
  const navigate = useNavigate();
  const playerName = localStorage.getItem("playerName")
  const handleRestart = () => {
    navigate("/"); // Go back to the QR code page
  };

  return (
    <div>
      <h2>❌ Game Over! You answered incorrectly {playerName}. ❌</h2>
      <button onClick={handleRestart}>Try Again</button>
    </div>
  );
}

export default GameOver;
