import { Access } from "@/components/sections/access";
import { AuditDemo } from "@/components/sections/audit-demo";
import { Building } from "@/components/sections/building";
import { FieldNotes } from "@/components/sections/field-notes";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TopBar } from "@/components/sections/top-bar";
import { WhatIsSeca } from "@/components/sections/what-is-seca";
import { Who } from "@/components/sections/who";
import { Why } from "@/components/sections/why";
import { MotionFooter } from "@/components/ui/motion-footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[8px] focus:bg-[var(--card)] focus:px-4 focus:py-2 focus:text-[var(--statute-blue)]"
      >
        Skip to content
      </a>
      <div className="relative z-10 bg-[var(--paper)]">
        <TopBar />
        <main id="main">
          <Hero />
          <FieldNotes />
          <WhatIsSeca />
          <AuditDemo />
          <Who />
          <Why />
          <Building />
          <HowItWorks />
          <Access />
        </main>
      </div>
      <MotionFooter />
    </>
  );
}
