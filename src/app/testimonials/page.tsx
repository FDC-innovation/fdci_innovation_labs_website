"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart, Sparkles } from "lucide-react";
import { testimonials } from "@/data/site-config";

const gradientColors = [
    "from-[#4A90E2] via-[#5BA0E8] to-[#7DB8F5]",
    "from-[#7DB8F5] via-[#4A90E2] to-[#5BA0E8]",
    "from-[#5BA0E8] via-[#7DB8F5] to-[#4A90E2]",
];

export default function TestimonialsPage() {
    return (
        <div className="py-20">
            {/* Hero Section */}
            <section className="container-custom mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block mb-6"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#7DB8F5] flex items-center justify-center mx-auto shadow-lg">
                            <Heart className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Client <span className="gradient-text">Testimonials</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
                        Hear from students and businesses who have transformed with us. Real stories, real results.
                    </p>
                </motion.div>
            </section>

            {/* Testimonials Grid */}
            <section className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => {
                        const gradient = gradientColors[index % gradientColors.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                            >
                                <Card className="glass-strong h-full hover:glow-blue transition-all duration-300 border-2 border-transparent hover:border-[#4A90E2]/30 group overflow-hidden">
                                    {/* Background gradient effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                                    
                                    <CardContent className="p-8 relative z-10">
                                        {/* Quote Icon */}
                                        <motion.div
                                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className="mb-6"
                                        >
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                                                <Quote className="w-8 h-8 text-white" />
                                            </div>
                                        </motion.div>

                                        {/* Rating */}
                                        <div className="flex items-center space-x-1 mb-6">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                                    whileHover={{ scale: 1.2 }}
                                                >
                                                    <Star className="w-5 h-5 fill-primary text-primary drop-shadow-sm" />
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Content */}
                                        <p className="text-base text-foreground/90 mb-8 leading-relaxed font-medium">
                                            "{testimonial.content}"
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center space-x-4 pt-6 border-t border-border/50">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                                            >
                                                <span className="text-lg font-bold text-white">
                                                    {testimonial.name.charAt(0)}
                                                </span>
                                            </motion.div>
                                            <div className="flex-1">
                                                <div className="font-bold text-base text-foreground mb-1">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {testimonial.role}
                                                </div>
                                                {testimonial.company && (
                                                    <div className="text-xs text-primary/80 mt-1">
                                                        {testimonial.company}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
