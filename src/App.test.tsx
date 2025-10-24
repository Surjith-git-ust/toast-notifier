import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./App";
import { describe, it, vi, afterEach, expect } from "vitest";

describe("App", () => {
  afterEach(() => {
    vi.useRealTimers();
  });
  it("renders the App component", () => {
    render(<App />);
  });
  it("renders all toast buttons", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(4);
  });
  it("shows a toast when a button is clicked and hides it when clicking the x button", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /show error toast/i });
    fireEvent.click(button);

    expect(screen.getByText(/This is a error message/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText("X"));

    await waitFor(() => {
      expect(
        screen.queryByText(/This is a error message/i)
      ).not.toBeInTheDocument();
    });
  });
});
