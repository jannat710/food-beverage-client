

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-stone-950 p-10 text-white font-display">
                <aside>
                    <p className="text-[#82B440] font-bold text-2xl pb-5 pt-8">Foodies</p>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
            <p className=" bg-stone-950 pb-10 text-white text-center">Copyright © 2023 - All right reserved</p>
        </div>
    );
};

export default Footer;