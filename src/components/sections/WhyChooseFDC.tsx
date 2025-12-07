"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
    {
        feature: "Real-World Projects",
        fdc: true,
        others: false,
    },
    {
        feature: "Industry Mentors",
        fdc: true,
        others: false,
    },
    {
        feature: "Placement Support",
        fdc: true,
        others: true,
    },
    {
        feature: "Cloud Infrastructure",
        fdc: true,
        others: false,
    },
    {
        feature: "AI Integration",
        fdc: true,
        others: false,
    },
    {
        feature: "Local Community",
        fdc: true,
        others: false,
    },
];

export function WhyChooseFDC() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Why Choose <span className="gradient-text">FDC Innovation Labs</span>?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We're not just another tech company. We're your growth partner.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass-strong rounded-2xl overflow-hidden">
                        {/* Header */}
                        <div className="grid grid-cols-3 gap-4 p-6 bg-muted/20 border-b border-border">
                            <div className="col-span-1"></div>
                            <div className="text-center font-semibold text-primary">
                                FDC Innovation Labs
                            </div>
                            <div className="text-center font-semibold text-muted-foreground">
                                Others
                            </div>
                        </div>

                        {/* Comparison Rows */}
                        {comparisons.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="grid grid-cols-3 gap-4 p-6 border-b border-border/50 last:border-0 hover:bg-muted/10 transition-colors"
                            >
                                <div className="font-medium">{item.feature}</div>
                                <div className="flex justify-center">
                                    {item.fdc ? (
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Check className="w-5 h-5 text-primary" />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                            <X className="w-5 h-5 text-muted-foreground" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    {item.others ? (
                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                            <Check className="w-5 h-5 text-muted-foreground" />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                            <X className="w-5 h-5 text-muted-foreground" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
