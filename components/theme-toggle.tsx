"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {FiMoon, FiSun} from "react-icons/fi";


export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <div className="group  relative flex h-full w-full items-center justify-center text-3xl text-text">
            <motion.div
                whileHover={{rotate: 90}}
                transition={{ stiffness: 400, damping: 10}}


            >
            <button
                className="curser-pointer z-10 flex h-16 w-16 items-center justify-center rounded-full   dark:bg-[#0a0d0f] shadow-custom2 dark:shadow-custom text-text  duration-100 ease-in-out"

                onClick={() => {
                    setTheme(resolvedTheme === "light" ? "dark" : "light");
                }}
            >

                {resolvedTheme === "light" ? (
                    <FiSun
                        suppressHydrationWarning
                        className="group-hover:scale-110"
                    />
                ) : (
                    <FiMoon
                        suppressHydrationWarning
                        className="group-hover:scale-110"
                    />
                )}

            </button>
            </motion.div>
        </div>
    );
}