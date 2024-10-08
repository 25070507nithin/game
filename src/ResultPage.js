import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function ResultPage() {
  const navigate = useNavigate();
  const isCorrect = localStorage.getItem("correct") === "true";
  const playerName = localStorage.getItem("playerName");

  const handleNextQuestion = () => {
    navigate("/question");
  };

  return (
    <div>
      {isCorrect ? (
        <h2>🎉 Congratulations {playerName}! You answered correctly! 🎉</h2>
      ) : (
        <h2>❌ Sorry {playerName}, that's incorrect! ❌</h2>
      )}
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
}

export default ResultPage;
