import React, { useState } from "react";
import "./index.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const buttonClick = (value) => {
    if (value === "=") {
      calculations();
    } else if (value === "C") {
      clearInput();
    } else if (value === "X") {
      backspace();
    } else if (value === "+/-") {
      changeSign();
    } else if (value === "%") {
      calculatePercentage();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(0);
  };

  const backspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const changeSign = () => {
    setInput((prevInput) => {
      if (prevInput.startsWith("-")) {
        return prevInput.substring(1);
      } else {
        return "-" + prevInput;
      }
    });
  };

  const calculatePercentage = () => {
    setInput((prevInput) => {
      if (prevInput.endsWith("/")) {
        return prevInput.substring(0, prevInput.length - 1) + "/";
      }
      return (prevInput / 100).toString();
    });
  };

  const calculations = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="output">

          <p>
            <textarea
              name="input"
              id="input"
              cols="3"
              rows="2"
              value={input}
            ></textarea>
          </p>
          <p>
            <textarea
              name="result"
              id="result"
              cols="3"
              rows="2"
              value={result}
            ></textarea>
          </p>

        </div>
        <div className="buttons">
          <div className="squareContainer">
            <button onClick={() => buttonClick("C")}>C</button>
            <button onClick={() => buttonClick("X")}>X</button>
            <button onClick={() => buttonClick("%")}>%</button>
            <button onClick={() => buttonClick("/")}>/</button>
          </div>

          <button onClick={() => buttonClick("7")}>7</button>
          <button onClick={() => buttonClick("8")}>8</button>
          <button onClick={() => buttonClick("9")}>9</button>
          <button onClick={() => buttonClick("*")}>*</button>
          <button onClick={() => buttonClick("4")}>4</button>
          <button onClick={() => buttonClick("5")}>5</button>
          <button onClick={() => buttonClick("6")}>6</button>
          <button onClick={() => buttonClick("-")}>-</button>
          <button onClick={() => buttonClick("1")}>1</button>
          <button onClick={() => buttonClick("2")}>2</button>
          <button onClick={() => buttonClick("3")}>3</button>
          <button onClick={() => buttonClick("+")}>+</button>
          
          <button onClick={() => buttonClick("+/-")}>+/-</button>
          <button onClick={() => buttonClick("0")}>0</button>
          <button onClick={() => buttonClick(".")}>.</button>
          <button onClick={() => buttonClick("=")} className="equalButton">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
