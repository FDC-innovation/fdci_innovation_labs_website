"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";

export function MobileBookingButton() {
    return (
        <motion.div
            className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <Button
                asChild
                size="lg"
                className="w-full glow-blue shadow-2xl text-base font-semibold group"
            >
                <Link href="/book-consultation" className="flex items-center justify-center">
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
        </motion.div>
    );
}
