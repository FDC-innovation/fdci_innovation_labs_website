"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
    return (
        <section className="py-20 relative">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative glass-strong rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
                >
                    {/* Background Effects */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Ready to Transform Your Business?</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Let's Build Something{" "}
                            <span className="gradient-text">Amazing Together</span>
                        </h2>

                        <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
                            Whether you're looking to build intelligent software, migrate to the cloud, or
                            upskill your team, we're here to help you succeed.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg" className="glow-blue group">
                                <Link href="/book-consultation">
                                    Book Free Consultation
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="glass">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
