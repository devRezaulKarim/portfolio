import { cn } from "@/lib/utils";

export const SectionHeader = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  return (
    <div className={cn("my-4 border-y px-4 text-3xl font-semibold", className)}>
      {children}
    </div>
  );
};
