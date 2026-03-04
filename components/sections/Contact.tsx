"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">Contact</p>
                    <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Let&apos;s build something{" "}
                        <span className="gradient-text">great together</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        I&apos;m always open to discussing enterprise application development,
                        new opportunities, or software architecture challenges.
                    </p>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <a
                        href="mailto:mithunkiet@gmail.com"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                    >
                        <Mail size={20} />
                        Send me an email
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mithunkiet/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold border border-border hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5 transition-all duration-300"
                    >
                        <Linkedin size={20} />
                        Connect on LinkedIn
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </motion.div>

                {/* Info badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30">
                        <MapPin size={14} className="text-primary" />
                        Greater Noida, India
                    </span>
                    <a
                        href="https://github.com/MithunKiet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 hover:border-foreground/30 transition-colors"
                    >
                        <Github size={14} />
                        @MithunKiet
                    </a>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        Available for work
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
