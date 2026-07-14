"use client";

import { useState } from "react";

// Replace FORM_ENDPOINT with the real Formspree endpoint before launch.
const FORM_ENDPOINT = "FORM_ENDPOINT";

export function AccessForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-[14px] border border-[var(--hairline-strong)] bg-[var(--card)] p-6">
        <p className="font-serif text-[22px] text-[var(--ink)]">
          You’re on the list. We’ll write to you when the beta opens.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-[14px] border border-[var(--hairline-strong)] bg-[var(--card)] p-5"
      action={FORM_ENDPOINT}
      method="POST"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <Field label="Your name" name="name" type="text" />
      <Field label="Work email" name="email" type="email" />
      <Select
        label="You are"
        name="role"
        options={[
          "CA firm partner / proprietor",
          "GST practitioner / consultant",
          "Tax advocate / litigation team",
          "Other",
        ]}
      />
      <Select
        label="GST notices handled per month"
        name="notices"
        options={["0–2", "3–10", "11–30", "30+"]}
      />
      <Select
        label="How do you track deadlines today?"
        name="tracking"
        options={[
          "Excel or Google Sheets",
          "Diary or wall calendar",
          "Practice management software",
          "Memory and WhatsApp",
        ]}
      />
      <button className="seca-button seca-button-primary mt-5 w-full" type="submit">
        Request early access
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: string;
}) {
  return (
    <label className="mt-4 block first:mt-0">
      <span className="font-mono text-[12.5px] text-[var(--faint)]">{label}</span>
      <input
        required
        name={name}
        type={type}
        className="mt-2 h-11 w-full rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--paper)] px-3 text-[14.5px] text-[var(--ink)]"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="mt-4 block">
      <span className="font-mono text-[12.5px] text-[var(--faint)]">{label}</span>
      <select
        required
        name={name}
        className="mt-2 h-11 w-full rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--paper)] px-3 text-[14.5px] text-[var(--ink)]"
        defaultValue=""
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
