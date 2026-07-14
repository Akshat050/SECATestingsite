import { Kicker, SectionShell } from "@/components/ui/section-shell";

const cards = [
  {
    audience: "Small CA firms",
    pain: "notices tracked in Excel, WhatsApp, and memory — and one missed date is a time-barred appeal.",
    help: "SECA gives a 1–10 person firm the notice desk of a large practice: every matter, defect, and deadline in one view, so nothing depends on someone remembering.",
    payoff: "→ run litigation-grade practice without a litigation team",
  },
  {
    audience: "GST practitioners & consultants",
    pain: "clients forward notices at the last minute, and every reply starts from a blank page.",
    help: "Upload the notice, get the defect report in seconds, and turn found defects into pleading grounds — with the citation already attached.",
    payoff: "→ from notice to reply skeleton in one sitting",
  },
  {
    audience: "Tax advocates & litigation teams",
    pain: "fifty similar matters across forums, and grounds preserved today that pay off only when a pending judgment lands.",
    help: "The grounds bank maps pending issues across courts and alerts you the day one is decided — showing every matter of yours that pleaded it.",
    payoff: "→ plead now, get alerted when it wins",
  },
];

export function Who() {
  return (
    <SectionShell id="who">
      <Kicker>WHO IT’S FOR</Kicker>
      <h2 className="max-w-[760px] text-[28px] md:text-[38px]">
        Built for the professionals who live with notices.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <article
            key={card.audience}
            className="rounded-[14px] border border-[var(--hairline)] bg-[var(--card)] p-5"
          >
            <h3 className="text-[22px]">{card.audience}</h3>
            <p className="mt-5 text-[14.5px] leading-[1.65]">
              <span className="font-medium text-[var(--stamp-red)]">The pain:</span>{" "}
              <span className="text-[var(--muted)]">{card.pain}</span>
            </p>
            <p className="mt-4 text-[14.5px] leading-[1.65] text-[var(--muted)]">
              {card.help}
            </p>
            <p className="mt-6 border-t border-[var(--hairline)] pt-3 font-mono text-[12.5px] text-[var(--blue-deep)]">
              {card.payoff}
            </p>
            {index === 1 ? (
              <p className="mt-3 font-mono text-[12px] text-[var(--faint)]">
                defect report · grounds · citation attached
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
