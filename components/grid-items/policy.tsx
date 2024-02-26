'use client'
import GridItems from "@/config/site-config";
import { motion } from "framer-motion";
import Link from "next/link";
import {ImArrowUpRight2} from "react-icons/im";


const Policy = () => {
    return (
        <div className="p-8 pt-10 w-full flex justify-between">
            <div className="pt-3">{GridItems["policy"].title}</div>
            {/* text */}
            <motion.div
                whileHover={{scale: 1.1}}
                transition={{type: "spring", stiffness: 400, damping: 10}}
            >
                <Link href="/policy">
                    <div className="border p-4 dark:border-white border-black rounded-full"><ImArrowUpRight2/></div>
                </Link>
            </motion.div>
        </div>

);
};

export default Policy;