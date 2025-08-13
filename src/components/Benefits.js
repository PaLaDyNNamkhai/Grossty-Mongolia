import { Card, CardBody, Container, SectionTitle } from "./UI";
import { Sparkles, Leaf, HeartPulse, Recycle } from "lucide-react";

const benefits = [
  { title: "Shine & Smoothness", text: "Seals the cuticle to reduce frizz and boost natural gloss.", Icon: Sparkles },
  { title: "Clean Ingredients", text: "No sulfates, silicones, or mineral oil. Cruelty-free.", Icon: Leaf },
  { title: "Scalp Support", text: "Nourishes dry scalp and supports a growth-friendly environment.", Icon: HeartPulse },
  { title: "Sustainable", text: "Responsibly sourced batana oil & recyclable packaging.", Icon: Recycle },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section">
      <Container>
        <SectionTitle title="Why Grossty" subtitle="High-performance formulas, consciously crafted for Mongolian conditions." />
        <div className="grid md:grid-cols-4 gap-5">
          {benefits.map(({ title, text, Icon }, i) => (
            <Card key={i} className="bg-gradient-to-b from-white to-brand-50/40">
              <CardBody>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-brand-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-neutral-600 mt-1">{text}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
