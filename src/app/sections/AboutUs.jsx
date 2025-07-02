
const AboutUs = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-32 cursor-deafult">
            <div className="divider"></div>
            <div className="flex flex-col max-w-4xl mx-auto items-center">
                <h2 className="text-4xl font-bold mb-8">About Us</h2>
                <div className="text-base-content/70 text-lg px-2">
                    At <span className="text-base-content font-semibold">Fortune Tech Solutions,</span> we empower businesses with innovative and effective technology solutions.
                    As a trusted partner in the digital landscape,
                    we specialize in crafting custom websites,
                    developing powerful CRM systems,
                    and delivering impactful marketing services designed to drive growth and streamline operations.
                </div>
            </div>

            <div className="space-y-24 p-2">
                <div>
                    <h2 className="text-xl text-center mb-8 font-bold">Our Expertise</h2>
                    <div className="grid grid-col-1 md:grid-cols-2 md:max-w-4xl gap-8 text-base-content/70 text-lg cursor-default">
                        <div className="flex flex-col group items-center text-center md:items-start md:text-start">

                            <svg className="w-8 h-8 mb-2 group-hover:text-accent duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
                            </svg>

                            <div>
                                <span className="text-base-content group-hover:text-accent duration-300 font-semibold">Website Development. </span>
                                We design and build websites that are visually stunning,
                                user-friendly, and tailored to meet your unique needs
                            </div>
                        </div>

                        <div className="flex flex-col group items-center text-center md:items-start md:text-start">
                            <svg className="w-8 h-8 mb-2 group-hover:text-accent duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                            </svg>

                            <div>
                                <span className="text-base-content group-hover:text-accent duration-300 font-semibold">CRM Development. </span>
                                From streamlining workflows to enhancing customer experiences,
                                our custom CRM solutions help you manage and grow your business efficiently.
                            </div>
                        </div>

                        <div className="flex flex-col group items-center text-center md:items-start md:text-start">
                            <svg className="w-8 h-8 mb-2 group-hover:text-accent duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
                            </svg>

                            <div>
                                <span className="text-base-content group-hover:text-accent duration-300 font-semibold">Marketing Services. </span>
                                We take your outreach to the next level with email automation,
                                targeted campaigns, and data-driven strategies that amplify your brand.
                            </div>
                        </div>

                        <div className="flex flex-col group items-center text-center md:items-start md:text-start">
                            <svg className="w-8 h-8 mb-2 group-hover:text-accent duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z" />
                            </svg>

                            <div>
                                <span className="text-base-content group-hover:text-accent duration-300 font-semibold">Phone System Setup. </span>
                                Stay connected with robust, reliable,
                                and modern communication systems designed to keep your teams and clients seamlessly linked.
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col max-w-4xl mx-auto items-center">
                    <h2 className="text-xl font-bold mb-8">Why Choose Us?</h2>
                    <div className="text-base-content/70 text-lg">
                        Our mission is to deliver results that matter.
                        We combine technical expertise with a client-first approach to provide solutions that are not only innovative but also tailored to your business goals.
                        Whether you’re a startup or an established enterprise, we are here to help you succeed in today’s competitive market.
                        <br />
                        <br />
                        Let’s build your future together.
                        <br />
                        <br />
                        Get in touch today and discover how Fortune Tech Solutions can transform your business.
                    </div>
                </div>
            </div>


            <div className="divider"></div>
        </div >
    );
}

export default AboutUs;
