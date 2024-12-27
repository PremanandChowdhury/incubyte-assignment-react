import React, { useState } from "react";
import "../../index.css";

const StringCalculator: React.FC = () => {
  const [inputString, setInputString] = useState<string>("");
  const [result, setResult] = useState<number | string | null>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(event.target.value);
  };

  const handleCalculate = () => {
    const sum = add(inputString);
    setResult(sum || 0);
  };

  const add = (input: string): number | string => {
    let sum = 0;
    const negativeNumbers: number[] = [];

    const nums = input.replace(/\\n/g, ",").replace(/\n/g, ",").split(",");
    console.log("nums", nums);

    sum = nums
      .filter((num) => num.trim() !== "")
      .reduce((acc, num) => {
        const parsedNum = parseInt(num.trim(), 10);
        if (parsedNum < 0) {
          negativeNumbers.push(parsedNum);
        }

        return acc + parsedNum;
      }, 0);

    if (negativeNumbers.length > 0) {
      return "negative numbers not allowed: " + negativeNumbers.join(", ");
    }

    return sum;
  };

  return (
    <div className="input-container" data-testid="input-container">
      <label htmlFor="input-field" data-testid="input-label">
        Enter input string
      </label>
      <input
        type="text"
        data-testid="input-field"
        placeholder="e.g., 1,2,3 or //;\n1;2"
        value={inputString}
        onChange={handleChange}
      />
      <button
        id="calculate"
        type="button"
        data-testid="calculate-button"
        onClick={handleCalculate}
      >
        Calculate
      </button>

      <div data-testid="result" className="result">
        {result && `${result}`}
      </div>
    </div>
  );
};

export default StringCalculator;
