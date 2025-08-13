// Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold tracking-wide">Grossty</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-amber-600 transition">Products</li>
          <li className="hover:text-amber-600 transition">Benefits</li>
          <li className="hover:text-amber-600 transition">Ingredients</li>
          <li className="hover:text-amber-600 transition">How to Use</li>
          <li className="hover:text-amber-600 transition">FAQ</li>
          <li className="hover:text-amber-600 transition">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

// Hero.jsx
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-20">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Nourish. Restore. GLOW.
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Meet batana-powered care crafted for Mongolia’s climate—dry winters, windy springs,
          and sun-heavy summers. Stronger roots, smoother lengths, real shine.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full shadow-lg transition">
            Shop
          </button>
          <button className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-full transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
