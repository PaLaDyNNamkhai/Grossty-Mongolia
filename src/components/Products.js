import { Card, CardBody, Container, SectionTitle } from "./UI";

const benefits = [
  { title: "Shine & Smoothness", text: "Seals the cuticle to reduce frizz and boost natural gloss." },
  { title: "Clean Ingredients", text: "No sulfates, silicones, or mineral oil. Cruelty-free formulas." },
  { title: "Scalp Support", text: "Nourishes dry scalp and supports a healthy growth environment." },
  { title: "Sustainable", text: "Responsibly sourced batana oil & recyclable packaging." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section bg-white">
      <Container>
        <div className="grid md:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <Card key={i}>
              <CardBody>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="text-sm text-neutral-600 mt-1">{b.text}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}