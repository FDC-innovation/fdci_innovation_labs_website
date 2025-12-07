"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
    value: string;
    duration?: number;
}

export function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(value);

    // Extract number from value (e.g., "50+" -> 50)
    const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
    const suffix = value.replace(/[0-9]/g, "");

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(numericValue);
        }
    }, [isInView, numericValue, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest) + suffix);
        });

        return () => unsubscribe();
    }, [springValue, suffix]);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
            {displayValue}
        </div>
    );
}
