import React from "react";
import { Button } from "@nextui-org/button";
import ParagraphText from "../Text/ParagraphText";

interface ClickeableButtonProps {
  text: string;
  textSize: "sm" | "md" | "lg" | "xl" | "2xl";
  onClick?: () => void;
  children?: React.ReactNode;
  variant:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  isDisabled?: boolean;
  isLoading?: boolean;
  isIconOnly?: boolean;
}

const ClickeableButton = ({
  text,
  textSize,
  variant = undefined,
  onClick,
  children,
  isDisabled = false,
  isLoading = false,
  isIconOnly = false,
}: ClickeableButtonProps) => {
  return (
    <Button
      variant={variant}
      isLoading={isLoading}
      onClick={onClick}
      isDisabled={isDisabled}
      isIconOnly={isIconOnly}
      className="flex"
    >
      <ParagraphText text={text} mode={textSize} />
      {children}
    </Button>
  );
};

export default ClickeableButton;
