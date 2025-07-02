"use client"

import { Link } from "react-scroll";

const Hero = () => {
    return (
        <>
            <div id="section0" className="hero h-[calc(100svh-4rem)]">

                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl font-bold"><span className="text-accent">Simplifying</span> Technology, Amplifying <span className="text-accent">Success.</span></h1>
                        <p className="py-6 text-lg text-base-content/80">
                            FTS helps your business using modern tools for a faster and efficient way to work,
                            brought to you by the experts in the industry.
                        </p>
                        <Link to='section2' smooth={true} className="btn btn-accent text-accent-content rounded">Explore Our Services</Link>
                    </div>
                </div>


            </div>
        </>

    );
}

export default Hero;
