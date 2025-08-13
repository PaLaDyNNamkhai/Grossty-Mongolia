import { Card, CardBody, Container, SectionTitle } from "./UI";

const faqs = [
  {
    q: "What is batana oil?",
    a: "Batana oil is a rich plant oil traditionally used in Central America. It's prized for supporting hair strength, shine, and moisture retention.",
  },
  {
    q: "Is it safe for colored or treated hair?",
    a: "Yes. Our silicone-free formulas help reduce dryness common with bleached or colored hair.",
  },
  {
    q: "How often should I use the Elixir?",
    a: "2–3 times per week on scalp and lengths. Adjust based on your hair’s density and dryness.",
  },
  {
    q: "Where can I buy in Mongolia?",
    a: "Order online or visit our Ulaanbaatar partners listed below. Delivery available nationwide.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section bg-white">
      <Container>
        <SectionTitle title="FAQ" />
        <div className="grid gap-4">
          {faqs.map((f, idx) => (
            <Card key={idx}>
              <CardBody>
                <h3 className="font-semibold">{f.q}</h3>
                <p className="text-sm text-neutral-700 mt-1">{f.a}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}