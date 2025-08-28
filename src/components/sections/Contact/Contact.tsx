
import { Card } from "@/components/ui/card";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import ContactLink from "./ContactLink";
import ContactDialog from "./ContactDialog";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { sectionAnimation } from "@/lib/animations";


export default function Contact() {

    const email: string = process.env.email || "test@testmail.com";
    const linkedin: string = process.env.linkedin || "https://www.linkedin.com/";
    const github: string = process.env.github || "https://github.com/";
    const iconSize: string = "h-7.5 w-7.5";



    return (
        <AnimatedSection  {...sectionAnimation} id="contact" className="w-full flex flex-col justify-center items-center min-h-[90vh] gap-20">
            <h2>Contact</h2>
            <Card className="h-70 md:h-80 w-70 md:w-100 px-7 flex justify-between">
                <p className="text-center text-lg font-semibold">Get in Touch</p>
                <p className="text-center flex gap-1 justify-center items-center flex-col md:flex-row select-text">
                    <span className="font-semibold">Email:</span>
                    <ContactDialog email={email} />
                </p>
                <div className="flex justify-between">
                    <ContactLink Icon={FaLinkedin} link={linkedin} title="LinkedIn" iconSize={iconSize} />
                    <ContactLink Icon={FaGithub} link={github} title="GitHub" iconSize={iconSize} />
                </div>
            </Card>
        </AnimatedSection>
    );
}
