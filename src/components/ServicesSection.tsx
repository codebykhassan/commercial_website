import { Building, Truck, Home, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
    const services = [
        {
            icon: <Building size={48} className="text-construction-orange" />,
            title: "Commercial Construction",
            description: "Office buildings, retail spaces, and industrial facilities built to your specifications.",
        },
        {
            icon: <Home size={48} className="text-construction-orange" />,
            title: "Residential Projects",
            description: "Custom homes, apartment buildings, and housing developments for all needs.",
        },
        {
            icon: <Truck size={48} className="text-construction-orange" />,
            title: "Infrastructure Development",
            description: "Roads, bridges, and public works projects that connect communities.",
        },
    ];

    return (
        <section className="py-16">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="mb-4">Our Services</h2>
                    <p className="text-lg text-construction-gray-dark max-w-2xl mx-auto">
                        We offer a comprehensive range of construction services to meet your specific project needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6 pb-8 px-6 flex flex-col items-center">
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-construction-gray-dark mb-6">{service.description}</p>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="mt-auto border-construction-orange text-construction-orange hover:bg-construction-orange hover:text-white transition-colors"
                                >
                                    <a href="/contact" className="flex items-center gap-2">
                                        Learn More <ArrowRight size={16} />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;