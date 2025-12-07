"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Network, Home, Sparkles } from "lucide-react";

interface LogoSection {
    id: string;
    icon: any;
    title: string;
    description: string;
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const logoSections: LogoSection[] = [
    {
        id: "mountains",
        icon: Mountain,
        title: "Uttarakhand Roots",
        description: "Three mountain peaks representing our foundation in Uttarakhand, symbolizing stability and growth",
        position: "top-left",
    },
    {
        id: "network",
        icon: Network,
        title: "Connected Community",
        description: "Network nodes forming a constellation, representing AI neural networks and collaboration",
        position: "bottom-left",
    },
    {
        id: "homes",
        icon: Home,
        title: "Community Hub",
        description: "Three houses within the mountains, symbolizing our hub as a home base for the AI community",
        position: "top-right",
    },
    {
        id: "innovation",
        icon: Sparkles,
        title: "AI Innovation",
        description: "Where cutting-edge technology meets the serene wisdom of Uttarakhand",
        position: "bottom-right",
    },
];

export function LogoHoverAnimation({ isHovered }: { isHovered: boolean }) {
    const getPositionStyle = (position: LogoSection["position"]) => {
        // Card dimensions: 220px width, 120px height
        // Spacing: 30px between cards and logo
        const cardWidth = 220;
        const spacing = 30;
        const topOffset = 100; // Extra space for navbar
        const bottomOffset = 140; // Extra space for heading
        
        // Calculate positions to ensure no overlap
        // Top cards: positioned at top with offset
        // Bottom cards: positioned at bottom with offset
        // Left/Right: positioned horizontally with spacing
        
        switch (position) {
            case "top-left":
                return {
                    top: `${topOffset}px`,
                    left: `-${cardWidth + spacing}px`,
                };
            case "top-right":
                return {
                    top: `${topOffset}px`,
                    right: `-${cardWidth + spacing}px`,
                };
            case "bottom-left":
                return {
                    bottom: `${bottomOffset}px`,
                    left: `-${cardWidth + spacing}px`,
                };
            case "bottom-right":
                return {
                    bottom: `${bottomOffset}px`,
                    right: `-${cardWidth + spacing}px`,
                };
        }
    };

    const getInitialAnimation = (position: LogoSection["position"]) => {
        switch (position) {
            case "top-left":
                return { opacity: 0, scale: 0.8, x: 20, y: 20 };
            case "top-right":
                return { opacity: 0, scale: 0.8, x: -20, y: 20 };
            case "bottom-left":
                return { opacity: 0, scale: 0.8, x: 20, y: -20 };
            case "bottom-right":
                return { opacity: 0, scale: 0.8, x: -20, y: -20 };
        }
    };

    return (
        <AnimatePresence>
            {isHovered && (
                <div className="absolute inset-0 pointer-events-none z-50">
                    {logoSections.map((section, index) => {
                        const Icon = section.icon;
                        const isTop = section.position === "top-left" || section.position === "top-right";
                        
                        return (
                            <motion.div
                                key={section.id}
                                initial={getInitialAnimation(section.position)}
                                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                                exit={getInitialAnimation(section.position)}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25,
                                }}
                                className="absolute"
                                style={getPositionStyle(section.position)}
                            >
                                {/* Enhanced connecting glow effect */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 0.4, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                    className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/30 via-[#7DB8F5]/20 to-[#4A90E2]/30 blur-2xl rounded-full -z-10"
                                    style={{
                                        width: "250%",
                                        height: "250%",
                                        left: "-75%",
                                        top: "-75%",
                                    }}
                                />

                                {/* Enhanced Card with better styling - Fixed size */}
                                <motion.div
                                    className="bg-gradient-to-br from-[#4A90E2] via-[#5BA0E8] to-[#7DB8F5] rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(74,144,226,0.4)] border-2 border-white/40 backdrop-blur-md w-[220px] h-[120px] relative overflow-hidden flex flex-col"
                                    whileHover={{ 
                                        scale: 1.03,
                                        boxShadow: "0_25px_60px_rgba(74,144,226,0.5)",
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {/* Enhanced shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        animate={{
                                            x: ["-100%", "100%"],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            repeatDelay: 1.5,
                                        }}
                                    />
                                    
                                    {/* Subtle inner glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />
                                    
                                    <div className="flex items-start space-x-2.5 relative z-10 flex-1">
                                        <motion.div 
                                            className="w-9 h-9 rounded-xl bg-white/30 flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.2)] border border-white/20"
                                            animate={{ 
                                                rotate: [0, 5, -5, 0],
                                                scale: [1, 1.08, 1],
                                                boxShadow: [
                                                    "0_4px_12px_rgba(0,0,0,0.2)",
                                                    "0_6px_16px_rgba(74,144,226,0.4)",
                                                    "0_4px_12px_rgba(0,0,0,0.2)",
                                                ]
                                            }}
                                            transition={{ 
                                                duration: 3, 
                                                repeat: Infinity, 
                                                delay: index * 0.2 
                                            }}
                                        >
                                            <Icon className="w-4 h-4 text-white drop-shadow-sm" />
                                        </motion.div>
                                        <div className="flex-1 pt-0.5 min-w-0 flex flex-col">
                                            <h4 className="text-white font-bold text-sm mb-1 drop-shadow-sm line-clamp-1">{section.title}</h4>
                                            <p className="text-white/90 text-xs leading-relaxed drop-shadow-sm line-clamp-3 flex-1">{section.description}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-bl-2xl pointer-events-none" />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </AnimatePresence>
    );
}

