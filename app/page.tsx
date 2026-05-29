import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Features from "@/components/Features";
import Liga from "@/components/Liga";
import XpRewards from "@/components/XpRewards";
import IACliente from "@/components/IACliente";
import Editfolio from "@/components/Editfolio";
import Estrelas from "@/components/Estrelas";
import Contratar from "@/components/Contratar";
import Erick from "@/components/Erick";
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
        <IACliente />
        <Editfolio />
        <Estrelas />
        <Contratar />
        <Erick />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
