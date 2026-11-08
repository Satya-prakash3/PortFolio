import React from "react";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

export default function Toolkit({ capabilities }) {
  return (
    <section id="toolkit" className="scroll-mt-24 border-t border-white/[0.07] py-12">
      <SectionHeading eyebrow="Technical toolkit" title="Tools I work with" subtitle="Grouped by the engineering problems they help solve, rather than a long unstructured list." />
      <div className="grid gap-3 sm:grid-cols-2">
        {capabilities.map((group) => (
          <article key={group.name} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
            <h3 className="text-sm font-semibold text-white">{group.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <Tag key={item}>{item}</Tag>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
