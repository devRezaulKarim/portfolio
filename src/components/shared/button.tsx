import type { ButtonHTMLAttributes, ElementType } from "react";
import { cn } from "../../lib/utls";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ElementType;
  iconClass?: string;
}

export const Button = ({
  text = "Button",
  icon: Icon,
  className,
  iconClass,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex cursor-pointer items-center justify-center gap-x-2 rounded-lg px-4 py-2 text-sm font-semibold capitalize transition-all duration-200 hover:scale-95 sm:w-fit sm:text-base md:text-lg lg:text-xl",
        className,
      )}
      {...props}
    >
      {Icon && (
        <Icon
          className={cn("h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6", iconClass)}
        />
      )}
      <span> {text}</span>
    </button>
  );
};
