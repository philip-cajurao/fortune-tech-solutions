"use client"

import { useRef } from 'react';
import { SectionContext } from '../context/SectionContext';

export default function SectionProvider({ children }) {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const projectsRef = useRef(null);
    // const pricingRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToHero = () => {
        if (heroRef.current) {
            heroRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const scrollToServices = () => {
        if (servicesRef.current) {
            servicesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <SectionContext.Provider value={{ heroRef, aboutRef, servicesRef, projectsRef, contactRef, scrollToHero, scrollToAbout, scrollToServices, scrollToProjects, scrollToContact }}>
            {children}
        </SectionContext.Provider>
    );
}
