import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, Leaf, ShieldCheck, ArrowRight, Star, Recycle, Instagram, Facebook, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

// --- Brand Theme --- //
const brand = {
  name: "Grossty Mongolia",
  tagline: "Pure Batana Oil Hair Care",
  primary: "from-amber-400 via-amber-500 to-orange-600",
  accent: "amber-500",
  dark: "#0b0b0b",
  light: "#fff8ee",
};

const products = [
  {
    id: 1,
    name: "Batana Oil Elixir",
    desc: "Cold-pressed, unrefined batana oil for growth, strength & shine.",
    price: "₮89,900",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Restorative Shampoo",
    desc: "Sulfate-free cleanse infused with batana & botanical surfactants.",
    price: "₮59,900",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Deep Repair Mask",
    desc: "Weekly treatment for brittle, colored, and heat-stressed hair.",
    price: "₮69,900",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
  },
];

const benefits = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Shine & Smoothness",
    text: "Seals the cuticle to reduce frizz and boost natural gloss.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Clean Ingredients",
    text: "No sulfates, silicones, or mineral oil. Cruelty-free formulas.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Scalp Support",
    text: "Nourishes dry scalp and supports a healthy growth environment.",
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    title: "Sustainable",
    text: "Responsibly sourced batana oil & recyclable packaging.",
  },
];

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

