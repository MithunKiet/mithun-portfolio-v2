import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-border/50 relative">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="font-heading text-lg font-bold tracking-tight">
                        <span className="text-foreground">mithun</span>
                        <span className="text-primary">.</span>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-1">
                        {[
                            { icon: <Github size={16} />, href: "https://github.com/MithunKiet", label: "GitHub" },
                            { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/mithunkiet/", label: "LinkedIn" },
                            { icon: <Mail size={16} />, href: "mailto:mithunkiet@gmail.com", label: "Email" },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Mithun Kumar · Built with ❤️ using Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
