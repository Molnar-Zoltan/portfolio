"use client";

import * as React from "react"
import { skills } from "@/data/skills";
import SkillsCard from "./SkillsCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";


export default function Skills() {

    return (
        <section id="skills" className="w-full flex flex-col items-center justify-center gap-10 min-h-[90vh]">
            <h2 className="pb-10">Skills</h2>

            {skills.map((category) => (
            <div
                key={category.category}
                className="w-full flex flex-col items-center gap-4"
            >
                <h3 className="text-xl">{category.category}</h3>
                <Carousel
                    opts={{ align: "start" }}
                    className="w-full max-w-60 md:max-w-xl"
                    >
                    <CarouselContent className="-ml-2">
                        {category.skills.map((skill, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-1/2 md:basis-1/4 pl-2"
                            >
                                <div className="hidden md:block">

                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="p-1">
                                                <SkillsCard skill={skill} />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-xl">{skill.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                
                                </div>

                                <div className="block md:hidden">

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <div className="p-1">
                                                <SkillsCard skill={skill} />
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent className="block md:hidden max-w-30 bg-neutral-800">
                                            <p className="text-md text-center text-gray-50">{skill.name}</p>
                                        </PopoverContent>
                                    </Popover>
                                
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            ))}

        </section>
    );
}
