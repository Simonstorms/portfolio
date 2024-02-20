"use client";

import { useTheme } from "next-themes";
import {FiMoon, FiSun} from "react-icons/fi";



export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <div className="group  relative flex h-full w-full items-center justify-center text-3xl text-text">

            <button
                className="curser-pointer z-10 flex h-16 w-16 items-center justify-center rounded-full   dark:bg-[#0a0d0f] shadow-custom text-text  duration-100 ease-in-out"

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

        </div>
    );
}