import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const questionsList = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the largest planet?", answer: "Jupiter" },
  { question: "What is 5 + 5?", answer: "10" },
  { question: "Who wrote 'Hamlet'?", answer: "Shakespeare" },
  { question: "What is the smallest prime number?", answer: "2" },
];

function QuestionPage() {
  const { id } = useParams(); // Get the question index from the URL
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // Ensure id is treated as an integer for accessing the questionsList
  const currentQuestionIndex = parseInt(id, 10);
  const currentQuestion = questionsList[currentQuestionIndex];

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    
    // Reset the input field after submission
    setAnswer("");

    if (answer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      // If the answer is correct, move to the next question if there are any left
      if (currentQuestionIndex + 1 < questionsList.length) {
        navigate(`/question/${currentQuestionIndex + 1}`);
      } else {
        // No more questions, show congratulations and reset the game
        alert("Congratulations! You've answered all questions correctly!");
        navigate("/"); // Go back to QR code page or reset
      }
    } else {
      // If the answer is wrong, navigate to game over page
      navigate("/game-over");
    }
  };

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.question}</p>
      <form onSubmit={handleAnswerSubmit}>
        <input
          type="text"
          placeholder="Your Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
}

export default QuestionPage;
