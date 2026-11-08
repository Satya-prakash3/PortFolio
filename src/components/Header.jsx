import React from "react";

export default function Header({ profile, navigation, menuOpen, setMenuOpen, goTo, toggleTheme, theme }) {
  return (
    <>
      <header className="sticky top-0 z-20 -mx-4 flex items-center justify-between border-b border-white/[0.07] bg-[#080d16]/85 px-4 py-3 backdrop-blur-xl sm:-mx-7 sm:px-7 lg:-mx-10 lg:px-10">
        <div className="lg:hidden">
          <p className="text-sm font-semibold text-white">SS <span className="font-normal text-slate-500">/ Portfolio</span></p>
        </div>
        <div className="hidden text-xs text-slate-500 lg:block">PORTFOLIO <span className="mx-2 text-slate-700">/</span> ENGINEERING PROFILE</div>
        <div className="ml-auto flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:border-teal-300/30 hover:text-white">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hidden rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:border-teal-300/30 hover:text-white sm:inline-flex">LinkedIn ↗</a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="hidden rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:border-teal-300/30 hover:text-white sm:inline-flex">Resume ↗</a>
          <button onClick={toggleTheme} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:border-teal-300/30 hover:text-white" aria-label="Toggle theme" title="Toggle theme">{theme === 'dark' ? '☀️' : '🌙'}</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 lg:hidden" aria-expanded={menuOpen} aria-label="Toggle navigation">Menu</button>
        </div>
      </header>

      {menuOpen && <nav className="sticky top-[57px] z-20 grid grid-cols-2 gap-2 border-b border-white/10 bg-[#0b1320] p-3 lg:hidden">
        {navigation.map(([id, label]) => <button key={id} onClick={() => goTo(id)} className="rounded-lg bg-white/[0.04] px-3 py-2 text-left text-xs text-slate-300">{label}</button>)}
      </nav>}
    </>
  );
}
