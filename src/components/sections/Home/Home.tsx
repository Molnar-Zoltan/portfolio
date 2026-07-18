import AnimatedSection from "@/components/ui/AnimatedSection";
import { sectionAnimation } from "@/lib/animations";
import { homeHeading, homeSubheading } from "@/data/home";


export default function Home() {
    return (
        <AnimatedSection  {...sectionAnimation} id="home" className="min-h-[95vh] flex flex-col items-center justify-center gap-4 w-full">
            <h1>{homeHeading}</h1>
            <h2 className="!font-medium">{homeSubheading}</h2>
        </AnimatedSection>
    );
}
