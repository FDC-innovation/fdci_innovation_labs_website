"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export function StatsSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Radial Glow Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                >
                    {siteConfig.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-center group"
                        >
                            <div className="glass-strong rounded-2xl p-8 hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
                                <AnimatedCounter value={stat.value} />
                                <div className="text-sm md:text-base text-muted-foreground mt-2">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
