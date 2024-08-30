import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders count is text", () => {
  render(<App />);
  const countIsElement = screen.getByText(/count is/i);
  expect(countIsElement).toBeInTheDocument();
});
