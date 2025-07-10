"use client"

import Image from "next/image";
import marketingGraphics from "../assets/marketing.png"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Services = () => {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <div className="flex flex-col items-center justify-center mb-16">
            <div className="flex flex-col md:flex-row items-center space-x-2 text-center mb-8">
                <h2 className="text-2xl font-bold">What does FTS offer?</h2>
                <span className="text-xl text-base-content/75">Everything you need to build great products.</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-4">
                <div
                    className={`card card-border border-base-content/0 min-w-0 px-4 max-w-md w-full py-4 rounded group relative transition-all duration-300 hover:border-base-content/50 hover:cursor-pointer hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 active:shadow-none ${darkTheme ? "hover:shadow-white/15" : ""}`}
                >
                    <div className="mockup-browser w-full bg-black max-w-sm mx-auto border border-base-content/10 rounded overflow-visible">
                        <div className="mockup-browser-toolbar text-white">
                            <div className="input text-base-content">
                                https://www.yoursite.com
                            </div>
                        </div>
                        <div className="bg-[#262626] dark:text-base-content text-base-100 flex justify-center px-4 py-16">Welcome</div>
                    </div>

                    <div className="py-4 max-w-sm w-full mx-auto flex justify-start">
                        <h3 className="text-lg font-bold max-w-sm w-full">Web Applications Development</h3>
                    </div>


                </div>



                <div
                    className={`card card-border border-base-content/0 min-w-0 px-4 max-w-md w-full py-4 rounded relative hover:cursor-pointer transition-all duration-300 hover:border-base-content/50 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 active:shadow-none ${darkTheme ? "hover:shadow-white/15" : ""}`}
                >
                    <figure>
                        <Image src={marketingGraphics} loading="lazy" placeholder="blur" width={370} height={370} alt="marketing graphics" className="rounded border border-black dark:border-base-content/10" />
                    </figure>

                    <div className="py-4 max-w-sm w-full mx-auto flex justify-start">
                        <h3 className="text-lg font-bold max-w-sm w-full">Business Intelligence</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Services;
