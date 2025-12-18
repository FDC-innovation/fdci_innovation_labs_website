"use client";

import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Brain, Leaf, Truck, Network } from "lucide-react";

const clientLogos = [
    {
        name: "Karmahealth.ai",
        category: "HealthTech AI",
        icon: HeartPulse,
        description: "AI-powered landing page"
    },
    {
        name: "Sybil",
        category: "Healthcare",
        icon: Stethoscope,
        description: "AWS infra & React patient portal"
    },
    {
        name: "Millow.ai",
        category: "AI Platform",
        icon: Brain,
        description: "UI & API development"
    },
    {
        name: "Soulspace",
        category: "Wellness Tech",
        icon: Leaf,
        description: "Digital wellness platform"
    },
    {
        name: "Wow Shippings",
        category: "Logistics",
        icon: Truck,
        description: "Logistics website"
    },
    {
        name: "FDC Ecosystem",
        category: "Enterprise",
        icon: Network,
        description: "Cloud & AI solutions"
    },
];

export function ClientLogos() {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                        Trusted By
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Startups & Businesses <span className="gradient-text">Globally</span>
                    </h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                        From Uttarakhand to the world - delivering cutting-edge solutions
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                >
                    {clientLogos.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-strong rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group min-h-[160px]"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                                transition={{ duration: 0.5 }}
                                className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4A90E2] to-[#7DB8F5] flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-[#4A90E2]/30 transition-all"
                            >
                                <client.icon className="w-8 h-8 text-white" />
                            </motion.div>
                            <p className="text-xs font-semibold text-center mb-1">
                                {client.name}
                            </p>
                            <p className="text-xs text-muted-foreground text-center">
                                {client.category}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-sm text-muted-foreground mt-8"
                >
                    From local businesses to global startups, we deliver results that matter
                </motion.p>
            </div>
        </section>
    );
}
