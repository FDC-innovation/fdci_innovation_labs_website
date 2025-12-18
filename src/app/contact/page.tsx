"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import Link from "next/link";

const contactMethods = [
    {
        icon: Mail,
        title: "Email",
        value: siteConfig.contact.primary.email,
        href: `mailto:${siteConfig.contact.primary.email}`,
        description: "Send us an email anytime",
        gradient: "from-[#4A90E2] via-[#5BA0E8] to-[#7DB8F5]",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        value: siteConfig.contact.primary.whatsapp,
        href: `https://wa.me/${siteConfig.contact.primary.whatsapp.replace(/\s/g, "")}`,
        description: "Chat with us instantly",
        gradient: "from-[#7DB8F5] via-[#4A90E2] to-[#5BA0E8]",
        external: true,
    },
    {
        icon: MapPin,
        title: "Location",
        value: siteConfig.contact.address,
        description: "Visit us in person",
        gradient: "from-[#5BA0E8] via-[#7DB8F5] to-[#4A90E2]",
    },
];

export default function ContactPage() {
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
                        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                        className="inline-block mb-6"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#7DB8F5] flex items-center justify-center mx-auto shadow-lg">
                            <Send className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out to us for any inquiries, questions, or to start your next project.
                    </p>
                </motion.div>
            </section>

            {/* Contact Info & Map */}
            <section className="container-custom mb-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">
                                Contact <span className="gradient-text">Information</span>
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Choose your preferred way to reach us
                            </p>
                        </motion.div>

                        {contactMethods.map((method, index) => {
                            const Icon = method.icon;
                            return (
                                <motion.div
                                    key={method.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="glass-strong overflow-hidden border-2 border-transparent hover:border-[#4A90E2]/30 transition-all duration-300 group hover:glow-blue">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                                <motion.div
                                                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                                    transition={{ duration: 0.5 }}
                                                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                                                >
                                                    <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                                                </motion.div>
                                                <div className="flex-1 pt-1">
                                                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                                        {method.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mb-2">
                                                        {method.description}
                                                    </p>
                                                    {method.href ? (
                                            <a
                                                            href={method.href}
                                                            target={method.external ? "_blank" : undefined}
                                                            rel={method.external ? "noopener noreferrer" : undefined}
                                                            className="text-lg font-semibold text-foreground/90 hover:text-primary transition-colors inline-flex items-center gap-2 group/link"
                                            >
                                                            {method.value}
                                                            {method.external && (
                                                                <Globe className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                                            )}
                                            </a>
                                                    ) : (
                                                        <p className="text-lg font-semibold text-foreground/90">
                                                            {method.value}
                                                        </p>
                                                    )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                                </motion.div>
                            );
                        })}

                        {/* Quick Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Card className="glass-strong border-2 border-[#4A90E2]/20 bg-gradient-to-br from-[#4A90E2]/5 to-[#7DB8F5]/5">
                            <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Need Immediate Help?</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Book a consultation call with us
                                            </p>
                                        </div>
                                        <Button asChild className="glow-blue">
                                            <Link href="/book-consultation">
                                                Book Now
                                            </Link>
                                        </Button>
                                </div>
                            </CardContent>
                        </Card>
                        </motion.div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">
                                Find Us on <span className="gradient-text">Map</span>
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Visit our office in Uttarakhand
                            </p>
                        </motion.div>

                        <Card className="glass-strong overflow-hidden border-2 border-transparent hover:border-[#4A90E2]/30 transition-all duration-300 group hover:glow-blue">
                            <CardContent className="p-0 relative">
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/0 to-[#7DB8F5]/0 group-hover:from-[#4A90E2]/5 group-hover:to-[#7DB8F5]/5 transition-all duration-300 z-10 pointer-events-none rounded-lg" />
                                <div className="relative w-full aspect-[4/3] min-h-[500px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.85087217654!2d77.93490734335937!3d30.31559300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092934155f8fd1%3A0x3e690d2c3b2b6e0!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: "1rem" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="FDC Innovation Labs Location"
                                        className="absolute inset-0 w-full h-full rounded-lg"
                                />
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Additional Info Section */}
            <section className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    <Card className="glass-strong border-2 border-transparent hover:border-[#4A90E2]/30 transition-all duration-300 group">
                        <CardContent className="p-6 text-center">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4A90E2] to-[#7DB8F5] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Clock className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Response Time</h3>
                            <p className="text-muted-foreground text-sm">
                                We typically respond within 24 hours
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="glass-strong border-2 border-transparent hover:border-[#4A90E2]/30 transition-all duration-300 group">
                        <CardContent className="p-6 text-center">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7DB8F5] to-[#4A90E2] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Globe className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Global Reach</h3>
                            <p className="text-muted-foreground text-sm">
                                Serving clients worldwide from Uttarakhand
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="glass-strong border-2 border-transparent hover:border-[#4A90E2]/30 transition-all duration-300 group">
                        <CardContent className="p-6 text-center">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5BA0E8] to-[#7DB8F5] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Send className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Quick Support</h3>
                            <p className="text-muted-foreground text-sm">
                                Get instant help via WhatsApp or email
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </section>
        </div>
    );
}
