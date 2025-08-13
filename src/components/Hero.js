import { Button, Container } from "./UI";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.25),_transparent_60%)]" />
      <Container className="grid lg:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight h-title">
            Luxury Batana Haircare for Mongolia’s Climate
          </h1>
          <p className="mt-4 text-neutral-600 max-w-xl">
            High-potency, cold-pressed batana oil blends designed for dry winters, windy springs, and sun-heavy summers. Stronger roots. Smoother lengths. Real shine.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button className="shadow-md hover:shadow-lg">Shop Bestsellers</Button>
            <Button variant="outline">Explore Ingredients</Button>
          </div>
          <div className="mt-6 text-sm text-neutral-600">⭐️⭐️⭐️⭐️⭐️ Trusted by 1,200+ customers</div>
        </div>
        <div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-brand-100">
            <img src="/hero.jpg" alt="Grossty Batana Collection" className="w-full h-full object-cover" />
            <div className="absolute inset-x-4 bottom-4 bg-white/85 backdrop-blur rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-600">Featured</p>
                <p className="font-semibold">Batana Oil Elixir</p>
              </div>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
