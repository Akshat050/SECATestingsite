const notes = [
  {
    label: "FIELD NOTE 01",
    title: "The first version is being shaped around real notice rooms.",
    body: "Not a persona deck. Actual practitioners showed us the Excel tabs, WhatsApp chains, missed portal trails, and reply drafts they live with.",
  },
  {
    label: "FIELD NOTE 02",
    title: "The product has to earn trust line by line.",
    body: "That is why the interface keeps showing the section, rule, judgment, trigger date, and status beside the conclusion.",
  },
  {
    label: "FIELD NOTE 03",
    title: "The professional remains the author.",
    body: "SECA can find a procedural defect. It should never pretend to replace the judgement that decides whether to plead it.",
  },
];

export function FieldNotes() {
  return (
    <section className="border-t border-[var(--hairline)] bg-[var(--paper)]">
      <div className="container-seca grid gap-0 border-x border-[var(--hairline)] md:grid-cols-[1.08fr_0.92fr_1fr]">
        {notes.map((note, index) => (
          <article
            key={note.label}
            className="min-h-[260px] border-b border-[var(--hairline)] p-6 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <p className="font-mono text-[12.5px] tracking-[0.08em] text-[var(--blue-deep)]">
              {note.label}
            </p>
            <h2
              className={
                index === 0
                  ? "mt-8 font-serif text-[28px] leading-[1.15]"
                  : "mt-12 font-serif text-[22px] leading-[1.2]"
              }
            >
              {note.title}
            </h2>
            <p className="mt-5 text-[14.5px] leading-[1.65] text-[var(--muted)]">
              {note.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
