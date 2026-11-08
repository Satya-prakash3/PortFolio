import React from "react";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

export default function Experience({ work }) {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-white/[0.07] py-12">
      <SectionHeading eyebrow="Selected experience" title="Platforms I've helped build" subtitle="Two substantial in-house platforms form the core of my professional backend experience." />
      <div className="grid gap-4 xl:grid-cols-2">
        {work.map((item) => (
          <article key={item.number} className="rounded-2xl border border-white/[0.09] bg-[#0c1522]/85 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-teal-300">{item.eyebrow}</p>
              <span className="font-mono text-xs text-slate-600">{item.number}</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.summary}</p>
            <ul className="mt-5 space-y-3">
              {item.outcomes.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="mt-0.5 text-teal-300">↳</span><span>{point}</span></li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">{item.stack.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
