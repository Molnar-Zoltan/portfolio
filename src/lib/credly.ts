import { credlyBadgesJsonUrl } from "@/data/credly";
import type { Badge } from "@/types/about";

// Shape of the fields we use from Credly's public badges response.
interface CredlyItem {
    id?: string;
    image_url?: string;
    badge_template?: { name?: string; image_url?: string };
}

// Loads the public badges from Credly on the server (so there are no CORS issues).
// Any failure returns an empty list, and the UI falls back to a link to the Credly profile.
export async function getBadges(): Promise<Badge[]> {
    try {
        const res = await fetch(credlyBadgesJsonUrl, {
            headers: { Accept: "application/json" },
            next: { revalidate: 60 * 60 * 24 }, // refresh once a day
        });
        if (!res.ok) return [];

        const json = await res.json();
        if (!Array.isArray(json?.data)) return [];

        return (json.data as CredlyItem[])
            .map((item): Badge | null => {
                const id = item?.id;
                const name = item?.badge_template?.name;
                const imageUrl = item?.image_url ?? item?.badge_template?.image_url;
                if (!id || !name || !imageUrl) return null;
                return {
                    id,
                    name,
                    imageUrl,
                    verifyUrl: `https://www.credly.com/badges/${id}/public_url`,
                };
            })
            .filter((badge: Badge | null): badge is Badge => badge !== null);
    } catch {
        return [];
    }
}
