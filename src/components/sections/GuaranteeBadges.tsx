"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, CheckCircle } from "lucide-react";

const badges = [
    {
        icon: Clock,
        title: "On-Time Delivery",
        description: "100% project delivery guarantee",
    },
    {
        icon: Shield,
        title: "Secure Systems",
        description: "Enterprise-grade security",
    },
    {
        icon: Award,
        title: "Practical Training",
        description: "Real-world project experience",
    },
    {
        icon: CheckCircle,
        title: "Quality Assured",
        description: "Rigorous testing standards",
    },
];

export function GuaranteeBadges() {
    return (
        <section className="py-16 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

            <div className="container-custom relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Our <span className="gradient-text">Commitment</span>
                    </h2>
                    <p className="text-muted-foreground">
                        What you can expect when working with us
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {badges.map((badge, index) => {
                        const Icon = badge.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                                </div>
                                <h3 className="font-semibold text-sm md:text-base mb-2">
                                    {badge.title}
                                </h3>
                                <p className="text-xs md:text-sm text-muted-foreground">
                                    {badge.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
