"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react";

import { Button } from "@/components/ui/button";


export default function ContactDialog({email} : {email: string}) {

    const [copySuccess, setCopySuccess] = useState("");

    const successText = "Copied!";
    const failureText = "Failed to copy!";

    const copyToClipboard = async () => {    
        try {          
            await navigator.clipboard.writeText(email);
            setCopySuccess(successText);          
            setTimeout(() => setCopySuccess(""), 3000);
        } 
        catch (err) 
        {       
            setCopySuccess(failureText);  
        }
    };

    return (
            <Dialog >
                <DialogTrigger className="text-gray-100 hover:text-gray-400">{email}</DialogTrigger>
                <DialogContent className="flex flex-col items-center gap-10 pb-4">
                    <DialogHeader className="flex flex-col items-center gap-10">
                        <DialogTitle>{email}</DialogTitle>
                        <DialogDescription className="flex flex-col items-center gap-6">
                            <Button type="submit" className="min-w-45">
                                <a href={`mailto:${email}`}>Send Email</a>
                            </Button>
                            <Button type="submit" className="min-w-45" onClick={copyToClipboard}>
                                Copy to Clipboard
                            </Button>
                            {
                                copySuccess && 
                                    copySuccess === successText ? 
                                        <span className="text-green-500 font-semibold">{copySuccess}</span>
                                    : 
                                        <span className="text-red-500 font-semibold">{copySuccess}</span>

                            }
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
    );
}