import { IconType } from "react-icons";

type ContactLinkProps = {
    Icon: IconType;
    link: string;
    title: string;
    iconSize: string;
};

export default function ContactLink({ Icon, link, title, iconSize }: ContactLinkProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" title={title} className="hover:text-gray-50">
            <Icon className={iconSize} />
        </a>
    )
}