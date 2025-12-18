"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/site-config";

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const previous = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        What Our <span className="gradient-text">Community Says</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Real stories from students and clients who've transformed their careers and businesses
                    </p>
                </motion.div>

                {/* Testimonial Slider */}
                <div
                    className="max-w-4xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <Card className="glass-strong relative overflow-hidden">
                        <CardContent className="p-8 md:p-12">
                            <Quote
                                className="w-12 h-12 text-primary/20 mb-6"
                                style={{ transform: "scaleX(-1)" }}
                            />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    {/* Google-Style Star Rating */}
                                    <div className="flex items-center space-x-3 mb-6">
                                        <div className="flex items-center space-x-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-5 h-5 ${i < currentTestimonial.rating
                                                            ? "fill-yellow-400 text-yellow-400"
                                                            : "fill-muted text-muted"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm font-semibold text-muted-foreground">
                                            {currentTestimonial.rating}.0
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
                                        "{currentTestimonial.content}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center ring-2 ring-primary/20">
                                            <span className="text-xl font-bold text-primary-foreground">
                                                {currentTestimonial.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground text-lg">
                                                {currentTestimonial.name}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {currentTestimonial.role} • {currentTestimonial.company}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border/50">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={previous}
                                    className="hover:bg-primary/10 hover:scale-110 transition-all"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </Button>

                                {/* Dots */}
                                <div className="flex items-center space-x-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`h-2 rounded-full transition-all ${index === currentIndex
                                                    ? "bg-primary w-8"
                                                    : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                                                }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={next}
                                    className="hover:bg-primary/10 hover:scale-110 transition-all"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
