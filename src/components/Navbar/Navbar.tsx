import { Button } from "@/components/ui/button"
import { menuItems } from "@/data/menuItems";



export default function Navbar() {
    return (
        <nav 
            className={`hidden md:flex items-center justify-center p-4 text-gray-100 width-full font-semibold text-xl
                    bg-neutral-900/30 backdrop-blur-md border-white/20 border-b
                    fixed top-0 left-0 right-0 z-[999] h-[var(--navbar-height)]`}
            >

            {menuItems.map(({ label, href }) => (
                <a key={href} href={href}>
                    <Button 
                        variant="ghost" 
                            className="font-inherit active:bg-accent active:text-accent-foreground
                                       transition-colors duration-300 ease-in-out">
                        {label}
                    </Button>
                </a>
            ))}

        </nav>
    );
}