import ClickeableButton from "@/components/Buttons/ClickeableButton";
import { getByRole, render, screen } from "@testing-library/react";

describe("ClickeableButton", () => {
  it("should render the button with text and apply text size and apply correct variant", () => {
    render(<ClickeableButton text="Click me" textSize="sm" variant="solid" />);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("text-sm");
  });
});
