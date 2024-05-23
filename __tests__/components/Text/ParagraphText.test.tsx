import { render, screen } from "@testing-library/react";
import ParagraphText from "@/components/Text/ParagraphText";

describe("ParagraphText", () => {
  it("should render the component with default props", () => {
    render(<ParagraphText text="Default mode" />);
    const paragraphText = screen.getByText("Default mode");
    expect(paragraphText).toBeInTheDocument();
    expect(paragraphText).toHaveClass("text-base");
  });

  it("should apply the correct mode", () => {
    const modes = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    };

    Object.entries(modes).forEach(([mode, expectedClass]) => {
      render(<ParagraphText text={`Mode ${mode}`} mode={mode} />);
      const paragraphText = screen.getByText(`Mode ${mode}`);
      expect(paragraphText).toHaveClass(expectedClass);
    });
  });

  it("should display the correct text in the component", () => {
    render(<ParagraphText text="This is a test text" />);
    const paragraphText = screen.getByText("This is a test text");
    expect(paragraphText).toBeInTheDocument();
  });

  it("should render children correctly", () => {
    render(
      <ParagraphText text="Parent text">
        <span>Child text</span>
      </ParagraphText>
    );
    const paragraphText = screen.getByText("Parent text");
    const childText = screen.getByText("Child text");
    expect(paragraphText).toBeInTheDocument();
    expect(childText).toBeInTheDocument();
  });

  it("should combine 'mode' and 'className' props correctly", () => {
    render(
      <ParagraphText text="Custom class" mode="lg" className="custom-class" />
    );
    const paragraphText = screen.getByText("Custom class");
    expect(paragraphText).toHaveClass("text-lg");
    expect(paragraphText).toHaveClass("custom-class");
  });
});
