"use client";

import { Button } from "@/components/ui/button"
import { menuItems } from "@/data/menuItems";

export default function Navbar() {
    return (
        <nav 
            className="flex items-center justify-center p-4 text-gray-100 width-full font-semibold text-xl
                    bg-neutral-800/30 backdrop-blur-md border-white/20 border-b"
            >

            {menuItems.map(({ label, href }) => (
                <a key={href} href={href}>
                    <Button variant="ghost" className="font-inherit">
                        {label}
                    </Button>
                </a>
            ))}

        </nav>
    );
}