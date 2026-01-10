"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Rocket,
  Briefcase,
  Code,
  Cloud,
  Palette,
  Database,
  Calculator,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site-config";
import { LogoHoverAnimation } from "@/components/ui/LogoHoverAnimation";

// Simple static image component - shows full image without cropping
function TeamImage({ src, alt, gradient }: { src: string; alt: string; gradient: string }) {
  return (
    <div className="relative h-64 w-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full w-auto h-auto object-contain"
        loading="lazy"
      />
    </div>
  );
}

const values = [
  {
    icon: Heart,
    title: "Student Empowerment",
    description:
      "We believe in nurturing talent from every corner of India, especially from underserved regions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver world-class solutions that meet international standards.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive ecosystem where everyone grows together.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Constantly exploring new technologies to stay ahead of the curve.",
  },
];

export default function AboutPage() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <div className="py-20">
      {/* Hero Section with Logo */}
      <section className="container-custom mb-20">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Side - Empty for spacing */}
          <div className="hidden md:block" />

          {/* Center - Logo with Hover Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div
              className="relative"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 bg-[#4A90E2]/30 blur-2xl rounded-2xl"
                animate={{
                  opacity: isLogoHovered ? 0.5 : 0.3,
                  scale: isLogoHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/20 via-[#7DB8F5]/20 to-[#4A90E2]/20 blur-xl rounded-2xl"
                animate={{
                  opacity: isLogoHovered ? 0.4 : 0.2,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Logo container with premium styling */}
              <motion.div
                className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border-2 border-[#4A90E2]/30 rounded-lg p-4 md:p-6 shadow-xl shadow-[#4A90E2]/10 transition-all duration-300"
                animate={{
                  scale: isLogoHovered ? 1.05 : 1,
                  borderColor: isLogoHovered
                    ? "rgba(74, 144, 226, 0.6)"
                    : "rgba(74, 144, 226, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/5 to-[#7DB8F5]/5 rounded-lg"
                  animate={{ opacity: isLogoHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Image
                  src="/logo-fixed.svg"
                  alt="FDC Innovation Labs"
                  width={120}
                  height={120}
                  className="relative h-24 w-24 md:h-32 md:w-32 object-contain rounded-lg drop-shadow-lg transition-all duration-300"
                  priority
                />

                {/* Interactive hover animation */}
                <LogoHoverAnimation isHovered={isLogoHovered} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Empty for spacing */}
          <div className="hidden md:block" />
        </div>

        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mt-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">FDC Innovation Labs</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            {siteConfig.description}
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="container-custom mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              From the Hills of <span className="gradient-text">Uttarakhand</span>
            </h2>
            <div className="space-y-4 text-foreground/90">
              <p>
                FDC Innovation Labs was born from a simple yet powerful vision: to make advanced
                technology accessible to businesses and students from every corner of India.
              </p>
              <p>
                Founded in the beautiful state of Uttarakhand, we recognized the immense untapped
                potential in the hill regions. While the world was racing ahead with AI and cloud
                technologies, talented students in smaller cities were struggling to access quality
                tech education and real-world opportunities.
              </p>
              <p>
                Today, we&rsquo;re proud to be Uttarakhand&rsquo;s first AI-focused innovation
                community, bridging the gap between local talent and global opportunities. We
                don&rsquo;t just build software—we build futures.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-foreground/90">{siteConfig.mission}</p>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <Eye className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-foreground/90">{siteConfig.vision}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container-custom mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-strong h-full hover:glow-blue transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/90">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Board Members Section - Core Capabilities */}
      <section className="container-custom mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#7DB8F5] flex items-center justify-center mx-auto shadow-lg">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Leadership Team</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
            Meet the experienced leaders driving our vision forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Mike Agar",
              role: "CEO",
              image: "/team/mike-ceo.jpg",
              gradient: "from-[#4A90E2] via-[#5BA0E8] to-[#7DB8F5]",
            },
            {
              name: "Kanupriya",
              role: "Chief Operating Officer",
              image: "/team/kanupriya-coo.jpg",
              gradient: "from-[#7DB8F5] via-[#4A90E2] to-[#5BA0E8]",
            },
            {
              name: "Roy Hastings",
              role: "Partner - Delivery",
              image: "/team/RoyHastings-partener-delivery.jpg",
              gradient: "from-[#5BA0E8] via-[#7DB8F5] to-[#4A90E2]",
            },
            {
              name: "Marc Mulzer",
              role: "Technology Infrastructure Advisor",
              image: "/team/MarcMulzer-technology-infra-advisor.jpg",
              fallbackImage: "/team/marcmulzer-technology-infra-advisor.jpg",
              gradient: "from-[#4A90E2] via-[#5BA0E8] to-[#7DB8F5]",
            },
            {
              name: "Arpit Agarwal",
              role: "Advising Partner – Branding, Communications, Content & Strategy",
              subtitle: "Communications, Content & Strategy",
              image: "/team/arpit-agarwal-Media-partener.jpeg",
              gradient: "from-[#7DB8F5] via-[#4A90E2] to-[#5BA0E8]",
            },
          ].map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-strong overflow-hidden group hover:glow-blue transition-all duration-300 border-2 border-transparent hover:border-[#4A90E2]/30 h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-64 w-full overflow-hidden"
                    >
                      <TeamImage
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        gradient={member.gradient}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                    </motion.div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p
                        className={`text-base text-foreground/80 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold mb-1`}
                      >
                        {member.role}
                      </p>
                      {member.subtitle && (
                        <p className="text-sm text-muted-foreground">{member.subtitle}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="container-custom mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#7DB8F5] flex items-center justify-center mx-auto shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
            The talented individuals building the future of technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Aditya Kumar",
              role: "CTO & Technical Director of FDC Innovation Labs",
              image: "/team/aditya.png",
              icon: Code,
              gradient: "from-[#4A90E2] via-[#5BA0E8] to-[#7DB8F5]",
              hasImage: true,
              description:
                "Expert in building seamless AI and web solutions. Leads our technical vision with a focus on innovative, scalable architectures that bridge cutting-edge AI with modern web technologies.",
            },
            {
              name: "Sunil Butola",
              role: "DevOps & Cloud Engineer",
              image: "/team/sunil-aws-devops.jpeg",
              icon: Cloud,
              gradient: "from-[#7DB8F5] via-[#4A90E2] to-[#5BA0E8]",
              hasImage: true,
              description:
                "Specializes in AWS infrastructure and DevOps automation. Ensures our systems are scalable, secure, and always available with 99.9% uptime.",
            },
            {
              name: "Shivam Sahni",
              role: "Software Solutions Manager & Project Lead",
              image: "/team/shivam.jpeg",
              icon: Database,
              gradient: "from-[#5BA0E8] via-[#7DB8F5] to-[#4A90E2]",
              hasImage: true,
              description:
                "Leads full project lifecycle from requirement analysis and architecture to development, deployment, and go-live. Designs scalable software architecture and APIs, oversees database and system performance, and provides DevOps support including CI/CD pipelines, cloud infrastructure, and production operations.",
            },
            {
              name: "Ayush Hemdam",
              role: "UI/UX & Algorithm Developer",
              image: "/team/ayush.jpg",
              icon: Palette,
              gradient: "from-[#4A90E2] via-[#5BA0E8] to-[#7DB8F5]",
              hasImage: true,
              description:
                "Creates beautiful, user-friendly interfaces and develops efficient algorithms. Combines design thinking with technical expertise to deliver exceptional user experiences.",
            },
            {
              name: "Mujeeb Rehman",
              role: "Finance Director & Operations Manager",
              image: "/team/mujeeb.jpg",
              icon: Calculator,
              gradient: "from-[#7DB8F5] via-[#4A90E2] to-[#5BA0E8]",
              hasImage: true,
              description:
                "Manages our financial operations and administrative processes. Ensures smooth business operations and strategic financial planning.",
            },
          ].map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-strong overflow-hidden group hover:glow-blue transition-all duration-300 border-2 border-transparent hover:border-[#4A90E2]/30 h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      {member.hasImage ? (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="relative h-64 w-full overflow-hidden"
                        >
                          <TeamImage
                            src={member.image!}
                            alt={`${member.name} - ${member.role}`}
                            gradient={member.gradient}
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className={`relative h-64 w-full bg-gradient-to-br ${member.gradient} flex items-center justify-center overflow-hidden`}
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute"
                          >
                            <Icon className="w-32 h-32 text-white/30" />
                          </motion.div>
                          <div className="absolute inset-0 bg-black/10" />
                        </motion.div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          {!member.hasImage && (
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg`}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          )}
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                            <p
                              className={`text-base text-foreground/80 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold`}
                            >
                              {member.role}
                            </p>
                          </div>
                        </div>

                        {/* Hover Description */}
                        {member.description && (
                          <div className="overflow-hidden">
                            <div className="max-h-0 group-hover:max-h-96 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                              <div className="pt-3 border-t border-foreground/10">
                                <p className="text-sm text-foreground/80 leading-relaxed">
                                  {member.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Parent Company Section */}
      <section className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Powered by <span className="gradient-text">Fast Data Connect</span>
          </h2>
          <p className="text-foreground/90">
            FDC Innovation Labs is a proud initiative of Fast Data Connect, a{" "}
            {siteConfig.companyType} company based in {siteConfig.location}. With the backing of our
            parent company&rsquo;s expertise and resources, we&rsquo;re able to deliver
            enterprise-grade solutions while maintaining our focus on community empowerment and
            student success.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
