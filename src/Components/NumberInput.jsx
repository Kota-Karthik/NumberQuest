const NumberInput = ({
  setInput,
  input,
  setGuessNumber,
  guessNumber,
  displayPrompt,
  setCount,
  count,
  setDisplayMessage,
  setDisplayMessageStyle,
}) => {
  const takeNumber = (event) => {
    setInput(event.target.value);
  };
  const handleClick = () => {
    if (input == null) {
      setDisplayMessageStyle("text-xl font-bold mt-[2.5rem] text-red-600");
      setDisplayMessage("Please enter a number!!!!");
    } else if (count === 0) {
      displayPrompt();

      document.getElementsByClassName(
        "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
      )[0].disabled = true;
    } else {
      setCount(count - 1);
      displayPrompt();
    }
  };
  const handleRestart = () => {
    setCount(10);
    document.getElementsByClassName(
      "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
    )[0].disabled = false;
    setInput("");
    setDisplayMessageStyle("text-xl font-bold mt-[2.5rem]");
    setDisplayMessage("Start guessing number......");
  };
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-20">
      <input
        type="number"
        onChange={takeNumber}
        value={input}
       
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
      />
      <button
        type="submit"
        onClick={handleClick}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
      >
        Guess
      </button>
      <button
        type="submit"
        onClick={handleRestart}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
      >
        Restart
      </button>
    </div>
  );
};

export default NumberInput;
