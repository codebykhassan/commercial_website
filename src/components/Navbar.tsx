import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-construction-blue text-white shadow-md">
            <div className="container flex justify-between items-center py-4">
                <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
                    <span>BuildHorizon</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex space-x-6">
                        <Link to="/" className="hover:text-construction-orange transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-construction-orange transition-colors">About</Link>
                        <Link to="/contact" className="hover:text-construction-orange transition-colors">Contact</Link>
                    </div>
                    <Button asChild className="bg-construction-orange hover:bg-construction-orange/90">
                        <Link to="/contact">Get Our Quote</Link>
                    </Button>
                </div>

                {/* Mobile Navigation Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-construction-blue-light">
                    <div className="container py-4 flex flex-col space-y-4">
                        <Link
                            to="/"
                            className="block py-2 hover:text-construction-orange"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block py-2 hover:text-construction-orange"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="block py-2 hover:text-construction-orange"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <Button asChild className="bg-construction-orange hover:bg-construction-orange/90 w-full">
                            <Link to="/contact" onClick={() => setIsOpen(false)}>Get Our Quote</Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;