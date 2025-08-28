import AnimatedSection from "@/components/ui/AnimatedSection";
import { sectionAnimation } from "@/lib/animations";


export default function Home() {
    return (
        <AnimatedSection  {...sectionAnimation} id="home" className="min-h-[95vh] flex flex-col items-center justify-center gap-4 w-full">
            <h1>Welcome!</h1>
            <h2 className="!font-medium">Feel free to look around!</h2>
        </AnimatedSection>
    );
}
