import React from "react";
import { useNavigate } from "react-router-dom";

function GameOver() {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/"); // Go back to the QR code page
  };

  return (
    <div>
      <h2>❌ Game Over! You answered incorrectly. ❌</h2>
      <button onClick={handleRestart}>Try Again</button>
    </div>
  );
}

export default GameOver;
