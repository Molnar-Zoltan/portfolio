"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { menuItems } from "@/data/menuItems";
import HamburgerButton from "./HamburgerButton";



export default function NavbarMobile() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    return (
        <nav 
            className={`flex flex-col md:hidden justify-center p-4 text-gray-100 width-full font-semibold text-xl
                    bg-neutral-900/30 backdrop-blur-md border-white/20 border-b
                    fixed top-0 left-0 right-0 z-[999] min-h-[var(--navbar-height)] gap-6`}
            >
            <HamburgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            
            {
                isMenuOpen &&
                <div className="flex flex-col gap-2">
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
                </div>
            }


        </nav>
    );
}