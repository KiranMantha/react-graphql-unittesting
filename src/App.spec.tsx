import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should renders learn react link", () => {
    render(<App />);
    const loaderElement = screen.getByTestId("loading");
    expect(loaderElement).toBeInTheDocument();
  });
});
