import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Toast from "./Toast";

describe("Toast notification Component", () => {
  it("renders message correctly", () => {
    const onCloseMock = vi.fn();
    render(
      <Toast
        message="Test message"
        type="success"
        id="temp-id"
        onClose={onCloseMock}
        toastShowTime={3000}
      />
    );
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  it("should have correct bg color class for success", () => {
    const onCloseMock = vi.fn();
    const { container } = render(
      <Toast
        message="Success"
        type="success"
        id="temp-id"
        onClose={onCloseMock}
        toastShowTime={3000}
      />
    );
    expect(container.firstChild).toHaveClass("bg-green");
  });

  it("should have correct bg color class for error", () => {
    const onCloseMock = vi.fn();
    const { container } = render(
      <Toast
        message="Error"
        type="error"
        id="temp-id"
        onClose={onCloseMock}
        toastShowTime={3000}
      />
    );
    expect(container.firstChild).toHaveClass("bg-red");
  });

  it("should have correct bg color class for info", () => {
    const onCloseMock = vi.fn();
    const { container } = render(
      <Toast
        message="Info"
        type="info"
        id="temp-id"
        onClose={onCloseMock}
        toastShowTime={3000}
      />
    );
    expect(container.firstChild).toHaveClass("bg-blue");
  });

  it("calls onClose when close button is clicked", () => {
    const onCloseMock = vi.fn();
    render(
      <Toast
        message="Test"
        type="success"
        onClose={onCloseMock}
        id="temp-id"
        toastShowTime={3000}
      />
    );

    fireEvent.click(screen.getByText("X"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
