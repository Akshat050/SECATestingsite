import { cn } from "@/lib/utils";

export function CitationChip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("citation-chip", className)}>{children}</span>;
}
