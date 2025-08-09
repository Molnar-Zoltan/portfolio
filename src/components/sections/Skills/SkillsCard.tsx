import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function SkillsCard({skill} : { skill: { image: string; name: string } }) {

    const placeholderImage = "/images/icons/placeholder.svg"; // Default image if loading fails
    return (
        <Card className="h-32 w-full flex items-center justify-center p-1 overflow-hidden">
            <Image
                src={skill.image}
                alt={skill.name}
                width={100}
                height={100}
                className="object-contain rounded-lg"
                onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = placeholderImage;
                }}
            />
        </Card>
    );
}