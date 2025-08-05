import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";
import CTA from "@/components/CTA";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow mt-16">
                <div className="bg-construction-blue text-white py-20">
                    <div className="container">
                        <h1 className="mb-4 text-center">About BuildHorizon</h1>
                        <p className="text-xl text-center max-w-3xl mx-auto text-white/80">
                            We're a full-service construction company with a commitment to quality and client satisfaction since 1998.
                        </p>
                    </div>
                </div>
                <div className="container py-16">
                    <AboutContent />
                </div>
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default About;