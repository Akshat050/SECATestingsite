import { CitationChip } from "@/components/ui/citation-chip";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--ink)] pt-14 pb-16 text-[var(--paper)] md:pt-24 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-16 border-t border-white/[0.06]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/10" />
      <div className="container-seca grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div className="relative z-10">
          <a
            href="#access"
            className="inline-flex items-center gap-2 rounded-[8px] border border-white/14 bg-white/[0.04] px-3 py-1.5 font-mono text-[12.5px] text-white/72 hover:bg-white/[0.08] hover:text-white"
          >
            <span className="size-1.5 rounded-full bg-[var(--ledger-green)]" />
            Building with founding GST practices →
          </a>
          <p className="mt-16 font-mono text-[12.5px] font-medium tracking-[0.08em] text-[var(--blue-tint)] md:mt-20">
            STATUTORY WORKFLOW FOR GST PRACTICE
          </p>
          <h1 className="mt-4 max-w-[820px] font-sans text-[38px] font-semibold leading-[1.08] text-[var(--paper)] md:text-[54px]">
            Every notice hides a story.{" "}
            <em className="font-serif font-normal text-[var(--blue-tint)]">
              Some hide a mistake.
            </em>
          </h1>
          <p className="mt-6 max-w-[720px] text-[18px] leading-[1.65] text-white/64">
            SECA audits every GST notice for procedural defects — a skipped{" "}
            <CitationChip>DRC-01A</CitationChip>, invalid service under{" "}
            <CitationChip>s.169</CitationChip>, a limitation clock you didn’t know was
            running — and hands you the ground to plead, with the section, rule, or
            judgment behind it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="seca-button border-[var(--statute-blue)] bg-[var(--statute-blue)] text-white hover:bg-[var(--blue-deep)]"
              href="#access"
            >
              Request early access
            </a>
            <span className="inline-flex min-h-10 items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.08] px-4 font-mono text-[13px] text-white/72">
              <span className="text-white/38">$</span> upload notice.pdf
            </span>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="grid grid-cols-2 border border-white/10 text-center font-mono text-[12px] text-white/70">
              <span className="border-r border-b border-white/10 px-3 py-2">CA</span>
              <span className="border-b border-white/10 px-3 py-2">GST</span>
              <span className="border-r border-white/10 px-3 py-2">TA</span>
              <span className="px-3 py-2">§</span>
            </div>
            <p className="max-w-[360px] text-[14.5px] leading-[1.55] text-white/54">
              Built from field research with practicing CAs and tax advocates · every
              flag cites its source
            </p>
          </div>
          <a
            className="mt-8 inline-flex font-mono text-[12.5px] text-[var(--blue-tint)] hover:text-white"
            href="#demo"
          >
            See it work ↓
          </a>
        </div>
        <HeroDeck />
      </div>
    </section>
  );
}

function HeroDeck() {
  return (
    <div className="relative z-10 min-h-[600px] lg:min-h-[640px]">
      <div className="absolute left-0 top-6 w-[56%] rounded-[14px] border border-white/12 bg-[var(--paper)] text-[var(--ink)]">
        <div className="flex items-start justify-between gap-4 border-b border-[var(--hairline)] px-5 py-4">
          <div>
            <p className="font-mono text-[12.5px] text-[var(--faint)]">
              Notice desk · Matter #SC-042
            </p>
            <h2 className="mt-2 font-serif text-[22px] leading-[1.2]">
              Show cause notice — DRC-01 under s.74
            </h2>
          </div>
          <span className="rounded-[8px] bg-[var(--red-tint)] px-2.5 py-1 font-mono text-[12px] text-[var(--stamp-red)]">
            6 days
          </span>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-4 px-5 py-5">
          <div>
            <p className="font-mono text-[12.5px] text-[var(--faint)]">Demand</p>
            <p className="mt-1 font-mono text-[24px] leading-none font-tabular">
              ₹18,40,000
            </p>
          </div>
          <div className="border-l border-[var(--hairline)] pl-4">
            <p className="font-mono text-[12.5px] text-[var(--faint)]">FY</p>
            <p className="mt-1 font-mono text-[18px] font-tabular">2019–20</p>
          </div>
        </div>
        <div className="mx-5 mb-5 border-t border-[var(--hairline)] pt-4">
          <p className="text-[14.5px] leading-[1.55] text-[var(--muted)]">
            Received by email · portal service not found · uploaded from PDF.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <CitationChip>rule 142(1)</CitationChip>
            <CitationChip>s.169</CitationChip>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-[45%] rounded-[14px] border border-white/12 bg-[#202329] p-5">
        <p className="font-mono text-[12.5px] text-[var(--blue-tint)]">
          PROCEDURAL AUDIT
        </p>
        <div className="mt-5 space-y-4">
          <FindingRow mark="01" title="Pre-intimation missing" tone="red" />
          <FindingRow mark="02" title="Email-only service" tone="red" />
          <FindingRow mark="03" title="Interest basis contestable" tone="amber" />
        </div>
      </div>
      <div className="absolute bottom-28 left-[8%] w-[44%] rounded-[14px] border border-white/12 bg-[#202329] p-5">
        <p className="font-mono text-[12.5px] text-white/44">WORKING PAPERS</p>
        <p className="mt-4 font-serif text-[22px] leading-[1.2] text-white">
          Every flag leaves a trail your team can review later.
        </p>
        <div className="mt-5 grid grid-cols-3 gap-2 font-mono text-[12px] text-white/62">
          <span className="border border-white/10 px-2 py-2">source</span>
          <span className="border border-white/10 px-2 py-2">ground</span>
          <span className="border border-white/10 px-2 py-2">status</span>
        </div>
      </div>
      <div className="absolute bottom-0 right-[5%] w-[46%] rounded-[14px] border border-white/12 bg-[var(--paper)] p-5 text-[var(--ink)]">
        <p className="font-mono text-[12.5px] text-[var(--stamp-red)]">2 DEFECTS</p>
        <h2 className="mt-3 font-serif text-[24px] leading-[1.15]">
          Procedural audit complete
        </h2>
        <p className="mt-3 text-[14.5px] leading-[1.5] text-[var(--muted)]">
          Two grounds preserved before a reply is drafted.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <CitationChip>rule 142(1A)</CitationChip>
          <CitationChip>s.169</CitationChip>
        </div>
      </div>
    </div>
  );
}

function FindingRow({
  mark,
  title,
  tone,
}: {
  mark: string;
  title: string;
  tone: "red" | "amber";
}) {
  return (
    <div className="grid grid-cols-[34px_1fr] gap-3 border-t border-white/10 pt-3">
      <span
        className="font-mono text-[12px]"
        style={{ color: tone === "red" ? "var(--stamp-red)" : "var(--amber-tint)" }}
      >
        {mark}
      </span>
      <p className="text-[14.5px] leading-[1.35] text-white/74">{title}</p>
    </div>
  );
}
