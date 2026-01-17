export default function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`
      bg-gradient-to-br from-slate-800/50 to-slate-900/50 
      backdrop-blur-sm border border-purple-500/20 
      rounded-2xl sm:rounded-3xl p-6 sm:p-8
      ${hover ? "card-hover hover:border-purple-500/50" : ""}
      ${className}
    `}
    >
      {children}
    </div>
  );
}