export default function GrosstyHome() {
  return (
    <div className="min-h-screen w-full text-neutral-900 bg-[radial-gradient(ellipse_at_top,rgba(255,237,213,.55),transparent_60%),linear-gradient(to_bottom,#fff,#fff8ee)]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-amber-400 via-amber-500 to-orange-600 shadow" />
              <div>
                <p className="font-bold text-lg leading-tight">{brand.name}</p>
                <p className="text-xs text-neutral-500 -mt-1">{brand.tagline}</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#products" className="hover:text-amber-600">Products</a>
              <a href="#benefits" className="hover:text-amber-600">Benefits</a>
              <a href="#ingredients" className="hover:text-amber-600">Ingredients</a>
              <a href="#howto" className="hover:text-amber-600">How to Use</a>
              <a href="#faq" className="hover:text-amber-600">FAQ</a>
              <a href="#contact" className="hover:text-amber-600">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <Input placeholder="Search…" className="hidden md:block w-44" />
              <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-2xl">
                <ShoppingBag className="mr-2 h-4 w-4" /> Shop
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.25),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Nourish. Restore. <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">GLOW</span>.
            </h1>
            <p className="mt-4 text-neutral-600 max-w-xl">
              Meet batana-powered care crafted for Mongolia’s climate—dry winters, windy springs, and sun-heavy summers. Stronger roots, smoother lengths, real shine.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-amber-600 hover:bg-amber-700 rounded-2xl">
                Shop Bestsellers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-2xl border-amber-200">
                Learn More
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-neutral-600">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span>4.9/5 from 1,200+ Mongolian customers</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop"
                alt="Grossty Batana Oil Hair Care"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-600">Featured: Batana Oil Elixir</p>
                  <p className="font-semibold">Strength • Shine • Repair</p>
                </div>
                <Button className="rounded-2xl bg-amber-600 hover:bg-amber-700">Add to Cart</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <Card key={i} className="rounded-3xl border-amber-100">
                <CardHeader>
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-200 to-amber-400 flex items-center justify-center text-amber-800">
                    {b.icon}
                  </div>
                  <CardTitle className="text-lg mt-2">{b.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 -mt-3">{b.text}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 bg-gradient-to-b from-white to-amber-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">Bestsellers</h2>
              <p className="text-neutral-600">Formulated with high-potency batana oil and supportive botanicals.</p>
            </div>
            <Button variant="outline" className="rounded-2xl border-amber-200">View All</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <Card key={p.id} className="rounded-3xl overflow-hidden border-amber-100">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{p.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-600">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="font-semibold">{p.price}</p>
                    <Button className="rounded-2xl bg-amber-600 hover:bg-amber-700">
                      <ShoppingBag className="mr-2 h-4 w-4" /> Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section id="ingredients" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold">Powered by Authentic Batana Oil</h2>
            <p className="mt-3 text-neutral-600">
              Our batana oil is responsibly sourced and cold-pressed to preserve nutrients—oleic acid, antioxidants, and natural emollients that help reduce breakage, dryness, and dullness.
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="p-3 rounded-2xl bg-white shadow-sm border border-amber-100">No Sulfates</li>
              <li className="p-3 rounded-2xl bg-white shadow-sm border border-amber-100">No Silicones</li>
              <li className="p-3 rounded-2xl bg-white shadow-sm border border-amber-100">Vegan & Cruelty-Free</li>
              <li className="p-3 rounded-2xl bg-white shadow-sm border border-amber-100">Dermatologist Tested</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1400&auto=format&fit=crop"
                alt="Batana Oil Ingredients"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* How To Use */}
      <section id="howto" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">How to Use</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Card className="rounded-3xl border-amber-100">
              <CardHeader>
                <CardTitle>Scalp Treatment</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-600">
                Part hair and apply a few drops to scalp. Massage 3–5 minutes. Leave overnight or at least 1 hour. Shampoo and condition.
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-amber-100">
              <CardHeader>
                <CardTitle>Styling Finish</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-600">
                Rub 1–2 drops between palms and smooth over mid-lengths to ends to reduce frizz and add shine.
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-amber-100">
              <CardHeader>
                <CardTitle>Weekly Mask</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-600">
                After shampoo, apply mask from roots to ends. Leave 10–15 minutes. Rinse thoroughly and style as usual.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 bg-gradient-to-b from-amber-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Real Results</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="rounded-3xl border-amber-100">
                <CardContent className="pt-6">
                  <p className="text-sm text-neutral-700">
                    “My hair feels softer even in the dry winter air. The shine is unreal—no heavy residue!”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <img
                      src={`https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop`}
                      className="w-10 h-10 rounded-full object-cover"
                      alt="Customer avatar"
                    />
                    <div>
                      <p className="text-sm font-semibold">Anujin • Ulaanbaatar</p>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">FAQ</h2>
          <Accordion type="single" collapsible className="rounded-3xl border border-amber-100 bg-amber-50/40 p-2">
            {faqs.map((f, idx) => (
              <AccordionItem value={`item-${idx}`} key={idx}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-neutral-700">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Stockists & CTA */}
      <section className="py-16 bg-gradient-to-tr from-amber-100 via-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Find Us in Ulaanbaatar</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="p-4 rounded-2xl bg-white border border-amber-100 shadow-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" /> State Department Store – Level 1, Beauty Hall
              </li>
              <li className="p-4 rounded-2xl bg-white border border-amber-100 shadow-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Shangri-La Mall – Kiosk B12
              </li>
              <li className="p-4 rounded-2xl bg-white border border-amber-100 shadow-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Emart Khan-Uul – Aisle 7 (Haircare)
              </li>
            </ul>
          </div>
          <Card className="rounded-3xl border-amber-100">
            <CardHeader>
              <CardTitle>Join the Grossty Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600">
                Be first to know about restocks, limited drops, and care tips for Mongolia’s seasons.
              </p>
              <div className="mt-4 flex gap-2">
                <Input placeholder="Your email" />
                <Button className="rounded-2xl bg-amber-600 hover:bg-amber-700">Subscribe</Button>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600">
                <Instagram className="w-4 h-4" /> @grossty.mn
                <Facebook className="w-4 h-4" /> /grossty.mn
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-amber-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-amber-400 via-amber-500 to-orange-600 shadow" />
              <p className="font-bold">{brand.name}</p>
            </div>
            <p className="mt-3 text-sm text-neutral-600 max-w-sm">
              Clean, high-performance batana oil formulas designed for Mongolia’s climate. Strong roots, shiny lengths.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3">Contact</p>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@grossty.mn</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +976 9911 2233</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Sukhbaatar District, Ulaanbaatar, Mongolia</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon–Sat: 10:00–19:00</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-amber-600">Shop</a></li>
              <li><a href="#faq" className="hover:text-amber-600">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-amber-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-600">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="py-6 border-t border-amber-100 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Grossty Mongolia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
