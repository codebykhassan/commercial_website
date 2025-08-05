import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-construction-blue text-white pt-12 pb-6">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">BuildHorizon</h3>
                        <p className="mb-4 text-gray-300">
                            Building dreams into reality with quality construction and exceptional service since 2010.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-construction-orange transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-construction-orange transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-construction-orange transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Info</h4>
                        <address className="not-italic text-gray-300">
                            <p className="mb-2">4866 Bathurst Streets</p>
                            <p className="mb-2">M2R 1X4</p>
                            <p className="mb-2">Phone: +1 (905) 925-7447</p>
                            <p className="mb-2">Email: Mirzobuildpro@gmail.com</p>
                        </address>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
                    <p>&copy; {currentYear} BuildHorizon Construction. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;