import Image from "next/image";
import { Button, Container, SectionTitle } from "./UI";

const products = [
  {
    id: 1,
    name: "Batana Oil Elixir",
    desc: "Cold-pressed, unrefined batana oil for growth, strength & shine.",
    price: "₮89,900",
    image: "/product1.jpg",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Restorative Shampoo",
    desc: "Sulfate-free cleanse infused with batana & botanical surfactants.",
    price: "₮59,900",
    image: "/product2.jpg",
    tag: "New"
  },
  {
    id: 3,
    name: "Deep Repair Mask",
    desc: "Weekly treatment for brittle, colored, and heat-stressed hair.",
    price: "₮69,900",
    image: "/product3.jpg",
    tag: "Limited Edition"
  },
];

export default function Products() {
  return (
    <section id="products" className="section bg-gradient-to-b from-white via-brand-50/50 to-brand-100/30">
      <Container>
        <SectionTitle 
          title="Our Signature Collection" 
          subtitle="Luxury hair care formulated with rare, nutrient-rich batana oil." 
        />

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div 
              key={p.id} 
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden border border-brand-100 hover:shadow-xl transition-all duration-500"
            >
              {/* Tag */}
              <span className="absolute top-4 left-4 bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {p.tag}
              </span>

              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={p.image} 
                  alt={p.name} 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">{p.name}</h3>
                  <p className="text-sm text-neutral-600 mt-2">{p.desc}</p>
                </div>

                {/* Price & Button */}
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-lg font-semibold text-brand-700">{p.price}</p>
                  <Button className="rounded-xl shadow-md hover:shadow-lg transition">
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-gradient-to-t from-brand-200 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
