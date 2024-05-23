import { render, screen, fireEvent } from "@testing-library/react";
import ParagraphText from "@/components/Text/ParagraphText";

describe("ParagraphText", () => {
  it("should render component in the dom", () => {
    render(<ParagraphText />);
    const paragraphText = screen.getByRole("paragraph");
    expect(paragraphText).toBeInTheDocument();
  });
});
