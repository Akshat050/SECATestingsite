"use client";

import { useEffect, useMemo, useState } from "react";
import { CitationChip } from "@/components/ui/citation-chip";
import { Kicker, SectionShell } from "@/components/ui/section-shell";

const findings = [
  {
    kind: "✕ DEFECT",
    tone: "red",
    title: "DRC-01A pre-intimation not issued",
    body: "SCN issued directly, denying the 15% penalty settlement option — minimum exposure rises to 25%.",
    chips: ["rule 142(1A) r/w s.74(5)", "Nazir Ahmed v. Emperor (PC 1936)"],
    status: "Issue status: pending before Supreme Court — ground worth preserving",
  },
  {
    kind: "✕ DEFECT",
    tone: "red",
    title: "Not served on the common portal",
    body: "Served by email only; the electronic chain — reply, order, DRC-07, appeal — requires portal service.",
    chips: ["rule 142(1)", "s.169"],
    status: "pending before Bombay, Gujarat and Delhi HC · stay granted",
  },
  {
    kind: "! CONTESTABLE",
    tone: "amber",
    title: "Interest computed without loss to revenue",
    body: "Credit balance exceeded the liability for the period — the compensatory basis for interest is absent.",
    chips: [
      "s.50(3)",
      "Sanskar Ceramics (Guj HC)",
      "rule 88B proviso — clarificatory, retrospective",
    ],
  },
];

const compliant = [
  "DIN present",
  "Within limitation — computed from original order date",
  "s.75(12) not invocable — no admitted 3B liability",
];

export function AuditDemo() {
  const [running, setRunning] = useState(false);
  const [visible, setVisible] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!running) return;
    if (reducedMotion) {
      const timer = window.setTimeout(() => setVisible(4), 0);
      return () => window.clearTimeout(timer);
    }
    const timers = [1, 2, 3, 4].map((count) =>
      window.setTimeout(() => setVisible(count), count * 900),
    );
    return () => timers.forEach(window.clearTimeout);
  }, [running, reducedMotion]);

  const complete = visible >= 4;
  const metrics = useMemo(
    () => [
      ["2", "defects", "var(--stamp-red)", "var(--red-tint)"],
      ["1", "contestable", "var(--amber)", "var(--amber-tint)"],
      ["3", "compliant", "var(--ledger-green)", "var(--green-tint)"],
    ],
    [],
  );

  return (
    <SectionShell id="demo">
      <Kicker>SEE IT WORK</Kicker>
      <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <h2 className="text-[28px] md:text-[38px]">Watch a notice get audited</h2>
        <p className="text-[16px] text-[var(--muted)]">
          This is a sample matter with real procedural issues. Run the audit yourself.
        </p>
      </div>
      <div className="mt-10 rounded-[14px] border border-[var(--hairline-strong)] bg-[var(--card)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--hairline)] px-5 py-4">
          <div>
            <p className="font-mono text-[13px] text-[var(--ink)]">
              Notice desk · Matter #SC-042
            </p>
            <p className="text-[13px] text-[var(--faint)]">
              Sample matter — try the audit yourself
            </p>
          </div>
          <span className="rounded-[8px] bg-[var(--red-tint)] px-3 py-1 font-mono text-[12.5px] font-medium text-[var(--stamp-red)]">
            Reply due in 6 days
          </span>
        </div>
        <div className="grid gap-6 p-5 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="text-[22px]">Show cause notice — DRC-01 under s.74</h3>
            <p className="mt-3 max-w-[680px] text-[14.5px] text-[var(--muted)]">
              M/s Shree Traders · FY 2019–20 · ITC mismatch (2A vs 3B) ·{" "}
              <span className="font-mono font-tabular text-[var(--ink)]">₹18,40,000</span>
            </p>
            <p className="mt-2 text-[14.5px] text-[var(--faint)]">
              Received 29 Jun 2026 by email · uploaded from PDF.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {metrics.map(([value, label, color, bg]) => (
              <div
                key={label}
                aria-hidden={!complete}
                className="min-h-[80px] rounded-[10px] border border-[var(--hairline)] p-3"
                style={{
                  background: complete ? bg : "transparent",
                  color: complete ? color : "var(--faint)",
                  opacity: complete ? 1 : 0.35,
                }}
              >
                <p className="font-mono text-[28px] font-medium leading-none font-tabular">
                  {complete ? value : "—"}
                </p>
                <p className="mt-2 text-[12.5px] leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-y border-[var(--hairline)] px-5 py-4">
          <button
            type="button"
            className="seca-button seca-button-primary"
            onClick={() => {
              setVisible(0);
              setRunning(true);
              setVisible(reducedMotion ? 4 : 0);
            }}
            disabled={complete}
          >
            {complete ? "Audit complete" : "Run procedural audit"}
          </button>
          <span className="ml-3 align-middle text-[13px] text-[var(--faint)]" aria-live="polite">
            {complete
              ? "2 defects worth pleading. This took four seconds, not four hours."
              : "9 checks · takes about four seconds"}
          </span>
        </div>
        <div className="space-y-3 p-5">
          {findings.map((finding, index) => (
            <article
              key={finding.title}
              className="rounded-[12px] border border-[var(--hairline)] p-4 transition-all duration-[900ms]"
              style={{
                opacity: visible > index ? 1 : 0,
                transform:
                  visible > index || reducedMotion ? "translateY(0)" : "translateY(6px)",
                display: visible > index || running ? "block" : "none",
              }}
            >
              <p
                className="font-mono text-[12.5px] font-medium tracking-[0.08em]"
                style={{
                  color:
                    finding.tone === "red" ? "var(--stamp-red)" : "var(--amber)",
                }}
              >
                {finding.kind}
              </p>
              <h3 className="mt-2 text-[18px]">{finding.title}</h3>
              <p className="mt-2 text-[14.5px] text-[var(--muted)]">{finding.body}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {finding.chips.map((chip) => (
                  <CitationChip key={chip}>{chip}</CitationChip>
                ))}
              </div>
              {finding.status ? (
                <p className="mt-3 font-mono text-[12.5px] text-[var(--faint)]">
                  {finding.status}
                </p>
              ) : null}
            </article>
          ))}
          <div
            className="flex flex-wrap gap-2 transition-opacity duration-[900ms]"
            style={{ opacity: complete ? 1 : 0, display: running ? "flex" : "none" }}
          >
            {compliant.map((item) => (
              <span
                key={item}
                className="rounded-[8px] bg-[var(--green-tint)] px-3 py-1 font-mono text-[12.5px] text-[var(--ledger-green)]"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--hairline)] px-5 py-4">
          <p className="text-[13px] text-[var(--faint)]">
            Every flag cites its source · full audit trail exportable to your working
            papers
          </p>
          <a className="seca-button seca-button-ghost" href="#access">
            Do this to my notices
          </a>
        </div>
      </div>
      <p className="mt-4 text-[14.5px] text-[var(--muted)]">
        This is what SECA does to every notice you upload — before you draft a single
        line of reply.
      </p>
    </SectionShell>
  );
}
