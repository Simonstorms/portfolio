import Footer from "@/components/footer";
import Link from "next/link";
import {IoCloseOutline} from "react-icons/io5";
import Image from 'next/image';
import {ImArrowUpRight2} from "react-icons/im";




export default function Home() {
    return (
        <main className="w-full max-w-[640px] mx-auto">
            <div className="px-8  p-10 ">
                <Link className="flex items-center mb-5 justify-center" href="http://localhost:3000/">
                    <div className="border  p-3  border-black rounded-full "><IoCloseOutline size={20}/></div>
                </Link>
                <div>


                    <div className="collapse rounded-[2rem] mb-4 dark:bg-[#0a0d0f]  bg-white  ">
                        <input type="radio" name="my-accordion-3"/>
                        <div className="collapse-title text-xl pe-4 font-medium">
                            <div className="relative h-64 w-full bg-gradient-to-br from-yellow-400  to-pink-300 rounded-xl overflow-hidden">
                                <div className="absolute inset-0 rounded-[2rem] transform -rotate-12 -translate-y-6 translate-x-6">
                                    {/* New container div for the image */}
                                    <div className="relative h-full rounded-[2rem] w-full scale-75">
                                    <Image src={"/images/innomed.png"} layout={"fill"} objectFit={"cover"}
                                           alt={"Angled box image"}/>
                                    </div>
                                </div>

                                <button className="absolute bottom-4 left-4 p-2 bg-white rounded-full shadow-lg">
                                    <Link href="https://innomedsaxony.de">
                                    <ImArrowUpRight2/>
                                    </Link>
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
