import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import DiscoverByArea from "@/components/DiscoverByArea";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <DiscoverByArea />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
