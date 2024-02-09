import Image from "next/image";
import React from "react"; // While importing React is not necessary for JSX in recent React versions, it's kept for potential use of React features.

// Define the interface for the component's props
interface ExperienceCardProps {
    title: string;
    period: string;
    description: string;
    alt: string;
    src: string;
}

// Directly type the props in the function signature
const ExperienceCard = ({ title, src, alt, period, description }: ExperienceCardProps) => {
    return (
        <div className="mb-2 flex items-center">
            <div className="flex flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt={alt} height={30} width={30} />
            </div>
            <div className="ml-4">
                <div className="text-m ">{title}</div>
                <div className="text-xs text-gray-500">{period}</div>
                <p className="text-xs">{description}</p>
            </div>
        </div>
    );
};

export default ExperienceCard;
