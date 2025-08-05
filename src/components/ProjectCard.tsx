import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    description: string;
    category: string;
}

const ProjectCard = ({ imageUrl, title, description, category }: ProjectCardProps) => {
    return (
        <Card className="overflow-hidden group cursor-pointer transition-all hover:shadow-lg">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-construction-orange text-white text-sm font-medium py-1 px-3 rounded">
                    {category}
                </div>
            </div>
            <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-construction-gray-dark">{description}</p>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;