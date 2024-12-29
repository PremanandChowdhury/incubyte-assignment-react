import React, { useState } from "react";
import "../../index.css";

const StringCalculator: React.FC = () => {
  const [inputString, setInputString] = useState<string>("");
  const [result, setResult] = useState<number | string | null>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputString(event.target.value);
  };

  const handleCalculate = () => {
    const inputValue = inputString.trim();

    try {
      const sum = add(inputValue);
      setResult(sum || 0);
    } catch (error) {
      if (error instanceof Error) {
        setResult(error.message);
      }
    }
  };

  const add = (input: string): number | string => {
    if (!input) return 0;
    input = input.replace(/\\n/g, "\n");

    let delimiter = /\n|,/; // Default delimiters: comma or newline

    if (input.startsWith("//")) {
      const match = input.match(/^\/\/(.+)\n/);
      if (match) {
        delimiter = new RegExp(match[1]);
        input = input.slice(match[0].length);
      } else {
        throw new Error("Could not parse the delimiter");
      }
    }
    const nums = input.split(delimiter).map((num) => {
      const parsedNum = parseInt(num.trim(), 10);
      if (isNaN(parsedNum)) throw new Error(`Invalid number: ${num}`);
      return parsedNum;
    });

    const negatives = nums.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
  };

  const isError =
    result && typeof result === "string" && result.includes("negative");

  return (
    <div className="input-container" data-testid="input-container">
      <label htmlFor="input-field" data-testid="input-label">
        Enter input string
      </label>
      <textarea
        style={{ width: "100%", fontSize: "1rem", padding: 0 }}
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

      <div data-testid="result" className={`result ${isError ? "error" : ""}`}>
        {result && `${result}`}
      </div>
    </div>
  );
};

export default StringCalculator;
