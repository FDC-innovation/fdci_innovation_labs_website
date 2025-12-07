"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppFloat() {
    const whatsappNumber = "+919389383880";
    const message = "Hi! I'd like to know more about FDC Innovation Labs services.";
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
            <motion.div
                className="absolute inset-0 rounded-full bg-[#25D366]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </motion.a>
    );
}
