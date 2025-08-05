import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex items-center justify-center mt-16">
                <div className="container text-center py-16">
                    <h1 className="text-6xl font-bold text-construction-blue mb-4">404</h1>
                    <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
                    <p className="text-xl text-construction-gray-dark mb-8 max-w-lg mx-auto">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Button
                        asChild
                        className="bg-construction-orange hover:bg-construction-orange/90 text-white"
                    >
                        <Link to="/">Back to Home</Link>
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;