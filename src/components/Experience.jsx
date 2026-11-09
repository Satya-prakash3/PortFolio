import React from "react";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

export default function Experience({ work }) {
  const isSso = (title) => /Single Sign-On/i.test(title);

  return (
    <section id="experience" className="scroll-mt-24 border-t border-white/[0.07] py-12">
      <SectionHeading eyebrow="Selected experience" title="Platforms I've helped build" subtitle="Two substantial in-house platforms form the core of my professional backend experience." />
      <div className="grid gap-4 xl:grid-cols-2">
        {work.map((item) => (
          <article key={item.number} className="rounded-2xl border border-white/[0.09] bg-[#0c1522]/85 p-5 sm:p-6 transition hover:border-teal-300/20 hover:shadow-[0_0_20px_rgba(20,184,166,0.08)]">
            <div className="flex items-start justify-between gap-3">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-teal-300">{item.eyebrow}</p>
              <span className="font-mono text-xs text-slate-400">{item.number}</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.summary}</p>
            <ul className="mt-5 space-y-3">
              {item.outcomes.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="mt-0.5 text-teal-300">↳</span><span>{point}</span></li>
              ))}
            </ul>
            {isSso(item.title) && (
              <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#0a111d]/70 p-4">
                <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-3">Architecture overview</p>
                <div className="overflow-x-auto">
                  <svg viewBox="0 0 640 140" className="h-32 w-full text-slate-500" aria-hidden="true">
                    <defs>
                      <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="currentColor" />
                      </marker>
                    </defs>
                    {[
                      { x: 40, y: 70, label: "User" },
                      { x: 140, y: 70, label: "Product" },
                      { x: 260, y: 70, label: "Centralized SSO" },
                      { x: 400, y: 70, label: "Keycloak" },
                      { x: 520, y: 70, label: "Token Validation" },
                      { x: 620, y: 70, label: "Backend APIs" },
                    ].map((node, i) => (
                      <g key={node.label}>
                        <rect x={node.x-50} y={50} width="100" height="40" rx="8" fill="#0f172a" stroke="currentColor" strokeOpacity="0.3" />
                        <text x={node.x} y="75" textAnchor="middle" fontSize="10" fill="currentColor">{node.label}</text>
                        {i < 5 && <line x1={node.x+50} y1="70" x2={node.x+50+40} y2="70" stroke="currentColor" strokeOpacity="0.3" markerEnd="url(#arrow)" />}
                      </g>
                    ))}
                    <g>
                      <rect x="520" y="110" width="100" height="20" rx="6" fill="#0f172a" stroke="currentColor" strokeOpacity="0.3" />
                      <text x="570" y="122" textAnchor="middle" fontSize="9" fill="currentColor">DB / Redis / Tasks</text>
                    </g>
                  </svg>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">{item.stack.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                <p className="mt-3 text-[10px] leading-4 text-slate-400 break-words">User → Product → Centralized SSO → Keycloak → Token Validation → Protected Backend APIs → Database / Redis / Background Tasks</p>
              </div>
            )}
            {!isSso(item.title) && (
              <div className="mt-6 flex flex-wrap gap-2">{item.stack.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
