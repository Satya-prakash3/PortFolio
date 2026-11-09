import React from "react";

export default function Overview({ profile, metrics, goTo }) {
  return (
    <section id="overview" className="scroll-mt-24 pb-12 pt-10 sm:pt-14">
      <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
        <span className="rounded-full border border-teal-300/20 bg-teal-300/[0.07] px-3 py-1 text-teal-200">PROFESSIONAL PROFILE</span>
        <span className="hidden sm:inline">●</span>
        <span className="hidden sm:inline">{profile.location}</span>
        <span className="ml-auto hidden items-center gap-2 sm:flex">
          <span className="h-2 w-2 rounded-full bg-teal-300" aria-hidden="true" />
          <span className="text-slate-400">Open to opportunities</span>
        </span>
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
        <div>
          <p className="text-sm font-medium text-teal-300">Hello, I'm {profile.name}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[3.7rem]">{profile.headline || profile.positioning}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-[15px]">{profile.subheadline || profile.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={() => goTo("projects")} className="rounded-lg bg-teal-300 px-4 py-2.5 text-sm font-semibold text-[#07111a] transition hover:bg-teal-200">View Projects <span className="ml-1">↘</span></button>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/[0.04]">Download Resume</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-teal-300/30 hover:text-white">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-teal-300/30 hover:text-white">LinkedIn ↗</a>
          </div>
        </div>
        <div className="rounded-2xl border border-white/[0.09] bg-[#0d1725]/90 p-5">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-400">ENGINEERING FOCUS</p>
          <div className="mt-4 space-y-3">
            {profile.engineeringFocus.map((item, i) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-teal-300/10 font-mono text-[10px] text-teal-200">0{i + 1}</span>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-5 pt-5 border-t border-white/[0.06]">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-400">AVAILABILITY</p>
            <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              Open to backend engineering, security and system architecture roles
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
        {metrics.map((m) => (
          <article key={m.label} className="group rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5 transition hover:border-white/[0.14] hover:bg-white/[0.04]">
            <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{m.value}</p>
            <p className="mt-2 text-xs font-medium leading-5 text-slate-200">{m.label}</p>
            <p className="mt-1 text-[11px] leading-4 text-slate-400">{m.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
