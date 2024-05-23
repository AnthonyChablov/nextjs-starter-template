import HeaderText from "@/components/Headers/HeaderText";
import { render, screen } from "@testing-library/react";

describe("HeaderText", () => {
  it("should render the component and with props", () => {
    render(<HeaderText text="Header" mode="h1" />);
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Header");
  });

  it("should render the correct header tag based on the mode prop", () => {
    render(<HeaderText text="Header" mode="h1" />);
    let header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe("H1");

    render(<HeaderText text="Header" mode="h2" />);
    header = screen.getByRole("heading", { level: 2 });
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe("H2");

    render(<HeaderText text="Header" mode="h3" />);
    header = screen.getByRole("heading", { level: 3 });
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe("H3");

    render(<HeaderText text="Header" mode="h4" />);
    header = screen.getByRole("heading", { level: 4 });
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe("H4");
  });

  it("should use default props when no mode is provided", () => {
    render(<HeaderText text="Default Header" />);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe("H1");
    expect(header).toHaveClass("text-2xl");
  });

  it("should apply custom class names", () => {
    render(<HeaderText text="Custom Class" className="custom-class" />);
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("custom-class");
  });

  it("should render children correctly", () => {
    render(
      <HeaderText text="Parent Header">
        <span>Child Content</span>
      </HeaderText>
    );
    const header = screen.getByRole("heading");
    const childContent = screen.getByText("Child Content");
    expect(header).toBeInTheDocument();
    expect(childContent).toBeInTheDocument();
  });

  it("should combine mode class and custom class names correctly", () => {
    render(
      <HeaderText text="Combined Classes" mode="h3" className="custom-class" />
    );
    const header = screen.getByRole("heading", { level: 3 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("text-lg");
    expect(header).toHaveClass("custom-class");
  });
});
