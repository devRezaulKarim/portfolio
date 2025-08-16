import React from "react";
import { cn } from "../../lib/utls";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as?: "input" | "textarea";
    className?: string;
  };

export const Input = ({
  as = "input",
  className = "",
  ...props
}: InputProps) => {
  const defaultClass =
    "block w-full rounded-lg border-2 px-2 py-1 text-base focus:outline-0 sm:text-lg";

  if (as === "textarea") {
    return <textarea className={cn(defaultClass, className)} {...props} />;
  }
  return <input className={cn(defaultClass, className)} {...props} />;
};
