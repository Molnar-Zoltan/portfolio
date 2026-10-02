"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CertificateList from "./CertificateList";
import BadgeGrid from "./BadgeGrid";
import type { Badge } from "@/types/about";

export default function CertificationsTabs({ badges }: { badges: Badge[] }) {
    return (
        <Tabs defaultValue="certificates" className="items-center">
            <TabsList aria-label="Certifications and badges">
                <TabsTrigger value="certificates">Certifications</TabsTrigger>
                <TabsTrigger value="badges">Credly Badges</TabsTrigger>
            </TabsList>

            <TabsContent value="certificates">
                <CertificateList />
            </TabsContent>

            <TabsContent value="badges" className="items-center">
                <BadgeGrid badges={badges} />
            </TabsContent>
        </Tabs>
    );
}
