import { Card, CardBody, Container, SectionTitle } from "./UI";

export default function HowTo() {
  return (
    <section id="howto" className="section bg-white">
      <Container>
        <SectionTitle title="How to Use" />
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Card>
            <CardBody>
              <h3 className="font-semibold">Scalp Treatment</h3>
              <p className="text-sm text-neutral-600 mt-2">
                Part hair and apply a few drops to scalp. Massage 3–5 minutes. Leave overnight or at least 1 hour. Shampoo and condition.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-semibold">Styling Finish</h3>
              <p className="text-sm text-neutral-600 mt-2">
                Rub 1–2 drops between palms and smooth over mid-lengths to ends to reduce frizz and add shine.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="font-semibold">Weekly Mask</h3>
              <p className="text-sm text-neutral-600 mt-2">
                After shampoo, apply mask from roots to ends. Leave 10–15 minutes. Rinse thoroughly and style as usual.
              </p>
            </CardBody>
          </Card>
        </div>
      </Container>
    </section>
  );
}