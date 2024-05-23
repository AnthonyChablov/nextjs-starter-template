import SideDrawer from "@/components/Drawers/SideDrawer";
import { getByRole, render, screen } from "@testing-library/react";

describe("SideDrawer", () => {
  it("should render in the dom when open", () => {
    const onOpen = true;
    const toggleDrawer = () => {};
    render(<SideDrawer onOpen={onOpen} toggleDrawer={toggleDrawer} />);
    const drawer = screen.getByRole("presentation");
    expect(drawer).toBeInTheDocument();
  });

  it("should not render in the DOM when closed", () => {
    const onOpen = false;
    const toggleDrawer = () => {};
    render(<SideDrawer onOpen={onOpen} toggleDrawer={toggleDrawer} />);
    const drawer = screen.queryByRole("presentation");
    expect(drawer).not.toBeInTheDocument();
  });

  it("should render children in the side drawer", () => {
    const onOpen = true;
    const toggleDrawer = () => {};
    const child = (
      <div role="child">
        <p>Child</p>
      </div>
    );
    render(
      <SideDrawer onOpen={onOpen} toggleDrawer={toggleDrawer}>
        {child}
      </SideDrawer>
    );
    const childElement = screen.getByRole("child");
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent("Child");
  });
});
