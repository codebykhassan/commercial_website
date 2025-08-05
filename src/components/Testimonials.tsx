import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: "BuildHorizon did an exceptional job on our office building renovation. Their team was professional, efficient, and completed the project ahead of schedule.",
        author: "John Smith",
        position: "CEO, TechCorp"
    },
    {
        id: 2,
        text: "We hired BuildHorizon for our new residential complex and were extremely pleased with their attention to detail and quality workmanship.",
        author: "Sarah Johnson",
        position: "Property Developer, Urban Living"
    },
    {
        id: 3,
        text: "The infrastructure project BuildHorizon completed for our municipality was done with exceptional care for both the environment and the community's needs.",
        author: "Michael Williams",
        position: "City Manager, Riverside"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-16 bg-construction-blue text-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say about working with BuildHorizon.
                    </p>
                </div>
                <div className="relative max-w-3xl mx-auto">
                    <Card className="bg-construction-blue-light border-none">
                        <CardContent className="p-8 md:p-12 text-center">
                            <svg
                                className="w-12 h-12 mx-auto mb-6 text-construction-orange/60"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-xl mb-6">
                                {testimonials[activeIndex].text}
                            </p>
                            <div className="font-bold text-lg">{testimonials[activeIndex].author}</div>
                            <div className="text-construction-orange">{testimonials[activeIndex].position}</div>
                        </CardContent>
                    </Card>
                    <div className="flex justify-center mt-8 space-x-4">
                        <button
                            onClick={prevTestimonial}
                            className="p-2 rounded-full bg-construction-blue-light hover:bg-construction-orange/20 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="p-2 rounded-full bg-construction-blue-light hover:bg-construction-orange/20 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;