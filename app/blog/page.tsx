'use client'
import Footer from "@/components/footer";
import Link from "next/link";
import {IoCloseOutline} from "react-icons/io5";
import Image from 'next/image';
import {ImArrowUpRight2} from "react-icons/im";
import {MdOutlineExpandMore} from "react-icons/md";
import {motion} from "framer-motion";




export default function Home() {
    return (
        <main className="w-full max-w-[640px] mx-auto">
            <div className="px-8  p-10 ">
                <motion.div
                    whileHover={{scale: 1.3}}
                    transition={{type: "spring", stiffness: 400, damping: 10}}
                >
                    <Link className="flex items-center justify-center" href="/">
                        <div className="border  p-3 dark:border-white border-black rounded-full "><IoCloseOutline
                            size={20}/></div>
                    </Link>
                </motion.div>
                <div className="flex justify-center p-8 px-12  font-bold text-5xl">Blog</div>

                <div className="">
                    <label onClick={() => {
                    }}>

                        <div className="collapse rounded-[2rem] mb-4 dark:bg-[#0a0d0f]  bg-white  ">
                            <input type="radio" name="my-accordion-3"/>
                            <div className="collapse-title text-xl  p-5 font-medium">
                                <div
                                    className="relative h-48 w-full bg-gradient-to-br from-yellow-400  to-pink-300 rounded-xl overflow-hidden">
                                    <div
                                        className="absolute inset-0  transform -rotate-12 -translate-y-6 translate-x-6">
                                        {/* New container div for the image */}
                                        <div
                                            className="relative h-full  overflow-hidden rounded-[1rem] w-full scale-75">

                                        </div>
                                    </div>

                                    <button
                                        className="absolute bottom-4 left-4 p-2 bg-white dark:bg-black  rounded-full shadow-lg">
                                        <MdOutlineExpandMore/>
                                    </button>

                                </div>
                            </div>
                            <div className="collapse-content">
                                <div className="">
                                    <div className="text-2xl mb-5">Building this portfolio</div>
                                    <div className="mb-2">...</div>
                                    <ul className="mb-2">
                                        <li>to be announced</li>

                                    </ul>
                                </div>


                                <div className=" rounded-full w-40 mx-3 dark:border-[#31353b] border-4 ">
                                    <Link
                                        href="https://nevflynn.com/"

                                    >
                                        <div
                                            className=" dark:bg-[#0a0d0f] gap-2 whitespace-nowrap flex items-center box-border rounded-full bg-white px-5 py-1 text-text">

                                            <span className="">Inspiration</span>
                                            <div className=""><ImArrowUpRight2/></div>

                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </label>
                </div>
                <Footer/>
            </div>
        </main>
    )
}
