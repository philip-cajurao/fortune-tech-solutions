import { Link } from "react-scroll";
import CheckIcon from "../components/CheckIcon";
import CloseIcon from "../components/CloseIcon";

const plansOptions = [
    {
        title: "Basic",
        value: (
            <div>
                $799*<span className="text-2xl">package</span>
            </div>
        ),
        body: (
            <div>
                <p>For small businesses/startups looking to establish a solid IT foundation with essential services and support.</p>
                <ul className="pt-4 text-sm space-y-2">
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        IT Support and Helpdesk

                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        Website Development/Design

                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        Consultation Services

                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CloseIcon /></span>
                        CRM Setup and Maintenance
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CloseIcon /></span>
                        Additional Services
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CloseIcon /></span>
                        Phone System Setup and Maintenance
                    </li>
                </ul>
            </div>
        ),
        actions: (
            <div className="space-x-1 w-full mt-8">
                <Link to="section5" smooth={true} className="btn btn-accent text-primary w-full rounded">Buy Now</Link>
            </div>
        )
    },
    {
        title: "Advance",
        badge: true,
        value: (
            <div>
                $1699*<span className="text-2xl">package</span>
            </div>
        ),
        body: (
            <div>
                <p>For medium-sized businesses seeking comprehensive IT management and enhanced security features.</p>
                <ul className="pt-4 text-sm space-y-2">
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        IT Support and Helpdesk
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        Website Development/Design
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        Consultation Services
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        CRM Setup and Maintenance
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        Additional Services
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CloseIcon /></span>
                        Phone System Setup and Maintenance
                    </li>
                </ul>
            </div>
        ),
        actions: (
            <div className="space-x-1 w-full mt-8">
                <Link to="section5" smooth={true} className="btn btn-accent text-primary w-full rounded">Buy Now</Link>
            </div>
        )
    },
    {
        title: "Premium",
        value: (
            <div>
                $5499*<span className="text-2xl">package</span>
            </div>
        ),
        body: (
            <div>
                <p>For large enterprises requiring robust IT infrastructure, proactive management, and top-tier security measures.</p>
                <ul className="pt-4 text-sm space-y-2">
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        IT Support and Helpdesk
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        Website Development/Design
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        Consultation Services
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        CRM Setup and Maintenance
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        Additional Services
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><CheckIcon /></span>
                        Phone System Setup and Maintenance
                    </li>
                </ul>
            </div>
        ),
        actions: (
            <div className="space-x-1 w-full mt-8">
                <Link to="section5" smooth={true} className="btn btn-accent text-primary w-full rounded">Buy Now</Link>
            </div>
        )
    },
    {
        title: "Custom",
        value: (
            <div>
                Contact Us
            </div>
        ),
        body: (
            <div>
                <p>For businesses with unique needs, we offer customizable packages to fit your specific requirements. Contact us for a tailored quote.</p>
            </div>
        ),
        actions: (
            <div className="space-x-1 w-full mt-8">
                <Link to="section5" smooth={true} className="btn btn-accent text-primary w-full rounded">Contact Us</Link>
            </div>
        )
    },
]

export default plansOptions;