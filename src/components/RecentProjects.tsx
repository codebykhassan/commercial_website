import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

const RecentProjects = () => {
    const projects = [
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            title: "Commercial Office Building",
            description: "Modern 12-story office complex with underground parking in downtown area.",
            category: "Commercial"
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            title: "Luxury Apartment Complex",
            description: "120-unit luxury apartment building with state-of-the-art amenities.",
            category: "Residential"
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            title: "Highway Expansion Project",
            description: "Major highway expansion adding two lanes and improving infrastructure.",
            category: "Infrastructure"
        }
    ];

    return (
        <section className="py-16 bg-construction-gray-light">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="mb-4">Our Recent Projects</h2>
                    <p className="text-lg text-construction-gray-dark max-w-2xl mx-auto">
                        Take a look at some of our recently completed construction projects across various sectors.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            imageUrl={project.imageUrl}
                            title={project.title}
                            description={project.description}
                            category={project.category}
                        />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Button
                        asChild
                        className="bg-construction-blue hover:bg-construction-blue-light text-white"
                    >
                        <a href="/about">View All Projects</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;