"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

const roles = [
    "Full Stack Developer",
    "ASP.NET Core Engineer",
    "Angular Developer",
    "Database Architect",
];

export default function HeroSection() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(
                () => {
                    setText(
                        isDeleting
                            ? currentRole.slice(0, text.length - 1)
                            : currentRole.slice(0, text.length + 1)
                    );
                },
                isDeleting ? 30 : 60
            );
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section id="home" className="relative min-h-screen w-full flex items-center pt-16">
            {/* Gradient orbs */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm mb-8"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                        <span className="text-sm text-muted-foreground font-medium">Available for opportunities</span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6"
                    >
                        Hi, I&apos;m{" "}
                        <span className="gradient-text">Mithun</span>
                        <br />
                        <span className="text-muted-foreground/70">Kumar</span>
                    </motion.h1>

                    {/* Typing role */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-10 mb-6"
                    >
                        <p className="text-xl md:text-2xl font-heading font-medium text-primary">
                            {text}
                            <span className="animate-pulse text-primary/60">|</span>
                        </p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
                    >
                        Building scalable enterprise applications with{" "}
                        <span className="text-foreground font-medium">ASP.NET Core</span>,{" "}
                        <span className="text-foreground font-medium">Angular</span>, and{" "}
                        <span className="text-foreground font-medium">SQL Server</span>.
                        Turning complex business problems into elegant software solutions.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-start gap-4 mb-16"
                    >
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="cursor-pointer group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 animate-glow-pulse"
                        >
                            View My Work
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </ScrollLink>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-1"
                    >
                        <span className="text-xs text-muted-foreground mr-3 uppercase tracking-widest">Find me</span>
                        <div className="w-8 h-px bg-border mr-3" />
                        {[
                            { icon: <Github size={18} />, href: "https://github.com/MithunKiet", label: "GitHub" },
                            { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/mithunkiet/", label: "LinkedIn" },
                            { icon: <Mail size={18} />, href: "mailto:mithunkiet@gmail.com", label: "Email" },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-1.5"
                >
                    <div className="w-1 h-1.5 rounded-full bg-muted-foreground/50" />
                </motion.div>
            </motion.div>
        </section>
    );
}
