import { Kicker, SectionShell } from "@/components/ui/section-shell";

const capabilities = [
  {
    title: "Notice auditor",
    body: "Upload a notice PDF. Get a defect report — pre-intimation, service mode, DIN, limitation, jurisdiction — where every flag cites the rule behind it.",
    badge: "in build · MVP",
    tone: "amber",
  },
  {
    title: "Limitation engine",
    body: "Deadlines computed from the correct trigger — the original order date, not the rectification — with countdowns across every matter in the firm.",
    badge: "in build · MVP",
    tone: "amber",
  },
  {
    title: "Grounds bank",
    body: "A living map of pending issues across forums. Preserve the ground in today’s reply; get alerted the day the judgment you were waiting for lands.",
    badge: "designing with early members",
    tone: "blue",
  },
  {
    title: "Matter portfolio",
    body: "Fifty similar matters, one view. Group by issue, ground, and forum — so a favorable ruling updates every matter that pleaded it.",
    badge: "designing with early members",
    tone: "blue",
  },
];

export function Building() {
  return (
    <SectionShell id="building">
      <Kicker>WHAT WE’RE BUILDING</Kicker>
      <h2 className="text-[28px] md:text-[38px]">Four capabilities, one discipline.</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {capabilities.map((item) => (
          <article
            key={item.title}
            className="rounded-[14px] border border-[var(--hairline)] bg-[var(--card)] p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-[22px]">{item.title}</h3>
              <span
                className="rounded-[8px] px-3 py-1 font-mono text-[12.5px]"
                style={{
                  background:
                    item.tone === "amber" ? "var(--amber-tint)" : "var(--blue-tint)",
                  color: item.tone === "amber" ? "var(--amber)" : "var(--blue-deep)",
                }}
              >
                {item.badge}
              </span>
            </div>
            <p className="mt-5 text-[14.5px] leading-[1.65] text-[var(--muted)]">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
