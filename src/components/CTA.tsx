import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section className="py-16 bg-construction-orange">
            <div className="container text-center">
                <h2 className="text-white mb-4">Ready to Start Your Project?</h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                    Contact us today for a free consultation and quote. Let's bring your construction vision to life.
                </p>
                <Button
                    asChild
                    className="bg-white text-construction-orange hover:bg-gray-100 font-bold text-lg px-8 py-6"
                >
                    <Link to="/contact" className="flex items-center gap-2">
                        Get Your Free Quote <ArrowRight size={20} />
                    </Link>
                </Button>
            </div>
        </section>
    );
};

export default CTA;