import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <div className="relative bg-construction-blue h-[80vh] flex items-center">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
                }}
            ></div>
            <div className="container relative z-10 text-white">
                <div className="max-w-3xl">
                    <h1 className="mb-4 animate-fade-in">Building Tomorrow's Infrastructure Today</h1>
                    <p className="text-xl mb-8 animate-fade-in">
                        With over a decade of experience in the construction industry, we deliver quality projects on time and within budget.
                    </p>
                    <Button
                        asChild
                        className="bg-construction-orange hover:bg-construction-orange/90 text-white text-lg px-8 py-6 animate-fade-in"
                    >
                        <Link to="/contact" className="flex items-center gap-2">
                            Get Our Quote <ArrowRight size={20} />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;