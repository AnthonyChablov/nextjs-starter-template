import ClickeableButton from "@/components/Buttons/ClickeableButton";
import { getByRole, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { fireEvent } from "@testing-library/react";

describe("ClickeableButton", () => {
  it("should render the button with text and apply text size.", () => {
    render(<ClickeableButton text="Click me" textSize="sm" variant="solid" />);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("text-sm");
  });

  it("should call the onClick function when clicked", () => {
    const handleClick = vi.fn();
    render(
      <ClickeableButton
        text="Click me"
        textSize="md"
        variant="solid"
        onClick={handleClick}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when isDisabled is true", () => {
    render(
      <ClickeableButton
        text="Click me"
        textSize="md"
        variant="solid"
        isDisabled={true}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("should show loading when isLoading is true", () => {
    render(
      <ClickeableButton
        text="Click me"
        textSize="md"
        variant="solid"
        isLoading={true}
      />
    );
    const button = screen.getByRole("button");
  });
});
