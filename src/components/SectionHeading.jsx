export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-7">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-teal-300 uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white">{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{subtitle}</p>}
    </div>
  );
}
