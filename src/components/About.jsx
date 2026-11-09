import React from "react";
import SectionHeading from "./SectionHeading";

export default function About({ profile }) {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/[0.07] py-12">
      <SectionHeading eyebrow="About me" title="Backend engineering with a focus on security and reliability" subtitle="A concise professional introduction focused on backend engineering, system design, API development, application security, and technical ownership." />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] items-start">
        <div className="prose prose-invert max-w-none text-sm leading-7 text-slate-300">
          <p>{profile.about || profile.summary}</p>
          <p className="mt-4">I design and build production-ready backend systems that prioritize security, performance, and maintainability. My recent work centers on identity and access management, secure API design, and scalable distributed services using Python, Django, and modern cloud-native patterns.</p>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-400">ENGINEERING PRINCIPLES</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex gap-3"><span className="text-teal-300">▸</span> Security by design, not by afterthought</li>
            <li className="flex gap-3"><span className="text-teal-300">▸</span> Clear boundaries, well-defined APIs</li>
            <li className="flex gap-3"><span className="text-teal-300">▸</span> Observability and reliable operations</li>
            <li className="flex gap-3"><span className="text-teal-300">▸</span> Pragmatic architecture over hype</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
