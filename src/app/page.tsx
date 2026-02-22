import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProject from "@/components/FeaturedProject";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="animate-fade-in">
      <Hero />
      <Services />
      <FeaturedProject />
      <ContactCTA />
      <Footer />
    </main>
  );
}
