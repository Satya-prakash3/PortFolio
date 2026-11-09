import React from "react";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

export default function Projects({ projects, profile }) {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-white/[0.07] py-12">
      <SectionHeading eyebrow="Independent work" title="Selected projects" subtitle="A few repositories to explore. Open each project for its source code, documentation, and implementation details." />
      <div className="grid gap-3 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="flex flex-col rounded-xl border border-white/[0.08] bg-[#0c1522]/85 p-5 transition hover:-translate-y-0.5 hover:border-teal-300/25">
            <p className="text-[10px] font-semibold tracking-[0.15em] text-slate-400">{project.kind}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{project.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
            <a href={project.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-xs font-semibold text-teal-300 hover:text-teal-200">View repository <span className="ml-1">↗</span></a>
          </article>
        ))}
      </div>
      <a href={profile.github} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-xs text-slate-400 hover:text-white">Explore all GitHub repositories ↗</a>
    </section>
  );
}
