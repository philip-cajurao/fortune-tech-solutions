"use client"

import ThemeSelector from "./ThemeSelector";
import { useContext, useState, useEffect } from "react";
import Headroom from "react-headroom";
import { ThemeContext } from "../context/ThemeContext";
import Image from "next/image";

const NavBar = () => {

    const { darkTheme } = useContext(ThemeContext);

    const [isPin, setIsPin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onPinChange = () => {
        setIsPin(true)
    }
    const onUnfixChange = () => {
        setIsPin(false)
    }

    const handleChangeMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    useEffect(() => {
        isMenuOpen ?
            document.body.style.overflow = "hidden" :
            document.body.style.overflow = "visible"
    }, [isMenuOpen]);



    return (
        <Headroom onPin={onPinChange} onUnfix={onUnfixChange} pin={isMenuOpen}>

            <div className={`
                ${darkTheme ? "border-b" : ""} border-b-black border-b h-[100lvh] fixed w-full transition-all duration-150 ease-in z-30
                ${isMenuOpen ? "opacity-100 -translate-y-0" : " -translate-y-full duration-500 opacity-0 border-b-transparent"}
                `}>
                <ul className={`menu text-base-content bg-base-200 min-h-full w-full p-4 relative translate-y-16 overflow-x-hidden items-center`}>
                    <li className={`transition-all ${isMenuOpen ? "duration-500 delay-[150ms] opacity-100 translate-x-0" : "opacity-0 duration-0 translate-x-full"}`}><a onClick={handleChangeMenu} href='#home' className='rounded text-2xl py-5' >Home</a></li>
                    <li className={`transition-all ${isMenuOpen ? "duration-500 delay-[250ms] opacity-100 translate-x-0" : "opacity-0 duration-0 translate-x-full"}`}><a onClick={handleChangeMenu} href='#about' className='rounded text-2xl py-5'>About Us</a></li>
                    <li className={`transition-all ${isMenuOpen ? "duration-500 delay-[350ms] opacity-100 translate-x-0" : "opacity-0 duration-0 translate-x-full"}`}><a onClick={handleChangeMenu} href='#services' className='rounded text-2xl py-5' >Services</a></li>
                    <li className={`transition-all ${isMenuOpen ? "duration-500 delay-[450ms] opacity-100 translate-x-0" : "opacity-0 duration-0 translate-x-full"}`}><a onClick={handleChangeMenu} href='#projects' className='rounded text-2xl py-5'>Projects</a></li>
                    {/* <li className={`transition-all ${isMenuOpen ? "duration-500 delay-[550ms] opacity-100 translate-x-0" : "opacity-0 duration-0 translate-x-full"}`}><a onClick={handleChangeMenu} href='#section4' smooth={true} className='rounded text-2xl py-5'>Pricing</a></li> */}
                    <li className={`transition-all ${isMenuOpen ? "duration-500 delay-[650ms] opacity-100 translate-x-0" : "opacity-0 duration-0 translate-x-full"}`}><a onClick={handleChangeMenu} href='#contact' className='rounded text-2xl py-5' >Contacts</a></li>
                </ul>
            </div>

            <div className={`
                    navbar h-4 bg-base-100 z-40 relative duration-500 transition-all
                    ${!darkTheme && (isPin && "shadow")}
                        `}>

                <div className={`
                        absolute bottom-0 left-0 right-0 bg-base-content/25 w-full dark:h-[5px] dark:sm:h-[1px] duration-1000 transition-transform
                        ${darkTheme && (isPin ? "scale-y-100" : "scale-y-0")} 
                            `}>
                </div>

                <div className="navbar-start hidden md:flex">
                    <a href="#home" smooth="true" target="_top" className="btn btn-link text-2xl no-underline hover:no-underline text-inherit" >
                        {/* fts. */}
                        {
                            darkTheme ?
                                <Image alt="FHT logo" priority src="/fts-dark.png" width={48} height={48} />
                                :
                                <Image alt="FHT logo" priority src="/fts-light.png" width={48} height={48} />
                        }
                    </a>
                </div>


                <div className='navbar-center hidden md:flex h-full'>
                    <a href="#about" className='p-4 hover:cursor-pointer'>About Us</a>
                    <a href="#services" className='p-4 hover:cursor-pointer'>Services</a>
                    <a href="#projects" className='p-4 hover:cursor-pointer'>Projects</a>
                    {/* <Link to='section4' smooth={true} className='btn btn-ghost btn-primary rounded-sm'>Pricing</Link> */}
                    <a href="#contact" className='p-4 hover:cursor-pointer'>Contact Us</a>
                </div>




                <div className="navbar-start md:hidden">
                    <label
                        // htmlFor="my-drawer-4" 
                        className="relative"
                    >
                        {/* <input type="checkbox" value={isMenuOpen} onChange={handleChangeMenu} /> */}

                        {/* burger icon */}
                        <svg className={`w-11 h-11 py-1 ml-1 transition-all duration-300 absolute ${isMenuOpen ? "opacity-0" : "rotate-180 opacity-100"} `} onClick={handleChangeMenu} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>

                        {/* close icon */}
                        <svg className={`w-11 h-11 py-1 ml-1 transition-all duration-300 absolute ${isMenuOpen ? "rotate-180 opacity-100" : "opacity-0"} `} onClick={handleChangeMenu} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>

                        <svg className={`w-11 h-11 py-1 ml-1 opacity-0 cursor-pointer`} onClick={handleChangeMenu} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>

                    </label>
                </div>



                <div className="navbar-center md:hidden">
                    <a href='#home' className="btn btn-link text-2xl no-underline hover:no-underline text-inherit" >
                        {/* fts. */}
                        {
                            darkTheme ?
                                <Image alt="FHT logo" priority src="/fts-dark.png" width={48} height={48} />
                                :
                                <Image alt="FHT logo" priority src="/fts-light.png" width={48} height={48} />
                        }
                    </a>
                </div>


                <div className="navbar-end">
                    <ThemeSelector />
                </div>
            </div>

        </Headroom>
    );
}

export default NavBar;
