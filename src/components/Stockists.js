import { Card, CardBody, Container, SectionTitle } from "./UI";

export default function Stockists() {
  return (
    <section className="section bg-gradient-to-tr from-brand-100 via-brand-50 to-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle title="Find Us in Ulaanbaatar" />
            <ul className="mt-4 space-y-3 text-sm">
              <li className="p-4 rounded-2xl bg-white border border-brand-100 shadow-sm">State Department Store – Level 1, Beauty Hall</li>
              <li className="p-4 rounded-2xl bg-white border border-brand-100 shadow-sm">Shangri-La Mall – Kiosk B12</li>
              <li className="p-4 rounded-2xl bg-white border border-brand-100 shadow-sm">Emart Khan-Uul – Aisle 7 (Haircare)</li>
            </ul>
          </div>
          <Card>
            <CardBody>
              <h3 className="text-xl font-semibold">Join the Grossty Community</h3>
              <p className="text-sm text-neutral-600 mt-2">Be first to know about restocks, limited drops, and care tips for Mongolia’s seasons.</p>
              <form className="mt-4 flex gap-2" onSubmit={(e)=> e.preventDefault()}>
                <input type="email" required placeholder="Your email" className="w-full rounded-2xl border border-brand-200 px-3 py-2" />
                <button className="btn btn-primary">Subscribe</button>
              </form>
              <div className="mt-4 text-sm text-neutral-600">Instagram: @grossty.mn • Facebook: /grossty.mn</div>
            </CardBody>
          </Card>
        </div>
      </Container>
    </section>
  );
}