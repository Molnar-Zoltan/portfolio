import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import AnimatedSection from "@/components/ui/AnimatedSection";
import { sectionAnimation } from "@/lib/animations";
import CertifiacteList from "./CertificateList";
import { aboutHeading, accordionItems } from "@/data/about";

export default function About() {
    const accordionItemStyles: string = "lg:w-[50rem] sm:w-[25rem] w-[15rem] flex flex-col items-center";
    const accordionContentStyles: string = "flex flex-col gap-4 text-center";
    const accordionTriggerStyle: string = "text-[1.1rem] font-semibold";

    return (
        <AnimatedSection  {...sectionAnimation} id="about" className="w-full flex flex-col items-center justify-center gap-20 min-h-[90vh]">

            <h2>{aboutHeading}</h2>

            <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col items-center"
                defaultValue="item-1"
            >
                {accordionItems.map((item) => (
                    <AccordionItem key={item.value} value={item.value} className={accordionItemStyles}>
                        <AccordionTrigger className={accordionTriggerStyle}>{item.title}</AccordionTrigger>
                        <AccordionContent className={accordionContentStyles}>
                            {item.isCertificateList ? <CertifiacteList /> : <p>{item.content}</p>}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

        </AnimatedSection>
    );
}
