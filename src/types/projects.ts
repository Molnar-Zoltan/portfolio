import { IconType } from "react-icons";

export interface Project {
    name: string;
    stack: string;
    image: string;
    githubLink: string;
    liveLink: string;
}

export type ProjectButton = {
    Icon: IconType;
    link: string;
    title: string;
};