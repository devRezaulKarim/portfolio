import { cn } from "@/lib/utils";

export function ProfileItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-4 font-mono text-sm", className)}
      {...props}
    />
  );
}

export function ProfileItemIcon({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-muted-foreground/15 dark:ring-edge ring-border ring-offset-background flex size-6 shrink-0 items-center justify-center border bg-[#ff5200]/20 ring-1 ring-offset-1 dark:bg-[#ff5200]/10",
        "[&_svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

export function ProfileItemContent({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("text-balance", className)} {...props} />;
}

export function ProfileItemLink({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn("underline-offset-4 hover:underline", className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}
