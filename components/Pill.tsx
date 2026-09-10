type PillProps = {
  href: string;
  children: React.ReactNode;
  solid?: boolean;
  external?: boolean;
};

export default function Pill({ href, children, solid, external }: PillProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full border px-[18px] py-2.5 text-[0.88rem] font-semibold no-underline transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const variant = solid
    ? "border-accent bg-accent text-paper hover:opacity-90"
    : "border-line bg-surface hover:border-accent";

  return (
    <a
      href={href}
      className={`${base} ${variant}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
