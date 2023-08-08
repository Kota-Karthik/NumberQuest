import { useState } from "react";

import "./App.css";
import NumberInput from "./Components/NumberInput";

function App() {
  const [input, setInput] = useState(null);
  const [guessNumber, setGuessNumber] = useState(
    Math.floor(Math.random() * 1000) + 1
  );
  const [displayMessageStyle, setDisplayMessageStyle] = useState("text-xl font-bold mt-[2.5rem]");
  const [displayMessage, setDisplayMessage] = useState("Start guessing number......");
  const [count, setCount] = useState(10);
  const displayPrompt = () => {
    if (count == 1) {
      setDisplayMessageStyle("text-xl font-bold mt-[2.5rem] text-red-600");
      setDisplayMessage("Better luck next time!!You are out of guesses");
    } else if (guessNumber < input && count) {
      setDisplayMessageStyle("text-xl font-bold mt-[2.5rem]");+
      setDisplayMessage("Number is smaller than  guessed number!!");
    } else if (guessNumber > input && count) {
      setDisplayMessageStyle("text-xl font-bold mt-[2.5rem]");
      setDisplayMessage("Number is bigger than guessed number!!");
    } else if (count) {
      setDisplayMessageStyle("text-xl font-bold mt-[2.5rem] text-green-600");
      setDisplayMessage("Congratulations!! You had guessed correct number!!");
    }
  };
  return (
    <>
      <div className="text-5xl font-extrabold ">NumberQuest</div>
      
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 mt-[20px] ">NumberQuest invites you to harness your guessing prowess as you unlock the secrets of random numbers. Will you decipher the code and unveil the hidden digit?</p>
      <p class=" mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 mt-[20px] ">Guess the number between 1 and 1000</p>
      <NumberInput
        input={input}
        setInput={setInput}
        guessNumber={guessNumber}
        setGuessNumber={setGuessNumber}
        displayPrompt={displayPrompt}
        count={count}
        setCount={setCount}
        setDisplayMessage={setDisplayMessage}
        setDisplayMessageStyle={setDisplayMessageStyle}
      />
      <div className="text-xl font-bold mt-10">No of Guesses left:{count}</div>
      <div className={displayMessageStyle}>{displayMessage}</div>
    </>
  );
}

export default App;
