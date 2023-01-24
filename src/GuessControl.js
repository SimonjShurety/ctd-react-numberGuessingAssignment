import React, { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  };

  const checkKeyPress = (e) => {
    const { key, keyCode } = e;
    console.log(key, keyCode);
    if (keyCode === 13) {
      onSubmitGuess();
    }
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
        onKeyDown={checkKeyPress}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
};

export default GuessControl;
