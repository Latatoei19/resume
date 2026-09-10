const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#honors", label: "Honors & Awards" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[920px] items-center justify-between px-7 py-4">
        <a href="#top" className="font-display text-xl font-bold no-underline">
          SP.
        </a>
        <ul className="hidden gap-x-[22px] sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.85rem] text-ink-soft no-underline transition hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-[0.85rem] font-semibold text-accent no-underline sm:hidden"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
