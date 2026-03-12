import { cn } from "@/lib/utils";

export const SectionHeader = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  return (
    <h2 className={cn("my-4 border-y px-4 text-3xl font-semibold", className)}>
      {children}
    </h2>
  );
};
