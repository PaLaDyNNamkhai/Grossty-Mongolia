import { Container } from "./UI";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-brand-100 bg-white">
      <Container>
        <div className="py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Grossty" className="w-9 h-9 rounded-2xl object-cover" />
              <p className="font-bold">Grossty Mongolia</p>
            </div>
            <p className="mt-3 text-sm text-neutral-600 max-w-sm">
              Clean, high-performance batana oil formulas designed for Mongolia’s climate. Strong roots, shiny lengths.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3">Contact</p>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>hello@grossty.mn</li>
              <li>+976 9911 2233</li>
              <li>Sukhbaatar District, Ulaanbaatar, Mongolia</li>
              <li>Mon–Sat: 10:00–19:00</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-brand-600">Shop</a></li>
              <li><a href="#faq" className="hover:text-brand-600">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-600">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="py-6 border-t border-brand-100 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Grossty Mongolia. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}