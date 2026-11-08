import React from "react";

export default function Overview({ profile, metrics, goTo }) {
  return (
    <section id="overview" className="scroll-mt-24 pb-12 pt-10 sm:pt-14">
      <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
        <span className="rounded-full border border-teal-300/20 bg-teal-300/[0.07] px-3 py-1 text-teal-200">PROFESSIONAL PROFILE</span>
        <span>● {profile.location}</span>
      </div>
      <div className="mt-6 grid gap-8 xl:grid-cols-[minmax(0,1fr)_300px] xl:items-end">
        <div>
          <p className="text-sm font-medium text-teal-300">Hello, I'm {profile.name}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[3.7rem]">{profile.positioning}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">{profile.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={() => goTo("experience")} className="rounded-lg bg-teal-300 px-4 py-2.5 text-sm font-semibold text-[#07111a] transition hover:bg-teal-200">Explore my work <span className="ml-1">↘</span></button>
            <a href={`mailto:${profile.email}`} className="rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/[0.04]">Contact me</a>
          </div>
        </div>
        <div className="rounded-2xl border border-white/[0.09] bg-[#0d1725]/90 p-5">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500">ENGINEERING FOCUS</p>
          <div className="mt-4 space-y-3">
            {profile.engineeringFocus.map((item, i) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-teal-300/10 font-mono text-[10px] text-teal-200">0{i + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 xl:grid-cols-4">
        {metrics.map((m) => (
          <article key={m.label} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
            <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{m.value}</p>
            <p className="mt-2 text-xs font-medium leading-5 text-slate-300">{m.label}</p>
            <p className="mt-1 text-[10px] leading-4 text-slate-600">{m.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
