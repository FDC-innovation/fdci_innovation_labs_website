"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Training", href: "/training" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? "glass-strong border-b border-border/50 shadow-lg shadow-primary/5" 
                    : "bg-background/80 backdrop-blur-sm border-b border-transparent"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20 md:h-24">
                    {/* Logo - Premium design */}
                    <Link 
                        href="/" 
                        className="flex items-center space-x-3 md:space-x-4 group"
                    >
                        <div className="relative">
                            {/* Animated glow effect */}
                            <div className="absolute inset-0 bg-[#4A90E2]/30 blur-2xl rounded-2xl group-hover:bg-[#4A90E2]/40 transition-all duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/20 via-[#7DB8F5]/20 to-[#4A90E2]/20 blur-xl rounded-2xl group-hover:from-[#4A90E2]/30 group-hover:via-[#7DB8F5]/30 group-hover:to-[#4A90E2]/30 transition-all duration-300" />
                            
                            {/* Logo container with premium styling */}
                            <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border-2 border-[#4A90E2]/30 rounded-lg p-2.5 md:p-3 shadow-xl shadow-[#4A90E2]/10 transition-all duration-300 group-hover:border-[#4A90E2]/60 group-hover:shadow-2xl group-hover:shadow-[#4A90E2]/30 group-hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/5 to-[#7DB8F5]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <Image
                                    src="/logo-fixed.svg"
                                    alt="FDC Innovation Labs"
                                    width={72}
                                    height={72}
                                    className="relative h-14 w-14 md:h-16 md:w-16 object-contain rounded-lg drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text group-hover:glow-text-blue transition-all tracking-tight">
                                FDC Innovation Labs
                            </div>
                            <div className="text-xs md:text-sm text-muted-foreground font-semibold tracking-wide uppercase">
                                AI Hub • Community in Uttarakhand
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-all relative group rounded-lg hover:bg-primary/5"
                            >
                                {item.name}
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button & Theme Toggle */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <ThemeToggle />
                        <Button asChild className="glow-blue hover:scale-105 transition-transform">
                            <Link href="/book-consultation">Book Consultation</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass-strong border-t border-border/50"
                    >
                        <div className="container-custom py-6 space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 space-y-3">
                                <div className="flex justify-center">
                                    <ThemeToggle />
                                </div>
                                <Button asChild className="w-full glow-blue">
                                    <Link href="/book-consultation">Book Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
