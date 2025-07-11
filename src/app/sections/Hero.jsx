"use client"

import { useContext } from "react";
import { SectionContext } from "../context/SectionContext";



const Hero = () => {
    const {heroRef, scrollToServices} = useContext(SectionContext)
    return (
        <>
            <div id="home" ref={heroRef} className="hero -mt-20 pt-32 h-[calc(100svh-4rem)]">

                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl font-bold"><span className="text-accent">Simplifying</span> Technology, Amplifying <span className="text-accent">Success.</span></h1>
                        <p className="py-6 text-lg text-base-content/80">
                            FTS helps your business using modern tools for a faster and efficient way to work,
                            brought to you by the experts in the industry.
                        </p>
                        <button onClick={scrollToServices} className="btn btn-accent rounded">Explore Services</button>
                        {/* <a href='#services' className="btn btn-accent text-accent-content rounded">Explore Our Services</a> */}
                    </div>
                </div>


            </div>
        </>

    );
}

export default Hero;
