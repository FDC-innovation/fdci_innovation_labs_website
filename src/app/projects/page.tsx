"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { projects } from "@/data/site-config";
import { ExternalLink, Rocket, TrendingUp, CheckCircle2, Code, Sparkles } from "lucide-react";

const gradientColors = [
    "from-[#4A90E2] via-[#5BA0E8] to-[#7DB8F5]",
    "from-[#7DB8F5] via-[#4A90E2] to-[#5BA0E8]",
    "from-[#5BA0E8] via-[#7DB8F5] to-[#4A90E2]",
];

export default function ProjectsPage() {
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
                            <Rocket className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Our <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
                        Real-world solutions that drive business results. See how we've helped companies transform with technology.
                    </p>
                </motion.div>
            </section>

            {/* Projects Grid */}
            <section className="container-custom">
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const gradient = gradientColors[index % gradientColors.length];
                        return (
                        <motion.div
                            key={index}
                                initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                        >
                                <Card className="glass-strong h-full group hover:glow-blue transition-all duration-300 border-2 border-transparent hover:border-[#4A90E2]/30 overflow-hidden">
                                    {/* Background gradient effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                                    
                                    <CardHeader className="relative z-10 p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className={`px-4 py-2 rounded-xl bg-gradient-to-r ${gradient} text-white text-sm font-semibold shadow-lg`}
                                            >
                                            {project.industry}
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.2, rotate: 45 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </motion.div>
                                        </div>
                                        
                                        <CardTitle className="text-3xl md:text-4xl mb-4 font-bold">
                                            {project.title}
                                        </CardTitle>
                                        
                                        <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                                        {project.description}
                                        </p>
                                </CardHeader>
                                    
                                    <CardContent className="relative z-10 p-8 pt-0">
                                    {/* Tech Stack */}
                                        <div className="mb-6">
                                            <div className="flex items-center space-x-2 mb-4">
                                                <Code className="w-5 h-5 text-primary" />
                                                <h4 className="text-lg font-bold">Tech Stack</h4>
                                            </div>
                                            <div className="flex flex-wrap gap-3">
                                            {project.tech.map((tech, i) => (
                                                    <motion.span
                                                    key={i}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                                        whileHover={{ scale: 1.1 }}
                                                        className={`px-4 py-2 rounded-lg bg-gradient-to-r ${gradient} bg-opacity-10 border border-primary/20 text-sm font-medium text-foreground hover:bg-opacity-20 transition-all`}
                                                >
                                                    {tech}
                                                    </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Result */}
                                        <div className="pt-6 border-t border-border/50">
                                            <div className="flex items-center space-x-2 mb-3">
                                                <TrendingUp className="w-5 h-5 text-primary" />
                                                <h4 className="text-lg font-bold text-primary">Results</h4>
                                            </div>
                                            <div className="flex items-start space-x-2">
                                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                <p className="text-base text-foreground/90 leading-relaxed">{project.result}</p>
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
