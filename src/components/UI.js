export function Container({ children, className = "" }) {
  return <div className={`container-xl ${className}`}>{children}</div>;
}

export function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "btn ";
  const styles = variant === "primary" ? "btn-primary" : "btn-outline";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
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

export function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-neutral-600 mt-1">{subtitle}</p>}
    </div>
  );
}