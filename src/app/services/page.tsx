"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Brain, Cloud, Server, Palette, Zap, Network, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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

const gradientColors = [
    "from-[#4A90E2] via-[#5BA0E8] to-[#7DB8F5]",
    "from-[#7DB8F5] via-[#4A90E2] to-[#5BA0E8]",
    "from-[#5BA0E8] via-[#7DB8F5] to-[#4A90E2]",
];

export default function ServicesPage() {
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
                            <Sparkles className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Our <span className="gradient-text">Services</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
                        Simple, powerful solutions to help your business grow. No complicated tech talk—just results.
                    </p>
                </motion.div>
            </section>

            {/* Services List */}
            <section className="container-custom space-y-16">
                {services.map((service, index) => {
                    const Icon = iconMap[service.icon];
                    const gradient = gradientColors[index % gradientColors.length];
                    const isEven = index % 2 === 0;
                    
                    return (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="scroll-mt-24"
                        >
                            <Card className="glass-strong overflow-hidden border-2 border-transparent hover:border-[#4A90E2]/30 transition-all duration-300 group">
                                <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Left/Right Side - Info */}
                                    <motion.div
                                        className={`p-10 md:p-14 relative overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Background gradient effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                                        
                                        <div className="relative z-10">
                                            <motion.div
                                                whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                                                transition={{ duration: 0.5 }}
                                                className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
                                            >
                                                <Icon className="w-14 h-14 text-white drop-shadow-lg" />
                                            </motion.div>
                                            
                                            <CardTitle className="text-4xl md:text-5xl mb-6 font-bold">
                                                {service.title}
                                            </CardTitle>
                                            
                                            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
                                                {service.description}
                                            </p>

                                            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                                <Button asChild className="glow-blue w-fit group/btn">
                                                    <Link href="/book-consultation" className="flex items-center">
                                                        Talk to an Expert
                                                        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                                    </Link>
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Right/Left Side - Details */}
                                    <CardContent className={`p-10 md:p-14 bg-gradient-to-br from-muted/30 to-muted/10 relative ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                                        {/* Decorative pattern */}
                                        <div className="absolute inset-0 opacity-5">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A90E2] rounded-full blur-3xl" />
                                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#7DB8F5] rounded-full blur-3xl" />
                                        </div>
                                        
                                        <div className="space-y-10 relative z-10">
                                            {/* Benefits */}
                                            <motion.div
                                                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                            >
                                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                                    <div className={`w-2 h-8 bg-gradient-to-b ${gradient} rounded-full mr-4`} />
                                                    What You Get
                                                </h3>
                                                <ul className="space-y-5">
                                                    {service.benefits.map((benefit, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                                            className="flex items-start space-x-4 group/item"
                                                        >
                                                            <motion.div
                                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                                transition={{ duration: 0.5 }}
                                                                className="mt-1"
                                                            >
                                                                <CheckCircle2 className={`w-7 h-7 text-[#4A90E2] flex-shrink-0 group-hover/item:text-[#7DB8F5] transition-colors`} />
                                                            </motion.div>
                                                            <span className="text-lg leading-relaxed text-foreground/90 pt-1">{benefit}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>

                                            {/* Process */}
                                            <motion.div
                                                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.4 }}
                                                className="pt-6 border-t border-foreground/10"
                                            >
                                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                                    <div className={`w-2 h-8 bg-gradient-to-b ${gradient} rounded-full mr-4`} />
                                                    How We Do It
                                                </h3>
                                                <div className="space-y-5">
                                                    {service.process.map((step, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                                            className="flex items-center space-x-4 group/step"
                                                        >
                                                            <motion.div
                                                                whileHover={{ scale: 1.15 }}
                                                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover/step:shadow-xl transition-shadow`}
                                                            >
                                                                <span className="text-lg font-bold text-white">{i + 1}</span>
                                                            </motion.div>
                                                            <span className="text-lg leading-relaxed text-foreground/90">{step}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </section>

            {/* CTA Section */}
            <section className="container-custom mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative glass-strong rounded-3xl p-10 md:p-16 text-center overflow-hidden"
                >
                    {/* Animated background gradient */}
                    <motion.div
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/10 via-[#7DB8F5]/10 to-[#4A90E2]/10 bg-[length:200%_100%]"
                    />
                    
                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="inline-block mb-6"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#7DB8F5] flex items-center justify-center mx-auto shadow-lg">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                        </motion.div>
                        
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg md:text-xl text-foreground/90 mb-10 max-w-2xl mx-auto">
                            Let's talk about your project. We'll help you find the perfect solution—no complicated tech talk, just clear answers.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button asChild size="lg" className="glow-blue text-lg px-8 py-6">
                                    <Link href="/book-consultation" className="flex items-center">
                                        Book Free Consultation
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button asChild size="lg" variant="outline" className="glass text-lg px-8 py-6 border-2">
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
