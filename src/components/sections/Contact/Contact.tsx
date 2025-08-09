import {
  Card,
} from "@/components/ui/card";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const email: string = "test@testmail.com";
const iconSize: string = "h-7 w-7";

export default function Contact() {
    return (
        <section id="contact" className="w-full flex flex-col items-center min-h-[85vh] gap-4">
            <h1>Contact</h1>
            <Card className="h-80 w-100 px-7 flex justify-between">
                <p className="text-center text-lg font-semibold">Get in Touch</p>
                <p className="text-center">
                    <span className="font-semibold">Email:</span> {email}
                </p>
                <div className="flex justify-between">
                    <FaLinkedin className={iconSize} />
                    <FaGithub className={iconSize} />
                </div>
            </Card>
        </section>
    );
}
