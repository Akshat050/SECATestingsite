import { CitationChip } from "@/components/ui/citation-chip";
import { Kicker, SectionShell } from "@/components/ui/section-shell";

const steps = [
  {
    title: "Upload the notice",
    body: "Drop the PDF from email or the portal. SECA reads the form type, section invoked, period, demand, and mode of service.",
  },
  {
    title: "Review the audit",
    body: (
      <>
        Defects, contestables, and compliant checks — each with its citation, like{" "}
        <CitationChip>rule 142(1A) r/w s.74(5)</CitationChip>, and the live status
        of the issue in the courts.
      </>
    ),
  },
  {
    title: "Build the reply",
    body: "Select the grounds you want to plead. SECA assembles a reply skeleton with citations placed, logs each ground to the matter, and exports the audit trail for your working papers.",
  },
];

const trust = [
  {
    title: "Citations, not confidence scores",
    body: "Each flag names the section, rule, or judgment it rests on — verifiable against the bare act in seconds.",
  },
  {
    title: "Audit trail for working papers",
    body: "Export what was checked, what was found, and what was pleaded. Your file stands on its own in any review.",
  },
  {
    title: "You stay the author",
    body: "SECA finds defects and assembles grounds. The professional judgement — and the signature — remains yours.",
  },
];

export function HowItWorks() {
  return (
    <SectionShell id="how">
      <Kicker>HOW IT WORKS</Kicker>
      <h2 className="max-w-[820px] text-[28px] md:text-[38px]">
        From notice to reply, with the working shown.
      </h2>
      <div className="mt-10">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="grid gap-4 border-t border-[var(--hairline)] py-6 md:grid-cols-[120px_1fr]"
          >
            <p className="font-serif text-[54px] leading-none text-[var(--hairline-strong)] font-tabular">
              {index + 1}
            </p>
            <div>
              <h3 className="text-[22px]">{step.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.65] text-[var(--muted)]">
                {step.body}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {trust.map((item) => (
          <article key={item.title} className="border-t border-[var(--hairline)] pt-5">
            <p className="font-serif text-[38px] leading-none text-[var(--statute-blue)]">
              §
            </p>
            <h3 className="mt-3 text-[18px]">{item.title}</h3>
            <p className="mt-3 text-[14.5px] leading-[1.65] text-[var(--muted)]">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
