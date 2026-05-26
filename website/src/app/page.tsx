import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Scenario } from "@/components/sections/Scenario";
import { Delivery } from "@/components/sections/Delivery";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Comparison } from "@/components/sections/Comparison";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Scenario />
        <Delivery />
        <Pricing />
        <Process />
        <Comparison />
      </main>
      <Footer />
    </>
  );
}
