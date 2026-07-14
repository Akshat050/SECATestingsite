import { Kicker, SectionShell } from "@/components/ui/section-shell";

const isItems = [
  "A procedural audit of every notice, with citations for every flag",
  "A limitation engine computed from the correct trigger dates",
  "A grounds bank tracking pending issues across forums",
  "A portfolio view of every matter in the firm",
];

const notItems = [
  "Not a legal research database — it works alongside yours",
  "Not legal advice — the professional judgement stays yours",
  "Not an auto-drafter — it assembles grounds you approve",
  "Not a black box — every claim answers “why” with a source",
];

export function WhatIsSeca() {
  return (
    <SectionShell id="what">
      <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <Kicker>WHAT IS SECA</Kicker>
          <h2 className="text-[28px] md:text-[38px]">
            The workflow layer for your notice practice
          </h2>
        </div>
        <p className="text-[16px] leading-[1.65] text-[var(--muted)]">
          GST notices are rising, and the department’s own procedural mistakes
          routinely go unnoticed — mistakes that decide matters and change penalties.
          SECA is software that runs the discipline no one has time for: it reads
          every notice you upload, audits it against the procedure laid down in law,
          tracks every limitation date across the firm, and preserves every ground
          you plead. It sits on top of the law you already know — Taxmann and the
          bare act remain your library; SECA is the practice around them.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <ListCard title="What SECA is:" items={isItems} mark="✓" tone="green" />
        <ListCard title="What SECA is not:" items={notItems} mark="✕" tone="red" />
      </div>
    </SectionShell>
  );
}

function ListCard({
  title,
  items,
  mark,
  tone,
}: {
  title: string;
  items: string[];
  mark: string;
  tone: "green" | "red";
}) {
  return (
    <div className="rounded-[14px] border border-[var(--hairline)] bg-[var(--card)] p-6">
      <h3 className="text-[22px]">{title}</h3>
      <ul className="mt-5 space-y-4 text-[14.5px] leading-[1.65] text-[var(--muted)]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              className={
                tone === "green"
                  ? "font-mono text-[var(--ledger-green)]"
                  : "font-mono text-[var(--stamp-red)]"
              }
            >
              {mark}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
