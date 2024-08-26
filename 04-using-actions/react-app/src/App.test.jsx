import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders and save to test HMR", () => {
  render(<App />);
  const linkElement = screen.getByText(/and save to test HMR/i);
  expect(linkElement).toBeInTheDocument();
});
