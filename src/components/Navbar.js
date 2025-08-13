import { Button, Container } from "./UI";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-brand-100">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Grossty" className="w-9 h-9 rounded-2xl object-cover" />
            <div>
              <p className="font-bold text-lg leading-tight">Grossty Mongolia</p>
              <p className="text-xs text-neutral-500 -mt-1">Pure Batana Oil Hair Care</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-brand-600">Products</a>
            <a href="#benefits" className="hover:text-brand-600">Benefits</a>
            <a href="#ingredients" className="hover:text-brand-600">Ingredients</a>
            <a href="#howto" className="hover:text-brand-600">How to Use</a>
            <a href="#faq" className="hover:text-brand-600">FAQ</a>
            <a href="#contact" className="hover:text-brand-600">Contact</a>
          </nav>
          <Button className="hidden sm:inline-flex">Shop</Button>
        </div>
      </Container>
    </header>
  );
}