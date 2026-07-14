import { Kicker, SectionShell } from "@/components/ui/section-shell";

const quotes = [
  {
    tag: "the procedural gap",
    quote:
      "All those notices you are receiving where DRC-01A is not there — you can take that pleading in your submissions.",
    caption:
      "Skipping the pre-intimation raises minimum penalty from 15% to 25%. Catching it is worth real money.",
  },
  {
    tag: "the limitation trap",
    quote:
      "You cannot come forward and argue that since my rectification was pending, I have not filed the appeal.",
    caption:
      "The appeal clock runs from the original order date. A pending rectification does not pause it.",
  },
  {
    tag: "the opaque system",
    quote:
      "What they have resolved, what they have done, nobody knows — but it is resolved.",
    caption:
      "Practitioners live inside black-box systems. SECA is built to be the opposite.",
  },
];

export function Why() {
  return (
    <SectionShell>
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Kicker>WHY IT MATTERS</Kicker>
          <h2 className="text-[28px] md:text-[38px]">
            The department’s mistakes are your client’s money
          </h2>
        </div>
        <p className="text-[16px] text-[var(--muted)]">
          We built SECA by studying how GST practitioners actually work — conference
          sessions, live matters, portal battles. Three patterns came up again and
          again.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {quotes.map((item) => (
          <article
            key={item.tag}
            className="rounded-[14px] border border-[var(--hairline)] bg-[var(--card)] p-5"
          >
            <p className="font-mono text-[12.5px] font-medium text-[var(--stamp-red)]">
              {item.tag}
            </p>
            <blockquote className="mt-4 font-serif text-[22px] italic leading-[1.35] text-[var(--ink)]">
              “{item.quote}”
            </blockquote>
            <p className="mt-5 text-[14.5px] leading-[1.65] text-[var(--muted)]">
              {item.caption}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
