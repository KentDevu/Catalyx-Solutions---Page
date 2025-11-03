import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import StatsSection from "@/components/StatsSection";
import MissionSection from "@/components/MissionSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import TeamSection from "@/components/TeamSection";
import ReviewsSection from "@/components/ReviewsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StellarBackground from "@/components/StellarBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <StellarBackground />
      <div className="relative" style={{ zIndex: 100 }}>
        <Navbar />
        <Hero />
        <FeaturesGrid />
        <StatsSection />
        <ProjectsShowcase />
        <TeamSection />
        <MissionSection />
        <ReviewsSection />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
