'use client'
import GridItems from "@/config/site-config";
import Link from "next/link";
import {FaLinkedin, FaSquareGithub, FaSquareXTwitter} from "react-icons/fa6";
import { motion } from "framer-motion";


const SocialBox = () => {
    return (
        <div className="flex xl:px-20 px-6 pt-9  pb-0 items-center justify-between">
            <motion.div
                whileHover={{scale: 1.1}}
                transition={{type: "spring", stiffness: 400, damping: 10}}
            >
                <Link href={GridItems["Github"].buttonLink ?? ""}>
                    <div className="flex items-center justify-between">
                        {/* Icon */}
                        <FaSquareGithub size="60px"/>
                    </div>
                </Link>
            </motion.div>
            <motion.div
                whileHover={{scale: 1.1}}
                transition={{type: "spring", stiffness: 400, damping: 10}}
            >
                <Link href={GridItems["Linkedin"].buttonLink ?? ""}>
                    <div className="flex items-center justify-between">
                        {/* Icon */}
                        <FaLinkedin size="60px"/>
                    </div>
                </Link>
            </motion.div>
            <motion.div
                whileHover={{scale: 1.1}}
                transition={{type: "spring", stiffness: 400, damping: 10}}
            >
                <Link href={GridItems["x"].buttonLink ?? ""}>
                    <div className="flex items-center justify-between">
                        {/* Icon */}
                        <FaSquareXTwitter size="60px"/>
                    </div>
                </Link>
            </motion.div>
        </div>
);

};
export default SocialBox;