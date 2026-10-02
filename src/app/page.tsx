import Home from "@/components/sections/Home/Home";
import About from "@/components/sections/About/About";
import Skills from "@/components/sections/Skills/Skills";
import Projects from "@/components/sections/Projects/Projects";
import Contact from "@/components/sections/Contact/Contact";

// Re-generate the page daily so the Credly badges stay fresh, even if a fetch failed at build time.
export const revalidate = 86400;

export default function Page() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-[var(--navbar-height)]">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
