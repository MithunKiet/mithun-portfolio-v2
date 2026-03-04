"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only enable on non-touch devices
        if (typeof window !== "undefined" && "ontouchstart" in window) return;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
            );
            interactiveElements.forEach((el) => {
                el.addEventListener("mouseenter", () => setIsHovering(true));
                el.addEventListener("mouseleave", () => setIsHovering(false));
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        // Observe DOM changes to add listeners to new elements
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });
        addHoverListeners();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            observer.disconnect();
        };
    }, []);

    // Don't render on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return null;

    return (
        <>
            {/* Dot */}
            <div
                className="fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75"
                style={{
                    left: position.x - 4,
                    top: position.y - 4,
                    width: 8,
                    height: 8,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    opacity: isVisible ? 1 : 0,
                    transform: isHovering ? "scale(3)" : "scale(1)",
                }}
            />
            {/* Ring */}
            <div
                className="fixed pointer-events-none z-[9998] mix-blend-difference transition-all duration-300"
                style={{
                    left: position.x - 20,
                    top: position.y - 20,
                    width: 40,
                    height: 40,
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    borderRadius: "50%",
                    opacity: isVisible ? 1 : 0,
                    transform: isHovering ? "scale(1.5)" : "scale(1)",
                }}
            />
        </>
    );
}
