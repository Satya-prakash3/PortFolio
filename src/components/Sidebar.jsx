import React from "react";

export default function Sidebar({ profile, navigation, active, goTo }) {
  return (
    <aside className="sticky top-0 hidden h-screen w-[258px] shrink-0 border-r border-white/[0.07] bg-[#0a111d]/85 px-5 py-7 backdrop-blur-xl lg:flex lg:flex-col">
      <a href="#overview" onClick={(e) => { e.preventDefault(); goTo("overview"); }} className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-teal-300/20 bg-teal-300/10">
          <img
            src={`${import.meta.env.BASE_URL}favicon.svg`}
            alt="Satyaprakash Sethy"
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Satyaprakash Sethy</p>
          <p className="mt-0.5 text-[11px] text-slate-500">Backend Engineering</p>
        </div>
      </a>

      <div className="mt-12">
        <p className="mb-3 px-3 text-[10px] font-semibold tracking-[0.2em] text-slate-600">WORKSPACE</p>
        <nav className="space-y-1">
          {navigation.map(([id, label, icon]) => (
            <button key={id} onClick={() => goTo(id)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${active === id ? "bg-teal-300/10 text-teal-200 ring-1 ring-inset ring-teal-300/15" : "text-slate-400 hover:bg-white/[0.04] hover:text-white"}`}>
              <span className="w-5 text-center text-base">{icon}</span>{label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-teal-300" />
          <span className="text-xs font-medium text-slate-200">Open to opportunities</span>
        </div>
        <p className="mt-2 text-xs leading-5 text-slate-500">Backend engineering · Application security · Secure systems</p>
        <a href={`mailto:${profile.email}`} className="mt-4 inline-flex text-xs font-medium text-teal-300 hover:text-teal-200">Get in touch <span className="ml-1">↗</span></a>
      </div>
    </aside>
  );
}
