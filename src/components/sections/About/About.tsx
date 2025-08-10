import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function About() {

    const accordionItemStyles: string = "lg:w-[50rem] sm:w-[25rem] w-[15rem] flex flex-col items-center";
    const accordionContentStyles: string = "flex flex-col gap-4 text-center";
    const accordionTriggerStyle: string = "text-[1.1rem] font-semibold";

    return (
        <section id="about" className="w-full flex flex-col items-center justify-center gap-20 min-h-[90vh]">

            <h2>About</h2>

            <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col items-center"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1" className={accordionItemStyles}>
                    <AccordionTrigger className={accordionTriggerStyle}>Introduction</AccordionTrigger>
                    <AccordionContent className={accordionContentStyles}>
                        <p>
                            I&apos;m Zoltán Molnár, a developer focused mostly on front-end, currently building skills to grow as a Full-Stack Developer.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className={accordionItemStyles}>
                    <AccordionTrigger className={accordionTriggerStyle}>Education</AccordionTrigger>
                    <AccordionContent className={accordionContentStyles}>
                        <p>
                            I graduated from John von Neumann University in Kecskemét back in 2019, where I studied Computer Science (BSc), specializing in mobile development.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className={accordionItemStyles}>
                    <AccordionTrigger className={accordionTriggerStyle}>Certifications</AccordionTrigger>
                    <AccordionContent className={accordionContentStyles}>
                        <a href="https://www.coursera.org/account/accomplishments/professional-cert/2F08KTWPRR7K">
                            <p className="flex flex-col">
                                <span className="font-semibold">Meta Front-End Developer Professional Certificate</span>
                                <span className="italic">Issued by Meta on Coursera — May 2025</span>
                            </p>
                        </a>
                        <a href="https://www.coursera.org/account/accomplishments/professional-cert/VYPADOQE9I33">
                            <p className="flex flex-col">
                                <span className="font-semibold">IBM Back-End JavaScript Developer Professional Certificate </span>
                                <span className="italic">Issued by IBM on Coursera — June 2025 </span>
                            </p>
                        </a>
                        <a href="https://www.coursera.org/account/accomplishments/professional-cert/AIBFH43DRH7M">
                            <p className="flex flex-col">
                                <span className="font-semibold">IBM Full-Stack JavaScript Developer Professional Certificate </span>
                                <span className="italic">Issued by IBM on Coursera — June 2025 </span>
                            </p>
                        </a>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className={accordionItemStyles}>
                    <AccordionTrigger className={accordionTriggerStyle}>Hobbies</AccordionTrigger>
                    <AccordionContent className={accordionContentStyles}>
                        <p>
                            In my spare time, I enjoy playing video games and experimenting with new coding projects. 
                        </p>
                    </AccordionContent> 
                </AccordionItem>
            </Accordion>

        </section>
    );
}
