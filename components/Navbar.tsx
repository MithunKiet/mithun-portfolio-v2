"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
];

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Track active section via IntersectionObserver
    useEffect(() => {
        const sectionIds = navLinks.map(l => l.to);
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    if (!mounted) {
        return (
            <nav className="fixed top-0 w-full z-50 bg-transparent">
                <div className="container mx-auto px-6 h-16 flex justify-between items-center">
                    <div className="font-heading text-xl font-bold tracking-tight">
                        <span className="text-foreground">mithun</span>
                        <span className="text-primary">.</span>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 h-16 flex justify-between items-center">
                {/* Logo */}
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer font-heading text-xl font-bold tracking-tight"
                >
                    <span className="text-foreground">mithun</span>
                    <span className="text-primary">.</span>
                </ScrollLink>

                {/* Desktop Nav — Centered Pill */}
                <div className="hidden md:flex items-center">
                    <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-muted/50 backdrop-blur-sm border border-border/30">
                        {navLinks.map((link) => (
                            <ScrollLink
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className={`relative cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeSection === link.to
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {activeSection === link.to && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-primary rounded-full"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </ScrollLink>
                        ))}
                    </div>
                </div>

                {/* Right side — Theme Toggle */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav — Full-screen overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-16 bg-background/95 backdrop-blur-xl md:hidden z-40"
                    >
                        <nav className="flex flex-col items-center justify-center h-full gap-2 -mt-16">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <ScrollLink
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`cursor-pointer text-2xl font-heading font-semibold px-6 py-3 rounded-xl transition-colors ${activeSection === link.to
                                                ? "text-primary bg-primary/10"
                                                : "text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        {link.name}
                                    </ScrollLink>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
