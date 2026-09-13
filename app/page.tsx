import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Learning from "@/components/Learning";
import Project from "@/components/Project";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Learning />
      <Project />
      <Stats />
      <Footer />
    </main>
  );
}