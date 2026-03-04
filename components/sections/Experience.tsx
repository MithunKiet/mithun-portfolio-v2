"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "Manager",
        company: "Haier Appliances India Pvt Ltd",
        location: "Noida, UP",
        date: "Apr 2024 – Present",
        description: "Lead technology-driven digital transformation projects within manufacturing. Developed an enterprise-grade 'Smart Documentation Application' to digitize over 40 QA and production checklists, reducing paper consumption by thousands of sheets monthly. Manage cross-functional teams and multi-tier approval workflows.",
        tech: ["ASP.NET Core", "C#", "Angular", "SQL Server", "REST API"]
    },
    {
        role: "Senior Programmer",
        company: "Path Infotech Ltd.",
        location: "Noida, UP",
        date: "Mar 2023 – Apr 2024",
        description: "Developed scalable applications using C#, ASP.NET, and Angular. Participated in code reviews and debugging to improve software quality and reliability. Collaborated on engineering best practices and knowledge sharing across teams.",
        tech: ["C#", "ASP.NET", "Angular", "Code Review"]
    },
    {
        role: "Senior Software Engineer",
        company: "Chetu, Inc.",
        location: "Noida, UP",
        date: "May 2021 – Mar 2023",
        description: "Developed software solutions using .NET technologies. Created technical specifications and user interfaces for mobile and web platforms. Focused on application performance optimization and modular architecture.",
        tech: [".NET", "C#", "Web API", "Performance Optimization"]
    },
    {
        role: "Software Engineer",
        company: "Enablesoft Solutions Pvt. Ltd.",
        location: "Gurugram, Haryana",
        date: "May 2018 – May 2021",
        description: "Specialized in .NET Framework development, writing clean and scalable code for various clients. Designed technical interfaces and architectural specifications. Repurposed web applications for mobile platforms.",
        tech: [".NET Framework", "C#", "HTML5", "CSS3"]
    },
    {
        role: "Internship Trainee",
        company: "Apex TG India Pvt Ltd",
        location: "Noida, UP",
        date: "Jan 2016 – Jun 2016",
        description: "Web Development Trainee focused on .NET Framework, HTML, and CSS. Gained foundational experience in building web applications and developing software solutions in a professional environment.",
        tech: [".NET Framework", "HTML", "CSS"]
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <p className="section-label">Experience</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
                        Professional journey
                    </h2>
                </motion.div>

                {/* Timeline — Left aligned, single column */}
                <div className="relative">
                    {/* Vertical gradient line */}
                    <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent" />

                    <div className="space-y-10">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative pl-8 md:pl-10 group"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1 top-2 w-[15px] h-[15px] md:w-[17px] md:h-[17px] rounded-full border-[3px] border-primary bg-background z-10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300" />

                                {/* Card */}
                                <div className="glass-card rounded-2xl p-6 md:p-8 group-hover:border-primary/30 transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                                        <div>
                                            <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                                                {exp.role}
                                            </h3>
                                            <p className="text-muted-foreground flex items-center gap-1.5 text-sm mt-1">
                                                <Briefcase size={14} className="text-primary/70" />
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                                <Calendar size={12} />
                                                {exp.date}
                                            </span>
                                            <span className="inline-flex items-center gap-1">
                                                <MapPin size={12} />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
