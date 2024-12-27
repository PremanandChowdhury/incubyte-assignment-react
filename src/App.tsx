import React from "react";
import StringCalculator from "./components/string-calculator/StringCalculator";

const App: React.FC = () => {
  return (
    <div>
      <h1 data-testid="title" className="title">String Calculator</h1>
      <StringCalculator />
    </div>
  );
};

export default App;
