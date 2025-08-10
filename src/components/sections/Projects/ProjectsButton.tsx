
import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

type ProjectButton = {
    Icon: IconType;
    link: string;
    title: string;
};

export default function ProjectsButton({ Icon, link, title }: ProjectButton) {
    return (
            <Button
                variant="outline"
                className="!px-7 md:!px-10 !h-auto !w-auto flex items-center justify-center" asChild
            >
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                >
                    <Icon className="!w-4 !h-4 md:!w-7 md:!h-7 shrink-0" />
                </a>
            </Button>
    );
}

