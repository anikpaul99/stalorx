"use client";

export default function SectionPremium({
  children,
  className = "",
  id,
  noPadding = false,
}) {
  return (
    <section
      id={id}
      className={`
        relative z-10
        ${noPadding ? "" : "py-16 sm:py-24 lg:py-32"}
        px-4 sm:px-6 lg:px-8
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
