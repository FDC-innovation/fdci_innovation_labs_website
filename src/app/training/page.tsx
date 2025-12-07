"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Award, Users, ArrowRight, CheckCircle2, BookOpen, Briefcase } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trainingPrograms } from "@/data/site-config";

const features = [
    {
        icon: BookOpen,
        title: "Live Projects",
        description: "Work on real-world projects from day one",
    },
    {
        icon: Users,
        title: "Expert Mentorship",
        description: "Learn from industry professionals",
    },
    {
        icon: Briefcase,
        title: "Internship Opportunities",
        description: "Get hands-on experience with our clients",
    },
    {
        icon: Award,
        title: "Placement Assistance",
        description: "Career support and job placement help",
    },
];

export default function TrainingPage() {
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Student <span className="gradient-text">Empowerment</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/90">
                        Transform your career with industry-relevant training in AI, Cloud, and Full-Stack Development
                    </p>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="container-custom mb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="glass-strong h-full text-center hover:glow-blue transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-foreground/90">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Training Programs */}
            <section className="container-custom space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our <span className="gradient-text">Training Programs</span>
                    </h2>
                    <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
                        Comprehensive, hands-on programs designed to make you job-ready
                    </p>
                </motion.div>

                {trainingPrograms.map((program, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="glass-strong overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left Side - Info */}
                                <CardHeader className="p-8 md:p-12">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                                            {program.duration}
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
                                            {program.level}
                                        </div>
                                    </div>
                                    <CardTitle className="text-3xl mb-4">{program.title}</CardTitle>
                                    <p className="text-base text-foreground/90 mb-6">
                                        {program.description}
                                    </p>

                                    <Button asChild className="glow-blue w-fit">
                                        <Link href="/book-consultation">
                                            Apply for Training
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </CardHeader>

                                {/* Right Side - Details */}
                                <CardContent className="p-8 md:p-12 bg-muted/20">
                                    <div className="space-y-8">
                                        {/* Topics */}
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                                                <span className="w-1 h-6 bg-gradient-primary rounded-full mr-3" />
                                                What You'll Learn
                                            </h3>
                                            <ul className="space-y-2">
                                                {program.topics.map((topic, i) => (
                                                    <li key={i} className="flex items-start space-x-3">
                                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                        <span className="text-foreground/90 text-sm">{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Outcomes */}
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                                                <span className="w-1 h-6 bg-gradient-accent rounded-full mr-3" />
                                                Program Outcomes
                                            </h3>
                                            <ul className="space-y-2">
                                                {program.outcomes.map((outcome, i) => (
                                                    <li key={i} className="flex items-start space-x-3">
                                                        <Award className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                                        <span className="text-foreground/90 text-sm">{outcome}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="container-custom mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-strong rounded-2xl p-8 md:p-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-lg text-foreground/90 mb-8 max-w-2xl mx-auto">
                        Join hundreds of students who have transformed their careers with our training programs
                    </p>
                    <Button asChild size="lg" className="glow-blue">
                        <Link href="/book-consultation">Apply Now</Link>
                    </Button>
                </motion.div>
            </section>
        </div>
    );
}
