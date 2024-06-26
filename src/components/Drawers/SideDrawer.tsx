"use client";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { ReactNode } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import Icons from "../Common/Icons";
import ClickeableButton from "../Buttons/ClickeableButton";

interface SideDrawerProps {
  children?: ReactNode;
  onOpen?: boolean;
  toggleDrawer?: () => void;
}

const SideDrawer = ({ children, onOpen, toggleDrawer }: SideDrawerProps) => {
  const [toggleSideDrawer, setToggleSideDrawer] = useState(false);

  const windowWidth = useWindowWidth();
  const drawerWidth = windowWidth <= 500 ? "100%" : "70%";

  return (
    <>
      {/* Button That Triggers Drawer */}
      <ClickeableButton
        isIconOnly
        variant="ghost"
        className="outline-none text-right w-fit border-0 p-2 md:hidden"
        onClick={() => setToggleSideDrawer(!toggleSideDrawer)}
        aria-label="Open"
      >
        <Icons size={40} color="black" type="menu" />
      </ClickeableButton>
      <Drawer
        anchor="right"
        role="presentation"
        open={toggleSideDrawer}
        onClose={setToggleSideDrawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "100vw", // Adjust width as needed
            maxWidth: "400px", // Example maximum width
          },
          padding: "4",
        }}
      >
        <div className=" w-full flex items-end justify-end px-4 py-7 ">
          <ClickeableButton
            isIconOnly
            onClick={() => {
              setToggleSideDrawer(!toggleSideDrawer);
            }}
            variant="ghost"
            className=" outline-none text-right w-fit border-0 p-2"
            aria-label="Close"
          >
            <Icons type="close" size={40} color="black" />
          </ClickeableButton>
        </div>
        <div className="w-9/12 mx-auto">{children}</div>
      </Drawer>
    </>
  );
};

export default SideDrawer;
