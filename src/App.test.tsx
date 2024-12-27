import {render, screen} from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders App component", () => {
    render(<App />);

    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("String Calculator");
  })
})
