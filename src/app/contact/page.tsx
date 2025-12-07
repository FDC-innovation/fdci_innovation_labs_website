"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site-config";

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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/90">
                        We'd love to hear from you. Reach out to us for any inquiries.
                    </p>
                </motion.div>
            </section>

            {/* Contact Info & Map */}
            <section className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                        <Card className="glass-strong hover:glow-blue transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Email - {siteConfig.contact.primary.name}</h3>
                                        <a
                                            href={`mailto:${siteConfig.contact.primary.email}`}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {siteConfig.contact.primary.email}
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-strong hover:glow-blue transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-primary-foreground" />
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone - {siteConfig.contact.primary.name}</h3>
                                            <a
                                                href={`tel:${siteConfig.contact.primary.phone}`}
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {siteConfig.contact.primary.phone}
                                            </a>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone - {siteConfig.contact.secondary.name}</h3>
                                            <a
                                                href={`tel:${siteConfig.contact.secondary.phone}`}
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {siteConfig.contact.secondary.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-strong hover:glow-blue transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-6 h-6 text-primary-foreground" />
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div>
                                            <h3 className="font-semibold mb-1">WhatsApp - {siteConfig.contact.primary.name}</h3>
                                            <a
                                                href={`https://wa.me/${siteConfig.contact.primary.whatsapp.replace(/\s/g, "")}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {siteConfig.contact.primary.whatsapp}
                                            </a>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">WhatsApp - {siteConfig.contact.secondary.name}</h3>
                                            <a
                                                href={`https://wa.me/${siteConfig.contact.secondary.whatsapp.replace(/\s/g, "")}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {siteConfig.contact.secondary.whatsapp}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-strong hover:glow-blue transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Location</h3>
                                        <p className="text-foreground/90">{siteConfig.contact.address}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="glass-strong h-full">
                            <CardContent className="p-0 h-full min-h-[500px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.85087217654!2d77.93490734335937!3d30.31559300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092934155f8fd1%3A0x3e690d2c3b2b6e0!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: "1rem" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="FDC Innovation Labs Location"
                                />
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
