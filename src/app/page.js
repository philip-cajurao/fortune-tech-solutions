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
      <Section container content={<AboutUs />} id={"about"} />
      <Section container content={<Services />} id={"services"} />
      <Section content={<Projects />} id={"projects"} />
      <Section content={<Contacts />} id={"contact"} />
    </>

  );
}
