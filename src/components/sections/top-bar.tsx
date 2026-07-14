export function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--ink)]/95 backdrop-blur-sm">
      <div className="container-seca flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" aria-label="SECA home">
          <span className="flex size-[30px] items-center justify-center rounded-[8px] bg-[var(--paper)] font-serif text-[22px] font-semibold leading-none text-[var(--statute-blue)]">
            S
          </span>
          <span className="font-mono text-[14.5px] font-medium tracking-[0.08em] text-[var(--paper)]">
            SECA
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-[14.5px] text-white/62 min-[760px]:flex">
          <a className="hover:text-white" href="#what">
            What is SECA
          </a>
          <a className="hover:text-white" href="#who">
            Who it’s for
          </a>
          <a className="hover:text-white" href="#how">
            How it works
          </a>
        </nav>
        <a className="seca-button border-white/18 bg-white text-[var(--ink)] hover:bg-[var(--hairline)]" href="#access">
          Request early access
        </a>
      </div>
    </header>
  );
}
