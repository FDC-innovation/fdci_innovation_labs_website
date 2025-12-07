"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGridBackground } from "@/components/ui/AnimatedGridBackground";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background to cover global grid with smooth gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/98 -z-20" />
            {/* Animated Background */}
            <AnimatedGridBackground />

            <div className="container-custom relative">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge - Enhanced */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-full glass-strong border-2 border-[#4A90E2]/40 mb-8 hover:scale-105 hover:border-[#4A90E2]/60 transition-all shadow-lg shadow-[#4A90E2]/10 hover:shadow-xl hover:shadow-[#4A90E2]/20"
                    >
                        <div className="relative">
                            <Sparkles className="w-4 h-4 text-[#4A90E2] animate-pulse" />
                            <div className="absolute inset-0 bg-[#4A90E2]/20 blur-lg" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                            Uttarakhand's First AI Innovation Community
                        </span>
                    </motion.div>

                    {/* Main Heading - Enhanced */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
                    >
                        Transform Ideas Into{" "}
                        <span className="gradient-text inline-block">
                            Intelligent Solutions
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        We build intelligent software, scalable cloud systems, and empower students with
                        real-world AI & cloud skills. From local minds to global impact.
                    </motion.p>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="flex flex-wrap items-center justify-center gap-6 mb-10"
                    >
                        <div className="flex items-center space-x-2 text-base text-foreground">
                            <Zap className="w-5 h-5 text-primary" />
                            <span>Fast Delivery</span>
                        </div>
                        <div className="flex items-center space-x-2 text-base text-foreground">
                            <Users className="w-5 h-5 text-primary" />
                            <span>50+ Students Trained</span>
                        </div>
                        <div className="flex items-center space-x-2 text-base text-foreground">
                            <Target className="w-5 h-5 text-primary" />
                            <span>100% Practical Learning</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="glow-blue group text-base px-8 py-6 hover:scale-105 transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30"
                        >
                            <Link href="/book-consultation">
                                Book Free Consultation
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="glass-strong text-base px-8 py-6 hover:scale-105 transition-all border-2 hover:border-primary/40 hover:bg-primary/5 shadow-lg hover:shadow-xl"
                        >
                            <Link href="/services">Explore Our Services</Link>
                        </Button>
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 text-sm text-muted-foreground"
                    >
                        Powered by{" "}
                        <span className="text-primary font-semibold">Fast Data Connect</span>
                        {" "}• Enterprise-Grade Solutions
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                    />
                </div>
            </motion.div>
        </section>
    );
}
