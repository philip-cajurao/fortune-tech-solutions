
const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by
                    <span className="font-semibold text-primary dark:text-secondary"> Fortune</span>
                    <span className="font-semibold text-accent">Tech</span>
                    <span className="font-semibold text-primary dark:text-secondary">Solutions</span>.
                </p>
            </aside>
        </footer>
    );
}

export default Footer;
