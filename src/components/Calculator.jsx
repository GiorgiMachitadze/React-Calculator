import React, { useState } from "react";
import Display from "../components/Display";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteLastChar = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const evaluateExpression = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div>
        <button className="button operator" onClick={() => clearInput()}>
          AC
        </button>
        <button className="button operator" onClick={() => deleteLastChar()}>
          DEL
        </button>
        <button
          className="button operator"
          onClick={() => handleButtonClick("%")}
        >
          %
        </button>
        <button
          className="button operator"
          onClick={() => handleButtonClick("/")}
        >
          /
        </button>
      </div>
      <div>
        <button className="button" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button className="button" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button className="button" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button
          className="button operator"
          onClick={() => handleButtonClick("*")}
        >
          *
        </button>
      </div>
      <div>
        <button className="button" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button className="button" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button className="button" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button
          className="button operator"
          onClick={() => handleButtonClick("-")}
        >
          -
        </button>
      </div>
      <div>
        <button className="button" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button className="button" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button className="button" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button
          className="button operator"
          onClick={() => handleButtonClick("+")}
        >
          +
        </button>
      </div>

      <div>
        <button className="button" onClick={() => handleButtonClick("00")}>
          00
        </button>
        <button className="button" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button className="button" onClick={() => handleButtonClick(".")}>
          .
        </button>
        <button
          className="button equalBtn"
          onClick={() => evaluateExpression()}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
