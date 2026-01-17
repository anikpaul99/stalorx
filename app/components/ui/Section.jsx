export default function Section({
  children,
  className = "",
  id,
  background = false,
}) {
  return (
    <section
      id={id}
      className={`
        py-12 sm:py-20 px-4 sm:px-6 lg:px-8
        ${background ? "bg-slate-900/50" : ""}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
