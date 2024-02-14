"use client"

import Image from "next/image";
import React from "react";


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function AboutMe() {
    const infos = [
        { title: "Location", icon: "", desc: "Porto, Matosinhos" },
        { title: "Nationality", icon: "", desc: "Portuguese" },
        { title: "Study", icon: "", desc: "University of Porto" },
        { title: "Age", icon: "", desc: "I'm 25" },
        { title: "Interests", icon: "", desc: "Video Games, Books, Movies, Gym, Anime" }
    ]

    const [value, setValue] = React.useState("");




    return (
        <section id="about" className="bg-primary w-full border-b md:border-0">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold pt-6 mb-6 text-white">About Me</h2>
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="mb-4 md:mb-0 md:w-1/3 relative w-full md:w-1/2">
                        <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                            <Image
                                src="/images/me.jpg"
                                alt="Image"
                                className="rounded-md"
                                width={300} // Set a suitable width
                                height={300} // Set a suitable height
                            />
                        </div>
                    </div>

                    <div className="ml-4 mt-10 md:w-1/2 text-white overflow-hidden" style={{ height: "600px", transition: "height 0.3s ease" }}>
                        <p className="text-white">
                            From my earliest years, a fervent passion for video games and
                            computers ignited within me, steering my journey towards becoming a
                            game and software developer today. Despite my relative lack of
                            experience, I confidently characterize my programming skills and
                            principles as robust. Fueled by a natural aptitude for
                            problem-solving, I've honed the craft of a capable programmer. The
                            prospect of creating groundbreaking software and games fills me with
                            anticipation, and I am eager to contribute to the realm of
                            innovation in this dynamic field.
                        </p>

                        <Accordion className="grid grid-cols-2 gap-4" type="single" value={value} onValueChange={setValue} collapsible>
                            {infos.map((info, idy) => (
                                <div className="container p-3"
                                    onMouseEnter={() => setValue(idy.toString())}
                                    onMouseLeave={() => setValue("")}>
                                    <AccordionItem
                                        className="h-18"
                                        key={idy}
                                        value={idy.toString()}

                                    >
                                        <AccordionTrigger>{info.icon} {info.title}</AccordionTrigger>
                                        <AccordionContent>{info.desc}</AccordionContent>
                                    </AccordionItem>
                                </div>

                            ))}
                        </Accordion>

                    </div>
                </div>
            </div>
        </section >
    );
}





