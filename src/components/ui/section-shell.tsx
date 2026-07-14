import { cn } from "@/lib/utils";

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[12.5px] font-medium tracking-[0.08em] text-[var(--blue-deep)]">
      {children}
    </p>
  );
}

export function SectionShell({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("border-t border-[var(--hairline)] py-16 md:py-24", className)}
    >
      <div className="container-seca">{children}</div>
    </section>
  );
}
