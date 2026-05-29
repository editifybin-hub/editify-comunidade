import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Features from "@/components/Features";
import Liga from "@/components/Liga";
import XpRewards from "@/components/XpRewards";
import TierClients from "@/components/TierClients";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Welcome />
        <Features />
        <Liga />
        <XpRewards />
        <TierClients />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
