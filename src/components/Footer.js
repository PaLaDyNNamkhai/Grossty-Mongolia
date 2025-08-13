import { Container } from "./UI";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-200 relative">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-500 via-yellow-400 to-brand-500" />

      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Grossty" className="w-14 h-14 mb-4 rounded-xl shadow-lg" />
            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              Luxury haircare crafted with rare Batana oil, blending tradition & science for unparalleled shine and strength.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-brand-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Products", "Benefits", "Ingredients", "How to Use", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-brand-300 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stockists */}
          <div>
            <h4 className="text-lg font-semibold text-brand-400 mb-4">Stockists</h4>
            <ul className="space-y-2 text-sm">
              <li>Ulaanbaatar Central Mall</li>
              <li>State Department Store</li>
              <li>Luxury Beauty Boutique</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-brand-400 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} className="p-2 rounded-full bg-neutral-800 hover:bg-brand-500 transition">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-6 pb-4 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Grossty Mongolia. All rights reserved.  
          <span className="block mt-1 text-brand-400">Crafted with Care in Mongolia</span>
        </div>
      </Container>
    </footer>
  );
}
