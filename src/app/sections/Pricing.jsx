import { useState } from "react";
import Card from "../components/Card";
import plansOptions from "../data/planOptions";
import planDetails from "../data/planDetails";
import { Link } from "react-scroll";

const Pricing = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [seeDetails, setSeeDetails] = useState(false);

    const seeDetailsClose = () => {
        document.body.style.overflowY = ""
        setSeeDetails(false)
    }

    return (
        <div className="bg-base-200">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center pt-16">
                    <h2 className="text-4xl font-bold">Worth the Price</h2>
                    <p>You can choose from our different plans that fits for your needs.</p>
                </div>

                <div className="pt-8 px-4">


                    <div className="w-full pt-8 pb-16 px-2">
                        <div className="my-4 grid place-content-center sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
                            {
                                plansOptions.map((plan, index) => (
                                    <Card
                                        key={plan.title}
                                        index={index}
                                        title={plan.title}
                                        badge={plan.badge}
                                        kebab={true}
                                        value={plan.value}
                                        body={plan.body}
                                        actions={plan.actions}
                                        setSeeDetails={setSeeDetails}
                                        setActiveTab={setActiveTab}
                                        className={index === 3 ? "lg:col-start-2" : ""}
                                    />
                                ))
                            }
                        </div>

                        {/* <div className="text-center underline mt-16 cursor-pointer" onClick={() => setSeeDetails(!seeDetails)}>
                            {
                                seeDetails ? <span>Hide</span> : <span>See</span>
                            }
                            &nbsp;details...
                        </div> */}

                    </div>



                    <div className={`fixed p-4 h-svh w-full bg-base-100 overflow-y-scroll left-0 z-10 duration-700 transition-all ${seeDetails ? "top-0" : "top-full"}`}>
                        <div className="flex w-full justify-end">
                            <button className="btn btn-circle" onClick={seeDetailsClose}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                            </button>
                        </div>



                        <div className=" mb-16">
                            <div className="text-3xl font-bold text-center">Details</div>
                            <div className="flex justify-center">
                                <div className="label">
                                    <label htmlFor="radio1"
                                        className={`border-b h-16 ${activeTab === 1 ? "border-accent" : "dark:border-base-content border-primary"} cursor-pointer px-2`}
                                    >
                                        <div className={`h-full duration-100 transition-all ${activeTab === 1 ? "translate-y-[35%] text-accent text-2xl font-extrabold" : "translate-y-[55%]"}`}>
                                            Basic
                                        </div>
                                    </label>
                                    <input
                                        id="radio1"
                                        type="radio"
                                        name="my_tabs_1"
                                        aria-label="Basic"
                                        className="hidden"
                                        defaultChecked
                                        onChange={() => setActiveTab(1)}
                                    />
                                </div>
                                <div className="label">
                                    <label htmlFor="radio2"
                                        className={`border-b h-16 ${activeTab === 2 ? "border-accent" : "dark:border-base-content border-primary"} cursor-pointer px-2`}
                                    >
                                        <div className={`h-full duration-100 transition-all  ${activeTab ===  2 ? "translate-y-[35%] text-accent text-2xl font-extrabold" : "translate-y-[55%]"}`}>
                                            Advanced
                                        </div>
                                    </label>
                                    <input
                                        id="radio2"
                                        type="radio"
                                        name="my_tabs_1"
                                        className="hidden"
                                        aria-label="Advanced"
                                        onChange={() => setActiveTab(2)}
                                    />
                                </div>
                                <div className="label">
                                    <label htmlFor="radio3"
                                        className={`border-b h-16 ${activeTab === 3 ? "border-accent" : "dark:border-base-content border-primary"} cursor-pointer px-2`}
                                    >
                                        <div className={`h-full duration-100 transition-all ${activeTab === 3 ? "translate-y-[35%] text-accent text-2xl font-extrabold" : "translate-y-[55%]"}`}>
                                            Premium
                                        </div>
                                    </label>
                                    <input
                                        id="radio3"
                                        type="radio"
                                        name="my_tabs_1"
                                        className="hidden"
                                        aria-label="Premium"
                                        onChange={() => setActiveTab(3)}
                                    />
                                </div>
                                <div className="label">
                                    <label htmlFor="radio4"
                                        className={`border-b h-16 ${activeTab === 4 ? "border-accent" : "dark:border-base-content border-primary"} cursor-pointer px-2`}
                                    >
                                        <div className={`h-full duration-100 transition-all ${activeTab === 4 ? "translate-y-[35%] text-accent text-2xl font-extrabold" : "translate-y-[55%]"}`}>
                                            Custom
                                        </div>
                                    </label>
                                    <input
                                        id="radio4"
                                        type="radio"
                                        name="my_tabs_1"
                                        className="hidden"
                                        aria-label="Custom"
                                        onChange={() => setActiveTab(4)}
                                    />
                                </div>
                            </div>


                            {
                                planDetails.map((planDetail, index) => (

                                    // render chosen tab
                                    activeTab === index + 1 ?
                                        <div key={index}>
                                            <div className="grid grid-cols-2 bg-primary text-white border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-t">
                                                <div className="p-2 text-center text-xl">Features</div>
                                                <div className="p-2 text-center text-xl flex flex-col sm:flex-row justify-center items-center sm:space-x-4">
                                                    <p>{planDetail.package}</p>
                                                    <div className="flex justify-center">
                                                        <Link to="section5" smooth={true} onClick={seeDetailsClose} className="btn btn-accent btn-sm text-primary rounded">
                                                            {
                                                                index === 3 ? "Contact Us" : "Buy Now"
                                                            }
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-t">
                                                <div className="p-2 text-lg">IT Support and Helpdesk</div>
                                                {planDetail.feature1}
                                            </div>

                                            <div className="grid grid-cols-2 border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-t">
                                                <div className="p-2 text-lg">Website Development and Design</div>
                                                {planDetail.feature2}
                                            </div>

                                            <div className="grid grid-cols-2 border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-t">
                                                <div className="p-2 text-lg">Consultation Services</div>
                                                {planDetail.feature3}
                                            </div>

                                            <div className="grid grid-cols-2 border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-t">
                                                <div className="p-2 text-lg">CRM Setup and Maintenance</div>
                                                {planDetail.feature4}
                                            </div>

                                            <div className="grid grid-cols-2 border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-t">
                                                <div className="p-2 text-lg">Additional Services</div>
                                                {planDetail.feature5}
                                            </div>

                                            <div className="grid grid-cols-2 border-primary divide-primary dark:divide-base-content dark:border-base-content divide-x border-x border-y">
                                                <div className="p-2 text-lg">Phone System Setup and Maintenance</div>
                                                {planDetail.feature6}
                                            </div>
                                        </div>
                                        : null
                                ))
                            }

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pricing;
