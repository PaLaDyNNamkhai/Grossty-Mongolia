import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Products from "../components/Products";
import Ingredients from "../components/Ingredients";
import HowTo from "../components/HowTo";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Stockists from "../components/Stockists";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Grossty Mongolia — Batana Oil Hair Care</title>
        <meta
          name="description"
          content="Grossty Mongolia — Pure batana oil hair care. Nourish, restore, and glow with formulas designed for Mongolia's climate."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="min-h-screen w-full text-neutral-900 bg-[radial-gradient(ellipse_at_top,rgba(255,237,213,.55),transparent_60%),linear-gradient(to_bottom,#fff,#fff8ee)]">
        <Navbar />
        <Hero />
        <Benefits />
        <Products />
        <Ingredients />
        <HowTo />
        <Testimonials />
        <FAQ />
        <Stockists />
        <Footer />
      </div>
    </>
  );
}