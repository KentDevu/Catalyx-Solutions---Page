import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DotGrid from "@/components/DotGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Team />
        <Mission />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
