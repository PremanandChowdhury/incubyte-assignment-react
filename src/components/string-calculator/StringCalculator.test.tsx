import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "./StringCalculator";

describe("String Calculator Component", () => {
  it("renders component elements", () => {
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

  it("calculates the sum with comma separated numbers", () => {
    render(<StringCalculator />);

    fireEvent.change(screen.getByTestId("input-field"), {
      target: {
        value: "1, 2, 3",
      },
    });
    fireEvent.click(screen.getByTestId("calculate-button"));
    expect(screen.getByTestId("result")).toHaveTextContent("6");
  });

  it("handle new line as delimeter", () => {
    render(<StringCalculator />);

    fireEvent.change(screen.getByTestId("input-field"), {
      target: {
        value: "1\n2,3",
      },
    });
    fireEvent.click(screen.getByTestId("calculate-button"));
    expect(screen.getByTestId("result")).toHaveTextContent("6");
  });

});
