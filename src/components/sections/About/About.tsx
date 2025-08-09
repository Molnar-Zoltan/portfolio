import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function About() {
    const accordionItemStyles: string = "lg:w-[50rem] sm:w-[25rem] w-[15rem] flex flex-col items-center";
    const accordionContentStyles: string = "flex flex-col gap-4 text-center";
    return (
        <section id="about" className="w-full flex flex-col items-center gap-4 min-h-[85vh]">
            <h1>About</h1>

            <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col items-center"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1" className={accordionItemStyles}>
                    <AccordionTrigger>Introduction</AccordionTrigger>
                    <AccordionContent className={accordionContentStyles}>
                        <p>
                            Test
                        </p>
                        <p>
                            Test
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className={accordionItemStyles}>
                    <AccordionTrigger>Education</AccordionTrigger>
                    <AccordionContent className={accordionContentStyles}>
                        <p>
                            Test
                        </p>
                        <p>
                            Test
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className={accordionItemStyles}>
                    <AccordionTrigger>Certifications</AccordionTrigger>
                    <AccordionContent className={accordionContentStyles}>
                        <p>
                            Test
                        </p>
                        <p>
                            Test
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className={accordionItemStyles}>
                    <AccordionTrigger>Experience</AccordionTrigger>
                    <AccordionContent className={accordionContentStyles}>
                        <p>
                            Test
                        </p>
                        <p>
                            Test
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className={accordionItemStyles}>
                    <AccordionTrigger>Hobbies</AccordionTrigger>
                    <AccordionContent className={accordionContentStyles}>
                        <p>
                            Test
                        </p>
                        <p>
                            Test
                        </p>
                    </AccordionContent> 
                </AccordionItem>
            </Accordion>

        </section>
    );
}
