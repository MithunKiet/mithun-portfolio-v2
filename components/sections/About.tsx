"use client";

import { motion } from "framer-motion";
import { Server, Code, Database, Terminal } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Built", value: "30+" },
    { label: "Technologies", value: "15+" },
];

const features = [
    {
        icon: <Server size={24} />,
        title: "Backend Architecture",
        desc: "ASP.NET Core & C# — designing scalable, maintainable APIs and microservices for enterprise applications.",
    },
    {
        icon: <Code size={24} />,
        title: "Frontend Engineering",
        desc: "Angular & TypeScript — building responsive, dynamic user interfaces with clean component architecture.",
    },
    {
        icon: <Database size={24} />,
        title: "Database Design",
        desc: "SQL Server optimization — crafting efficient schemas, stored procedures, and data-driven solutions.",
    },
    {
        icon: <Terminal size={24} />,
        title: "Clean Code Practices",
        desc: "Code reviews, debugging, and rigorous testing — delivering reliable, production-ready software.",
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <p className="section-label">About</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
                        Enterprise software developer<br />
                        <span className="text-muted-foreground">who cares about the craft.</span>
                    </h2>
                </motion.div>

                {/* Bio card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="glass-card rounded-2xl p-8 md:p-10 mb-8 border-l-2 border-l-primary"
                >
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-3xl">
                        <p>
                            I am a passionate Full Stack Software Developer with extensive experience in
                            architecting and developing enterprise-grade applications. I specialize in building
                            robust backends with <span className="text-foreground font-medium">ASP.NET Core</span> and{" "}
                            <span className="text-foreground font-medium">C#</span>, seamlessly integrated with
                            dynamic, responsive frontends using <span className="text-foreground font-medium">Angular</span>.
                        </p>
                        <p>
                            I excel at designing scalable <span className="text-foreground font-medium">SQL Server</span>{" "}
                            databases and RESTful APIs that power complex business processes. I am dedicated to
                            delivering clean, maintainable code through rigorous debugging and code reviews.
                        </p>
                    </div>
                </motion.div>

                {/* Feature cards — Bento grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="glass-card gradient-border rounded-2xl p-6 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h4 className="font-heading font-semibold text-base mb-2">
                                {feature.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-12 md:gap-20"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <p className="font-heading text-4xl md:text-5xl font-bold gradient-text">
                                {stat.value}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
