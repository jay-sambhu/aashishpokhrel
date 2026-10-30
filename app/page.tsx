import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Dashboard from "@/components/Dashboard";
import YouTubeShowcase from "@/components/YouTubeShowcase";
import SocialConnect from "@/components/SocialConnect";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Dashboard />
        <YouTubeShowcase />
        <SocialConnect />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
