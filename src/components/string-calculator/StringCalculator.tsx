import React, { useState } from "react";
import "../../index.css";

const StringCalculator: React.FC = () => {
  const [inputString, setInputString] = useState<string>("");
  const [result, setResult] = useState<number | string | null>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(event.target.value);
  };

  const handleCalculate = () => {
    const sum = calculateSum(inputString);
    setResult(sum || 0);
  };

  const calculateSum = (input: string) => {
    try {
      if (input.trim() === "") return 0;

      const delimeter = ",";
      const numbers = input.split(delimeter);
      return numbers.reduce((acc, num) => acc + parseInt(num), 0);
      
    } catch (error) {
      return (error as Error).message || "Error occurred while calculating sum";
    }
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
        {result && `Result: ${result}`}
      </div>
    </div>
  );
};

export default StringCalculator;
