
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow mt-16">
                <Hero />
                <ServicesSection />
                <RecentProjects />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Index;