export function Container({ children, className = "" }) {
  return <div className={`container-xl ${className}`}>{children}</div>;
}

export function Button({ children, variant = "primary", className = "", ...props }) {
  const styles = {
    primary: "btn btn-primary",
    outline: "btn btn-outline",
    ghost: "btn btn-ghost",
  }[variant] || "btn btn-primary";
  return (
    <button className={`${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function CardBody({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function SectionTitle({ title, subtitle, align = "center" }) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="h-title text-3xl md:text-4xl font-extrabold">{title}</h2>
      {subtitle && <p className="h-subtle mt-2 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

export function Badge({ children }) {
  return (
    <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-brand-500 text-white shadow">
      {children}
    </span>
  );
}
