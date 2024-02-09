import Footer from "@/components/footer";
import Link from "next/link";
import {IoCloseOutline} from "react-icons/io5";
import Image from 'next/image';




export default function Home() {
    return (
        <main className="w-full max-w-[640px] mx-auto">
            <div className="px-8  p-10 ">
                <Link className="flex items-center mb-5 justify-center" href="http://localhost:3000/">
                    <div className="border  p-3  border-black rounded-full "><IoCloseOutline size={20}/></div>
                </Link>
                <div>


                    <div className="collapse rounded-[2rem] mb-4 dark:bg-[#0a0d0f]  bg-white collapse-plus ">
                        <input type="radio" name="my-accordion-3"/>
                        <div className="collapse-title text-xl font-medium">
                            <div className="relative h-64 w-full bg-gradient-to-br from-yellow-400 to-pink-300 rounded-xl overflow-hidden">
                                <div className="absolute inset-0  transform -rotate-12 -translate-y-6 translate-x-6">
                                    {/* New container div for the image */}
                                    <div className="relative h-full w-full scale-75">
                                    <Image src={"/images/innomed.png"} layout={"fill"} objectFit={"cover"}
                                           alt={"Angled box image"}/>
                                    </div>
                                </div>
                                <button className="absolute bottom-4 left-4 p-2 bg-white rounded-full shadow-lg">
                                    {/* Icon or SVG goes here */}
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse rounded-[2rem] mb-4 dark:bg-[#0a0d0f]  bg-white collapse-plus ">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse  rounded-[2rem]  dark:bg-[#0a0d0f]  bg-white collapse-plus ">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </main>
    )
}
