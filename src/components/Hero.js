import { Button, Container } from "./UI";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.25),transparent_60%)]" />
      <Container className="py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Nourish. Restore. <span className="bg-gradient-to-r from-brand-200 via-brand-400 to-brand-600 bg-clip-text text-transparent">GLOW</span>.
          </h1>
          <p className="mt-4 text-neutral-600 max-w-xl">
            Meet batana-powered care crafted for Mongolia’s climate—dry winters, windy springs, and sun-heavy summers. Stronger roots, smoother lengths, real shine.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button>Shop Bestsellers</Button>
            <Button variant="outline">Learn More</Button>
          </div>
          <div className="mt-6 text-sm text-neutral-600">
            ⭐⭐⭐⭐⭐ <span>4.9/5 from 1,200+ Mongolian customers</span>
          </div>
        </div>
        <div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/hero.jpg"
              alt="Grossty Batana Oil Hair Care"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Featured: Batana Oil Elixir</p>
                <p className="font-semibold">Strength • Shine • Repair</p>
              </div>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}