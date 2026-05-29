import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Features from "@/components/Features";
import Gamification from "@/components/Gamification";
import Ecosystem from "@/components/Ecosystem";
import NotUs from "@/components/NotUs";
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
        <Gamification />
        <Ecosystem />
        <NotUs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
