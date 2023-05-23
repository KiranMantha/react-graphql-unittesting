import { render, screen, waitFor } from "@testing-library/react";
import { Users } from "./Users";
import { createWrapper, mockApiResponse } from "./api/testUtils";

describe("Users", () => {
  const Component = createWrapper(<Users />);

  it("should render users component", () => {
    render(<Component />);
    expect(screen.getByTestId("users-component")).toBeInTheDocument();
  });

  it("should display user name from api", async () => {
    render(<Component />);
    await waitFor(() => {
      expect(screen.getByText(/Antonette/i)).toBeInTheDocument();
    });
  });

  it("should display api-error placeholder when api throws error", async () => {
    mockApiResponse("user", null, true);
    render(<Component />);
    await waitFor(() => {
      expect(screen.getByTestId("api-error")).toBeInTheDocument();
    });
  });
});
