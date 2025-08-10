
import * as React from "react"

import { projects } from "@/data/projects";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { FaGithub } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";


import ProjectsButton from "./ProjectsButton";


export default function Projects() {
    
    return (
        <section id="projects" className="w-full flex flex-col justify-center items-center gap-20 min-h-[90vh]">
            <h2>Projects</h2>
            <Carousel className="max-w-[15rem] md:max-w-[23rem] flex">
                <CarouselContent>
                    {projects.map((project, index) => (
                        <CarouselItem key={index}>
                            <div className="py-2">
                                <Card>
                                    <CardContent className="flex flex-col items-center justify-center gap-4">
                                        <div className="flex items-center">
                                            <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={300}
                                            height={200}
                                            className="w-full h-40 md:h-80 object-cover rounded-md "
                                        />
                                        </div>
                                        <h3 className="text-lg font-semibold text-center">{project.name}</h3>
                                        <div className="w-full flex justify-between mt-2">
  
                                                <ProjectsButton
                                                    Icon={FaGithub}
                                                    link={project.githubLink}
                                                    title="GitHub"
                                                />
                                                <ProjectsButton
                                                    Icon={CiGlobe}
                                                    link={project.liveLink}
                                                    title="Live Demo"
                                                />
                              
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}
