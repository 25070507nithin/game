import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EnterName() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // Save the player's name in localStorage (or you can use global state)
      localStorage.setItem("playerName", name);
      // Navigate to the first question (id=0 for the first question)
      navigate("/question/0");
    }
  };

  return (
    <div>
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
}

export default EnterName;
