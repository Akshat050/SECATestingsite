"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionFooter() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !rootRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(
        ".footer-word",
        { yPercent: 8 },
        {
          yPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        ".footer-content > *",
        { autoAlpha: 0, y: 10 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "cubic-bezier(0.2,0.6,0.2,1)",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 60%",
          },
        },
      );
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative h-screen overflow-hidden [clip-path:inset(0)]">
      <footer className="fixed inset-x-0 bottom-0 flex h-screen items-center bg-[var(--ink)] text-[var(--paper)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,var(--ink),rgba(22,24,29,0))]" />
        <p className="footer-word pointer-events-none absolute left-1/2 top-[22%] -translate-x-1/2 select-none font-serif text-[26vw] font-semibold leading-none text-transparent [-webkit-text-stroke:1px_rgba(247,246,242,0.06)]">
          SECA
        </p>
        <div className="footer-content container-seca relative z-10 flex min-h-[70vh] flex-col items-center justify-center text-center">
          <p className="font-serif text-[28px] font-semibold leading-[1.15] md:text-[34px]">
            Every flag cites its source.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              className="seca-button border-[var(--paper)] bg-[var(--paper)] text-[var(--ink)] hover:bg-[var(--hairline)]"
              href="#access"
            >
              Request early access
            </a>
            <a
              className="seca-button border-[rgba(247,246,242,0.32)] text-[var(--paper)] hover:bg-[rgba(247,246,242,0.08)]"
              href="#how"
            >
              Read how it works
            </a>
          </div>
          <div className="absolute inset-x-0 bottom-8 grid gap-4 border-t border-[rgba(247,246,242,0.16)] pt-5 font-mono text-[12.5px] leading-[1.5] text-[rgba(247,246,242,0.64)] md:grid-cols-[1fr_1.5fr_1fr] md:items-center md:text-left">
            <p>SECA — statutory workflow for GST practice</p>
            <p className="md:text-center">
              Built from field research with practicing professionals · hello@seca.in
            </p>
            <p className="md:text-right">
              <button
                type="button"
                aria-label="Back to top"
                className="inline-flex size-11 items-center justify-center rounded-full border border-[rgba(247,246,242,0.28)] text-[18px] hover:bg-[rgba(247,246,242,0.08)]"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                ↑
              </button>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
