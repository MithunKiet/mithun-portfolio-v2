"use client";

import { motion } from "framer-motion";

const skillRows = [
    {
        label: "Frontend & UI",
        items: ["Angular", "React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Angular Material"],
    },
    {
        label: "Backend & APIs",
        items: ["ASP.NET Core", "C#", ".NET Framework", "REST API", "Web API", "Entity Framework", "LINQ", "Microservices"],
    },
    {
        label: "Database & DevOps",
        items: ["SQL Server", "Database Design", "Stored Procedures", "GitHub", "Visual Studio", "Rider", "Azure DevOps", "CI/CD"],
    },
];

function SkillTag({ name }: { name: string }) {
    return (
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-border/50 bg-card/40 text-foreground/80 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default whitespace-nowrap">
            {name}
        </span>
    );
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
    // Double the items for seamless infinite scroll
    const doubled = [...items, ...items];

    return (
        <div className="relative overflow-hidden py-2 group">
            {/* Gradient masks on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
                className={`flex gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"
                    } group-hover:[animation-play-state:paused]`}
                style={{ width: "max-content" }}
            >
                {doubled.map((item, idx) => (
                    <SkillTag key={`${item}-${idx}`} name={item} />
                ))}
            </div>
        </div>
    );
}

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="section-label">Skills</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Technologies I work with
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                        A comprehensive toolkit for building scalable enterprise solutions end-to-end.
                    </p>
                </motion.div>

                {/* Skill marquee rows */}
                <div className="space-y-6">
                    {skillRows.map((row, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                        >
                            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 ml-1">{row.label}</p>
                            <MarqueeRow items={row.items} reverse={idx % 2 !== 0} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
