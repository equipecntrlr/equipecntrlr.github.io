import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CardsGrid from "@/components/CardsGrid";
import Footer from "@/components/Footer";

/** Página principal — adicione novas seções aqui conforme necessário */
const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CardsGrid />
      </main>
      <Footer />
    </>
  );
};

export default Index;
