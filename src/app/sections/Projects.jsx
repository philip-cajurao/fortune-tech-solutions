import ie from "../assets/projects images/ie.png"
import cos from "../assets/projects images/cos.png"
import fht from "../assets/projects images/fht.png"
import pc from "../assets/projects images/pc.png"
import restreetsmart from "../assets/projects images/restreetsmart.png"
import fts from "../assets/projects images/fts.png"
import feoaf from "../assets/projects images/feoaf.png"
import Testimonials from "../components/Testimonials"
import Image from "next/image"

const Projects = () => {
    return (
        <div className="overflow-hidden pb-16">
            <h2 className="text-4xl font-bold text-center">Projects we&apos;ve done</h2>
            <p className="text-xl text-center mb-4">Tailored just for you</p>


            <div className="mx-auto w-full space-y-4 px-4 relative">
                <div className="grid lg:grid-cols-2 w-full">
                    <div></div>
                    <div className="divider divider-primary"></div>
                </div>
                <div className="absolute bottom-10 left-0 right-0 top-6 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 xl:pl-80">
                    <div>
                        <figure className="rounded-md overflow-hidden relative group shadow-xl border border-base-content">
                            <div className="absolute backdrop-blur-lg bg-primary/50 opacity-0 group-hover:opacity-100 transition duration-500 h-full w-full flex flex-col justify-center items-center">
                                <a className="join rounded-full overflow-hidden" href="https://www.feoaf.org/" target="__blank">
                                    <div className="py-3 px-4 border-r bg-black/50 border-white text-white join-item">FEOAF</div>
                                    <span className="py-3 px-4 bg-black/50 border-white text-white join-item">&#8599;</span>
                                </a>
                            </div>
                            <Image
                                loading="lazy"
                                placeholder="blur"
                                width={500}
                                sizes="height: auto"
                                src={feoaf}
                                alt="FEOAF Website" />

                        </figure>
                    </div>
                    <div>
                        <figure className="rounded-md overflow-hidden relative group shadow-xl border border-base-content">
                            <div className="absolute backdrop-blur-lg bg-primary/50 opacity-0 group-hover:opacity-100 transition duration-500 h-full w-full flex flex-col justify-center items-center">
                                <a className="join rounded-full overflow-hidden" href="https://www.insuranceenterpriseusa.com/" target="__blank">
                                    <div className="py-3 px-4 border-r bg-black/50 border-white text-white join-item">Insurance Enterprise USA</div>
                                    <span className="py-3 px-4 bg-black/50 border-white text-white join-item">&#8599;</span>
                                </a>
                            </div>
                            <Image
                                loading="lazy"
                                placeholder="blur"
                                width={500}
                                sizes="height: auto"
                                src={ie}
                                alt="Insurance Enterprise USA Website" />

                        </figure>
                    </div>

                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center xl:flex-row-reverse gap-8">
                    <div>
                        <figure className="rounded-md overflow-hidden relative group shadow-xl border border-base-content">
                            <div className="absolute backdrop-blur-lg bg-primary/50 opacity-0 group-hover:opacity-100 transition duration-500 h-full w-full flex flex-col justify-center items-center">
                                <a className="join rounded-full overflow-hidden" href="https://www.restreetsmart.com/" target="__blank">
                                    <div className="py-3 px-4 border-r bg-black/50 border-white text-white join-item">RE Street Smart</div>
                                    <span className="py-3 px-4 bg-black/50 border-white text-white join-item">&#8599;</span>
                                </a>
                            </div>
                            <Image
                                loading="lazy"
                                placeholder="blur"
                                width={500}
                                sizes="height: auto"
                                src={restreetsmart}
                                alt="RE Street Smart Website" />

                        </figure>
                    </div>
                    <div>
                        <figure className="rounded-md overflow-hidden relative group shadow-xl border border-base-content">
                            <div className="absolute backdrop-blur-lg bg-primary/50 opacity-0 group-hover:opacity-100 transition duration-500 h-full w-full flex flex-col justify-center items-center">
                                <a className="join rounded-full overflow-hidden" href="https://www.cashoffersolid.com/" target="__blank">
                                    <div className="py-3 px-4 border-r bg-black/50 border-white text-white join-item">Cash Offer Solid</div>
                                    <span className="py-3 px-4 bg-black/50 border-white text-white join-item">&#8599;</span>
                                </a>
                            </div>
                            <Image
                                loading="lazy"
                                placeholder="blur"
                                width={500}
                                sizes="height: auto"
                                src={cos}
                                alt="Cash Offer Solid Website" />

                        </figure>
                    </div>
                    <div>
                        <figure className="rounded-md overflow-hidden relative group shadow-xl border border-base-content">
                            <div className="absolute backdrop-blur-lg bg-primary/50 opacity-0 group-hover:opacity-100 transition duration-500 h-full w-full flex flex-col justify-center items-center">
                                <a className="join rounded-full overflow-hidden" href="https://premiercabinetry.us/" target="__blank">
                                    <div className="py-3 px-4 border-r bg-black/50 border-white text-white join-item">Premier Cabinetry</div>
                                    <span className="py-3 px-4 bg-black/50 border-white text-white join-item">&#8599;</span>
                                </a>
                            </div>
                            <Image
                                loading="lazy"
                                placeholder="blur"
                                width={500}
                                sizes="height: auto"
                                src={pc}
                                alt="Premier Cabinetry Website" />

                        </figure>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 xl:pr-80">
                    <div>
                        <figure className="rounded-md overflow-hidden relative group shadow-xl border border-base-content">
                            <div className="absolute backdrop-blur-lg bg-primary/50 opacity-0 group-hover:opacity-100 transition duration-500 h-full w-full flex flex-col justify-center items-center">
                                <a className="join rounded-full overflow-hidden" href="https://www.fortunehomesteam.com/" target="__blank">
                                    <div className="py-3 px-4 border-r bg-black/50 border-white text-white join-item">Fortune Homes Team</div>
                                    <span className="py-3 px-4 bg-black/50 border-white text-white join-item">&#8599;</span>
                                </a>
                            </div>
                            <Image
                                loading="lazy"
                                placeholder="blur"
                                width={500}
                                sizes="height: auto"
                                src={fht}
                                alt="Fortune Homes Team Website" />

                        </figure>
                    </div>
                    <div>
                        <figure className="rounded-md overflow-hidden relative group shadow-xl border border-base-content">
                            <div className="absolute backdrop-blur-lg bg-primary/50 opacity-0 group-hover:opacity-100 transition duration-500 h-full w-full flex flex-col justify-center items-center">
                                <a className="join rounded-full overflow-hidden" href="https://fortunetechsolutions.netlify.app/" target="__blank">
                                    <div className="py-3 px-4 border-r bg-black/50 border-white text-white join-item">Fortune Tech Solutions</div>
                                    <span className="py-3 px-4 bg-black/50 border-white text-white join-item">&#8599;</span>
                                </a>
                            </div>
                            <Image
                                loading="lazy"
                                placeholder="blur"
                                width={500}
                                sizes="height: auto"
                                src={fts}
                                alt="Fortune Tech Solutions Website" />

                        </figure>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 w-full">
                    <div></div>
                    <div className="divider divider-primary col-start-1 xl:col-end-auto"></div>
                </div>
            </div>


            <Testimonials />
        </div>
    );
}

export default Projects;
