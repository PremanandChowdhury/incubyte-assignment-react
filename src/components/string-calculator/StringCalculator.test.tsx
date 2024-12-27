import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "./StringCalculator";

describe("String Calculator Component", () => {
  it("renders required elements", () => {
    render(<StringCalculator />);

    const divContainerElement = screen.getByTestId("input-container");
    const labelElement = screen.getByTestId("input-label");
    const inputElement = screen.getByTestId("input-field");
    const buttonElement = screen.getByTestId("calculate-button");
    const resultElement = screen.getByTestId("result");

    expect(divContainerElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent("Enter input string");
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(resultElement).toBeInTheDocument();
  });

  it("results 0 when input is empty", () => {
    render(<StringCalculator />);

    fireEvent.click(screen.getByTestId("calculate-button"));
    expect(screen.getByTestId("result")).toHaveTextContent("0");
  });
});
