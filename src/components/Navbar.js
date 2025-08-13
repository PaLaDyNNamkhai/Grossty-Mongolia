import { Button, Container } from "./UI";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#products", label: "Products" },
    { href: "#benefits", label: "Benefits" },
    { href: "#ingredients", label: "Ingredients" },
    { href: "#howto", label: "How to Use" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? "bg-white/90 backdrop-blur border-b border-brand-100 shadow" : "bg-transparent"
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="Grossty" className="w-9 h-9 rounded-2xl object-cover" />
            <div>
              <p className="font-bold text-lg leading-tight">Grossty Mongolia</p>
              <p className="text-xs text-neutral-500 -mt-1">Pure Batana Oil</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="relative group">
                <span className="transition-colors group-hover:text-brand-700">{l.label}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-brand-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
          <Button className="hidden sm:inline-flex shadow hover:shadow-md">Shop</Button>
        </div>
      </Container>
    </header>
  );
}
