import React from "react";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

export default function Security({ caseStudies, showAllCases, setShowAllCases }) {
  const visibleCases = showAllCases ? caseStudies : caseStudies.slice(0, 4);
  return (
    <section id="security" className="scroll-mt-24 border-t border-white/[0.07] py-12">
      <SectionHeading eyebrow="Engineering case studies" title="Security, integrity & workflow design" subtitle="Examples of practical backend problem-solving. Sensitive platform names and implementation details are intentionally generalized." />
      <div className="grid gap-3 lg:grid-cols-2">
        {visibleCases.map((item, index) => (
          <article key={item.title} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] font-semibold tracking-[0.17em] text-teal-300">{item.category}</span>
              <span className="font-mono text-[10px] text-slate-600">CASE 0{index + 1}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
            <div className="mt-4 rounded-lg border border-teal-300/10 bg-teal-300/[0.04] px-3 py-2">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">Contribution</p>
              <p className="mt-1 text-xs text-teal-100">{item.impact}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">{item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
          </article>
        ))}
      </div>
      <button onClick={() => setShowAllCases(!showAllCases)} className="mt-5 rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-slate-300 hover:border-teal-300/30 hover:text-teal-200">{showAllCases ? "Show fewer case studies" : "View all case studies"} <span className="ml-1">{showAllCases ? "↑" : "↓"}</span></button>
    </section>
  );
}
