"use client";
import { motion } from "framer-motion";
export default function Animated({
                                     children,
                                 }: {
    children: React.ReactNode;
}) {
    const variants = {
        hidden: {
            opacity: 0,
            y: "-10vh", // Start slightly off-screen to ensure a smooth entrance
            filter: "blur(4px)", // Use a minimal blur effect for a softer entry
        },
        enter: {
            opacity: 1,
            y: 0, // Move to the original vertical position
            filter: "blur(0px)", // Clear the blur for a crisp appearance
        },
        // Optionally, you can define an exit variant if needed
    };

    return (
        <motion.div
            variants={variants} // Updated variants for a simplified and smooth fade-in effect
            initial="hidden"
            animate="enter"
            transition={{
                duration: 0.8, // Slightly reduce the duration for a faster response
                ease: "easeInOut", // Use an ease-in-out for a smooth start and end
            }}
            className=""
        >
            {children}
        </motion.div>
    );
}



