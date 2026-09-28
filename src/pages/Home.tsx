import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Products from "../components/home/Products";
import About from "../components/home/About";
import Benefits from "../components/home/Benefits";
import BookingCTA from "../components/home/BookingCTA";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <About />
      <Benefits />
      <BookingCTA />
      <Contact />
    </>
  );
}
