import React from "react";
import { Button } from "@nextui-org/button";
import ParagraphText from "../Text/ParagraphText";
import { cn } from "@/lib/utils";

interface ClickeableButtonProps {
  text?: string;
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
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
  className?: string;
}

const ClickeableButton = ({
  text,
  textSize = undefined,
  variant = undefined,
  onClick,
  children = <></>,
  isDisabled = false,
  isLoading = false,
  isIconOnly = false,
  className = "",
}: ClickeableButtonProps) => {
  return (
    <Button
      variant={variant}
      isLoading={isLoading}
      onClick={onClick}
      isDisabled={isDisabled}
      isIconOnly={isIconOnly}
      className={cn(`flex ${className}`)}
    >
      {text && <ParagraphText text={text} mode={textSize} />}
      {children}
    </Button>
  );
};

export default ClickeableButton;
