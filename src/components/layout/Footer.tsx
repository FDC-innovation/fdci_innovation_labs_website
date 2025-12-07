import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const footerLinks = {
    company: [
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Testimonials", href: "/testimonials" },
    ],
    learning: [
        { name: "Training Programs", href: "/training" },
        { name: "Student Success", href: "/testimonials" },
        { name: "Mentorship", href: "/training#mentorship" },
        { name: "Internships", href: "/training#internships" },
    ],
    services: [
        { name: "Web Development", href: "/services#web-development" },
        { name: "AI Integration", href: "/services#ai-integration" },
        { name: "Cloud Solutions", href: "/services#cloud-development" },
        { name: "Salesforce", href: "/services#salesforce" },
    ],
    support: [
        { name: "Contact Us", href: "/contact" },
        { name: "Book Consultation", href: "/book-consultation" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ],
};

const socialLinks = [
    { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
    { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
];

export function Footer() {
    return (
        <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-xl">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-20" />

            <div className="relative container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <div className="flex items-center space-x-3 group">
                                <Image
                                    src="/fdc-logo.png"
                                    alt="FDC Innovation Labs"
                                    width={56}
                                    height={56}
                                    className="h-14 w-14 object-contain rounded-xl group-hover:scale-105 transition-transform"
                                />
                                <div>
                                    <div className="text-xl font-bold gradient-text">FDC Innovation Labs</div>
                                    <div className="text-xs text-muted-foreground">AI Hub • Community in Uttarakhand</div>
                                </div>
                            </div>
                        </Link>

                        <p className="text-sm text-muted-foreground mb-6 max-w-sm">
                            {siteConfig.description}
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Learning</h3>
                        <ul className="space-y-3">
                            {footerLinks.learning.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-12 pt-8 border-t border-border/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {/* Primary Contact */}
                        <div className="flex items-start space-x-3">
                            <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                                <div className="text-sm font-semibold text-foreground mb-2">Primary Contact - {siteConfig.contact.primary.name}</div>
                                <a
                                    href={`mailto:${siteConfig.contact.primary.email}`}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors block mb-1"
                                >
                                    {siteConfig.contact.primary.email}
                                </a>
                                <a
                                    href={`tel:${siteConfig.contact.primary.phone}`}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                                >
                                    {siteConfig.contact.primary.phone}
                                </a>
                            </div>
                        </div>

                        {/* Secondary Contact */}
                        <div className="flex items-start space-x-3">
                            <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                                <div className="text-sm font-semibold text-foreground mb-2">Secondary Contact - {siteConfig.contact.secondary.name}</div>
                                <a
                                    href={`mailto:${siteConfig.contact.secondary.email}`}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors block mb-1"
                                >
                                    {siteConfig.contact.secondary.email}
                                </a>
                                <a
                                    href={`tel:${siteConfig.contact.secondary.phone}`}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                                >
                                    {siteConfig.contact.secondary.phone}
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                                <div className="text-sm font-medium text-foreground">Location</div>
                                <div className="text-sm text-muted-foreground">{siteConfig.contact.address}</div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} FDC Innovation Labs. All rights reserved.</p>
                        <p className="mt-2 md:mt-0">
                            A <span className="text-primary font-medium">{siteConfig.parentCompany}</span> Company
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
