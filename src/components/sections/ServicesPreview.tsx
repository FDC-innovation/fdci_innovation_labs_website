"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Brain, Cloud, Server, Palette, Zap, Network } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/site-config";

const iconMap: Record<string, any> = {
    Code2,
    Brain,
    Cloud,
    Server,
    Palette,
    Zap,
    Network,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export function ServicesPreview() {
    return (
        <section className="py-20 relative">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-lg text-foreground max-w-2xl mx-auto">
                        From AI integration to cloud solutions, we provide end-to-end technology services
                        to transform your business
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.slice(0, 6).map((service) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <motion.div key={service.id} variants={cardVariants}>
                                <Card className="glass-strong h-full group hover:glow-blue transition-all duration-300 cursor-pointer">
                                    <CardHeader className="p-8">
                                        <div className="w-20 h-20 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <Icon className="w-10 h-10 text-primary-foreground" />
                                        </div>
                                        <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                                        <p className="text-base leading-relaxed text-foreground/90 mt-2">
                                            {service.shortDescription}
                                        </p>
                                    </CardHeader>
                                    <CardContent className="p-8 pt-0">
                                        <Link
                                            href={`/services#${service.id}`}
                                            className="inline-flex items-center text-base font-medium text-primary hover:text-primary/80 transition-colors group/link"
                                        >
                                            Learn more
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Button asChild size="lg" variant="outline" className="glass">
                        <Link href="/services">
                            View All Services
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
