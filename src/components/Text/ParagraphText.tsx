import React from "react";
import { cn } from "@/lib/utils";

interface ParagraphTextProps {
  mode?: string;
  text: string;
  className?: string;
  children?: React.ReactNode;
}

const ParagraphText = ({
  mode = "md",
  text,
  children,
  className,
}: ParagraphTextProps) => {
  let modeClass = "";

  switch (mode) {
    case "sm":
      modeClass = "text-sm";
      break;
    case "md":
      modeClass = "text-base";
      break;
    case "lg":
      modeClass = "text-lg";
      break;
    case "xl":
      modeClass = "text-xl";
      break;
    case "2xl":
      modeClass = "text-2xl";
      break;
    default:
      modeClass = "text-base"; // Default to medium size if mode is not recognized
  }

  return (
    <p className={cn(`${modeClass} ${className}`)}>
      {text} {children}
    </p>
  );
};

export default ParagraphText;
