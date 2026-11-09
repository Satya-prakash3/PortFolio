import React from "react";
import SectionHeading from "./SectionHeading";
import TechBadge from "./TechBadge";
import techDefs from "../content/techDefinitions.json";

export default function Toolkit({ capabilities }) {
  return (
    <section id="toolkit" className="scroll-mt-24 border-t border-white/[0.07] py-12">
      <SectionHeading eyebrow="Technical toolkit" title="Tools I work with" subtitle="Hover or tap a technology to see what it is and how I’ve used it in real projects." />
      <div className="grid gap-3 sm:grid-cols-2">
        {capabilities.map((group) => (
          <article key={group.name} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-teal-300/20 hover:shadow-[0_0_20px_rgba(20,184,166,0.08)]">
            <h3 className="text-sm font-semibold text-white">{group.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechBadge key={item} name={item} definition={techDefs[item]} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
