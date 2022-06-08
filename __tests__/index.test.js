import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ListUsersPage from "../pages/index";

describe("ListUsersPage", () => {
  it("renders a heading", () => {
    render(<ListUsersPage />);
    expect(screen.getByTestId("list-users")).toBeInTheDocument();
  });
});
