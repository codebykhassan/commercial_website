import { Card, CardContent } from "@/components/ui/card";

const AboutContent = () => {
    const stats = [
        { value: "25+", label: "Years Experience" },
        { value: "500+", label: "Projects Completed" },
        { value: "100+", label: "Team Members" },
        { value: "98%", label: "Client Satisfaction" },
    ];

    return (
        <div className="space-y-16">
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="mb-4">Our Story</h2>
                        <p className="mb-4 text-construction-gray-dark">
                            Founded in 1998, BuildHorizon has grown from a small residential contractor to one of the region's most respected construction firms. Our journey began with a simple mission: to deliver exceptional quality construction with integrity and accountability.
                        </p>
                        <p className="text-construction-gray-dark">
                            Over the past 25 years, we've built hundreds of commercial, residential, and infrastructure projects, each one reinforcing our reputation for excellence. Through economic ups and downs, we've maintained our commitment to quality craftsmanship and client satisfaction.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                                alt="Construction workers at job site"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-construction-orange rounded-lg -z-10"></div>
                    </div>
                </div>
            </section>

            <section className="bg-construction-gray-light py-12 rounded-lg">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <Card key={index} className="bg-white border-none">
                                <CardContent className="text-center p-6">
                                    <div className="text-4xl font-bold text-construction-orange mb-2">{stat.value}</div>
                                    <div className="text-sm text-construction-gray-dark font-medium">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <h2 className="mb-8 text-center">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <CardContent className="p-6">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-construction-orange/10 text-construction-orange mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Quality</h3>
                            <p className="text-construction-gray-dark">
                                We never compromise on quality. From materials to workmanship, we ensure the highest standards on every project.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-construction-orange/10 text-construction-orange mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 7h-9"></path>
                                    <path d="M14 17H5"></path>
                                    <circle cx="17" cy="17" r="3"></circle>
                                    <circle cx="7" cy="7" r="3"></circle>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Integrity</h3>
                            <p className="text-construction-gray-dark">
                                We operate with transparency and honesty in all our dealings, building trust with clients, partners, and employees.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-construction-orange/10 text-construction-orange mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m8 6 4-4 4 4"></path>
                                    <path d="M12 2v10.3"></path>
                                    <path d="M4 10c0 6 8 10 8 10s8-4 8-10a8 8 0 0 0-16 0Z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Innovation</h3>
                            <p className="text-construction-gray-dark">
                                We embrace new technologies and methods to improve efficiency, sustainability, and outcomes for our clients.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section>
                <h2 className="mb-8 text-center">Our Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Robert Johnson",
                            position: "Chief Executive Officer",
                            image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                        },
                        {
                            name: "Jennifer Smith",
                            position: "Chief Operations Officer",
                            image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                        },
                        {
                            name: "Michael Davis",
                            position: "Head of Projects",
                            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                        },
                    ].map((member, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <CardContent className="text-center p-6">
                                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                                <p className="text-construction-orange">{member.position}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutContent;