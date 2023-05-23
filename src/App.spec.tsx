import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should renders learn react link", () => {
    render(<App />);
    const usersComponent = screen.getByTestId("users-component");
    expect(usersComponent).toBeInTheDocument();
  });
});
