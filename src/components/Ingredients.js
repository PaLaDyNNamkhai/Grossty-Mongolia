import { Card, CardBody, Container, SectionTitle } from "./UI";

export default function Ingredients() {
  return (
    <section id="ingredients" className="section">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle title="Powered by Authentic Batana Oil" />
            <p className="mt-3 text-neutral-600">
              Our batana oil is responsibly sourced and cold-pressed to preserve nutrients—oleic acid, antioxidants, and natural emollients that help reduce breakage, dryness, and dullness.
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="p-3 rounded-2xl bg-white shadow-sm border border-brand-100">No Sulfates</li>
              <li className="p-3 rounded-2xl bg-white shadow-sm border border-brand-100">No Silicones</li>
              <li className="p-3 rounded-2xl bg-white shadow-sm border border-brand-100">Vegan & Cruelty-Free</li>
              <li className="p-3 rounded-2xl bg-white shadow-sm border border-brand-100">Dermatologist Tested</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src="/product1.jpg" alt="Batana Oil Ingredients" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}