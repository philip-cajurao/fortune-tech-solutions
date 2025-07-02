import Section from "./components/Section";
import Hero from "./sections/Hero"
import AboutUs from "./sections/AboutUs"
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";

export default function Home() {
  return (
    <>

      <Hero />
      <Section container content={<AboutUs />} id={1} />
      <Section container content={<Services />} id={2} />
      <Section content={<Projects />} id={3} />
      <Section content={<Contacts />} id={5} />
    </>

  );
}
