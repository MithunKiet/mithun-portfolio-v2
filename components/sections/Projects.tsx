"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, FolderOpen } from "lucide-react";

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    topics: string[];
    fork: boolean;
}

const languageColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    "C#": "#178600",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
};

function SkeletonCard() {
    return (
        <div className="glass-card rounded-2xl p-6 animate-pulse">
            <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-muted" />
                <div className="flex gap-2">
                    <div className="w-5 h-5 rounded bg-muted" />
                    <div className="w-5 h-5 rounded bg-muted" />
                </div>
            </div>
            <div className="h-5 w-3/4 bg-muted rounded mb-3" />
            <div className="h-4 w-full bg-muted rounded mb-2" />
            <div className="h-4 w-2/3 bg-muted rounded mb-6" />
            <div className="flex gap-2">
                <div className="h-6 w-16 bg-muted rounded-md" />
                <div className="h-6 w-12 bg-muted rounded-md" />
            </div>
        </div>
    );
}

export default function ProjectsSection() {
    const [projects, setProjects] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://api.github.com/users/MithunKiet/repos?sort=updated&per_page=12");
                if (response.ok) {
                    const data = await response.json();
                    const repos = data.filter((repo: Repository) => !repo.fork).slice(0, 6);
                    setProjects(repos);
                }
            } catch (error) {
                console.error("Failed to fetch projects", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const languages = ["All", ...Array.from(new Set(projects.map(p => p.language).filter(Boolean)))];

    const filteredProjects = projects.filter(project => {
        if (filter === "All") return true;
        return project.language === filter;
    });

    return (
        <section id="projects" className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <p className="section-label">Projects</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Featured work
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                        Open source projects and applications pulled directly from my GitHub.
                    </p>
                </motion.div>

                {/* Filter tabs */}
                {!loading && projects.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-2 mb-10"
                    >
                        {languages.map(lang => (
                            <button
                                key={lang}
                                onClick={() => setFilter(lang)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${filter === lang
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </motion.div>
                )}

                {/* Project grid */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[...Array(6)].map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                ) : (
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-card gradient-border rounded-2xl p-6 flex flex-col h-full group"
                                >
                                    {/* Top row */}
                                    <div className="flex justify-between items-start mb-5">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <FolderOpen size={20} />
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href={project.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                                            >
                                                <Github size={16} />
                                            </a>
                                            <a
                                                href={project.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Project name */}
                                    <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                        {project.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
                                        {project.description || "No description provided for this repository."}
                                    </p>

                                    {/* Bottom */}
                                    <div className="mt-auto pt-4 border-t border-border/30">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                {project.language && (
                                                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                        <span
                                                            className="w-2.5 h-2.5 rounded-full"
                                                            style={{ backgroundColor: languageColors[project.language] || "#888" }}
                                                        />
                                                        {project.language}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Star size={12} /> {project.stargazers_count}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <GitFork size={12} /> {project.forks_count}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
