import React from "react";

export default function Contact({ profile, year }) {
  return (
    <>
      <section id="contact" className="scroll-mt-24 border-t border-white/[0.07] py-12">
        <div className="rounded-2xl border border-teal-300/15 bg-gradient-to-br from-teal-300/[0.08] to-transparent p-6 sm:p-9">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-teal-300">LET'S CONNECT</p>
          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">Building something that needs a strong backend?</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">I'm interested in backend engineering, secure systems, and application security opportunities.</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a href={`mailto:${profile.email}`} className="rounded-lg bg-teal-300 px-4 py-2.5 text-center text-xs font-semibold text-[#07111a] hover:bg-teal-200">
                Email me ↗
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-white/[0.05]">
                LinkedIn ↗
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-white/[0.05]">
                GitHub ↗
              </a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-white/[0.05]">
                Resume ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-2 border-t border-white/[0.07] py-6 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} {profile.name}. Built around engineering work and real outcomes.</span>
        <span>{profile.location} · {profile.role}</span>
      </footer>
    </>
  );
}
