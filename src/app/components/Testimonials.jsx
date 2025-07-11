"use client"

import testimonies from "../data/testimonies";
import Testimony from "./Testimony";
import { useState } from "react";

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prev = () => {
        setCurrentSlide(currentSlide => (currentSlide === 0 ? testimonies.length - 1 :
            currentSlide - 1
        ))
    }

    const next = () => {
        setCurrentSlide(currentSlide => (currentSlide === testimonies.length - 1 ? 0 :
            currentSlide + 1
        ))
    }
    return (
        <div className="pt-16 mx-auto max-w-7xl flex flex-col md:flex-row sm:pl-16 justify-evenly px-4">
            <div className="space-y-4 py-8 max-w-sm flex flex-col">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold">What people say about us.</h2>
                    <p>Here&apos;s what others had to say when working with the best people.</p>
                </div>
                <div className="space-x-4 hidden md:flex">
                    <button onClick={prev} className="btn btn-circle hover:scale-105 btn-primary dark:btn-secondary">
                        <svg className="w-6 h-6 dark:text-primary text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                        </svg>
                    </button>

                    <button onClick={next} className="btn btn-circle hover:scale-105 btn-primary dark:btn-secondary">
                        <svg className="w-6 h-6 dark:text-primary text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="min-w-80 max-w-lg w-full py-8">
                <div className="space-x-4 md:hidden mt-8">
                    <button onClick={prev} className="btn btn-circle btn-primary dark:bg-white dark:hover:bg-white hover:scale-105">
                        <svg className="w-6 h-6 dark:text-primary text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                        </svg>
                    </button>

                    <button onClick={next} className="btn btn-circle btn-primary dark:bg-white dark:hover:bg-white hover:scale-105">
                        <svg className="w-6 h-6 dark:text-primary text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </button>
                </div>
                <div className="overflow-hidden relative w-full group">
                    <div className={`flex w-full transition-transform ease-out duration-700`}
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {
                            testimonies.map((testimony, index) => (
                                <Testimony
                                    key={index}
                                    message={testimony.message}
                                    image={testimony.image}
                                    name={testimony.name}
                                    position={testimony.position}
                                />
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Testimonials;
