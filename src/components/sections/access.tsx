import { Kicker, SectionShell } from "@/components/ui/section-shell";
import { AccessForm } from "./access-form";

const faqs = [
  [
    "Is SECA a legal research database?",
    "No. Taxmann and the bare act remain your library. SECA is the workflow layer — notices, defects, grounds, deadlines, and matters — that no library gives you.",
  ],
  [
    "Does it draft replies automatically?",
    "It assembles the grounds you approve into a reply skeleton with citations placed. You remain the author of every submission.",
  ],
  [
    "What does it cost?",
    "Nothing during beta. Early members help set fair pricing for small firms before launch.",
  ],
  [
    "Is client data safe?",
    "Notices you upload are encrypted, never used to train public models, and deletable on request. A full security note ships with the beta agreement.",
  ],
];

export function Access() {
  return (
    <SectionShell id="access">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Kicker>WHERE WE ARE</Kicker>
          <h2 className="text-[28px] md:text-[38px]">
            Building the MVP with a small group of founding firms
          </h2>
          <p className="mt-5 text-[16px] leading-[1.65] text-[var(--muted)]">
            SECA is in active development, shaped by field research with practicing
            professionals. We’re onboarding a limited set of firms who handle notices
            regularly — free during beta, direct input into what gets built, and
            founding pricing at launch. Two minutes to apply.
          </p>
          <div className="mt-8 divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-4">
                <summary className="cursor-pointer list-none font-serif text-[18px] font-semibold text-[var(--ink)]">
                  <span className="inline-block pr-6">{question}</span>
                  <span className="font-mono text-[var(--statute-blue)] group-open:hidden">
                    +
                  </span>
                  <span className="hidden font-mono text-[var(--statute-blue)] group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-3 max-w-[720px] text-[14.5px] leading-[1.65] text-[var(--muted)]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
        <AccessForm />
      </div>
    </SectionShell>
  );
}
