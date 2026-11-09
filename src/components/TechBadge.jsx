import React, { useState, useRef, useEffect } from "react";

export default function TechBadge({ name, definition }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const id = `tech-tooltip-${name.replace(/\s+/g, "-").toLowerCase()}`;

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!definition) {
    return (
      <span className="rounded-md border border-white/[0.09] bg-white/[0.035] px-2.5 py-1 text-[11px] text-slate-300">
        {name}
      </span>
    );
  }

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        aria-describedby={open ? id : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        className="rounded-md border border-white/[0.09] bg-white/[0.035] px-2.5 py-1 text-[11px] text-slate-300 transition hover:border-teal-300/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/40"
      >
        {name}
      </button>
      {open && (
        <div
          id={id}
          role="tooltip"
          className="absolute z-30 mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-lg border border-white/[0.12] bg-[#0b1320] p-3 text-left shadow-xl"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <p className="text-[10px] font-semibold tracking-wider text-teal-300 uppercase">What is it</p>
          <p className="mt-1 text-xs leading-5 text-slate-300">{definition.what}</p>
          <p className="mt-3 text-[10px] font-semibold tracking-wider text-teal-300 uppercase">How I used it</p>
          <p className="mt-1 text-xs leading-5 text-slate-300">{definition.how}</p>
        </div>
      )}
    </div>
  );
}
