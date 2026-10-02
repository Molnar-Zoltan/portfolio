"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { credlyProfileUrl } from "@/data/credly";
import type { Badge } from "@/types/about";

function BadgeImage({ badge }: { badge: Badge }) {
    return (
        // Plain <img>: badge images come from Credly's CDN and are already small.
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={badge.imageUrl}
            alt={badge.name}
            width={150}
            height={150}
            loading="lazy"
            className="size-24 sm:size-32 object-contain"
        />
    );
}

function BadgeItem({ badge }: { badge: Badge }) {
    return (
        <div className="flex flex-col items-center gap-2 pt-5">

            {/* Desktop: name on hover / keyboard focus */}
            <div className="hidden md:block">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button type="button" className="rounded-md p-1 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
                            <BadgeImage badge={badge} />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="text-base">{badge.name}</p>
                    </TooltipContent>
                </Tooltip>
            </div>

            {/* Mobile / tablet: name on tap */}
            <div className="block md:hidden">
                <Popover>
                    <PopoverTrigger asChild>
                        <button type="button" className="rounded-md p-1 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
                            <BadgeImage badge={badge} />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="max-w-60 bg-neutral-800 border-neutral-700">
                        <p className="text-center text-gray-50">{badge.name}</p>
                    </PopoverContent>
                </Popover>
            </div>

            <a
                href={badge.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify ${badge.name} on Credly`}
                className="text-sm font-semibold hover:underline active:underline underline-offset-4 hover:text-white"
            >
                Verify
            </a>
        </div>
    );
}

export default function BadgeGrid({ badges }: { badges: Badge[] }) {
    if (badges.length === 0) {
        return (
            <p>
                Badges couldn&apos;t be loaded right now.{" "}
                <a
                    href={credlyProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-4"
                >
                    View my badges on Credly
                </a>
            </p>
        );
    }

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[13rem] gap-6 justify-items-center max-h-[27rem] overflow-y-auto pr-2">
                {badges.map((badge) => (
                    <BadgeItem key={badge.id} badge={badge} />
                ))}
            </div>
            <a
                href={credlyProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline active:underline underline-offset-4"
            >
                View all badges on Credly
            </a>
        </>
    );
}
