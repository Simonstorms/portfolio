import Footer from "@/components/footer";
import Link from "next/link";
import {IoCloseOutline} from "react-icons/io5";
import Image from 'next/image';
import {ImArrowUpRight2} from "react-icons/im";
import {MdOutlineExpandMore} from "react-icons/md";




export default function Home() {
    return (
        <main className="w-full max-w-[640px] mx-auto">
            <div className="px-8  p-10 ">
                <Link className="flex items-center mb-5 justify-center" href="/">
                    <div className="border  p-3  border-black rounded-full "><IoCloseOutline  size={20}/></div>
                </Link>
                <div className="flex justify-center p-8 px-12  font-bold text-5xl">Projects</div>

                <div className="">


                    <div className="collapse rounded-[2rem] mb-4 dark:bg-[#0a0d0f]  bg-white  ">
                        <input type="radio" name="my-accordion-3"/>
                        <div className="collapse-title text-xl  p-5 font-medium">
                            <div
                                className="relative h-48 w-full bg-gradient-to-br from-yellow-400  to-pink-300 rounded-xl overflow-hidden">
                                <div className="absolute inset-0  transform -rotate-12 -translate-y-6 translate-x-6">
                                    {/* New container div for the image */}
                                    <div className="relative h-full  overflow-hidden rounded-[1rem] w-full scale-75">
                                        <Image src={"/images/innomed.png"} layout={"fill"} objectFit={"cover"}
                                               alt={"Angled box image"}/>
                                    </div>
                                </div>

                                <button className="absolute bottom-4 left-4 p-2 bg-white dark:bg-black rounded-full shadow-lg">
                                    <MdOutlineExpandMore/>
                                </button>

                            </div>
                        </div>
                        <div className="collapse-content">
                            <div className="">
                                <div className="text-2xl mb-5">Innomed Saxony</div>
                                <div className="mb-2">The &quot;InnoMed Saxony&quot; project aims to network players in the fields
                                    of medicine and business in Saxony and to accelerate medical technology transfer.
                                </div>
                                <ul className="mb-2 list-disc list-inside">
                                    <li>Supports from basic research to market launch</li>
                                    <li>Assistance with funding applications and recruitment</li>
                                    <li>hosted events: networking, moderated talks, workshops</li>
                                </ul>
                            </div>


                            <div className=" rounded-full dark:border-[#31353b] w-24 mx-3 border-4 ">
                                <Link href="https://innomedsaxony.de">
                                    <div
                                        className="  gap-2 whitespace-nowrap flex items-center box-border rounded-full bg-white  dark:bg-[#0a0d0f] px-4 py-1 text-text">

                                        <span className="">Web</span>
                                        <div className=""><ImArrowUpRight2/></div>

                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>


                        <div className="collapse rounded-[2rem] mb-4 dark:bg-[#0a0d0f]  bg-white  ">
                            <input type="radio" name="my-accordion-3"/>
                            <div className="collapse-title text-xl pe-4 font-medium">
                                <div
                                    className="relative h-48 w-full bg-gradient-to-br from-yellow-400  to-pink-300 rounded-xl overflow-hidden">
                                    <div
                                        className="absolute inset-0  transform -rotate-12 -translate-y-6 translate-x-6">
                                        {/* New container div for the image */}
                                        <div
                                            className="relative h-full  overflow-hidden rounded-[1rem] w-full scale-75">
                                            <Image src={"/images/aidm.png"} layout={"fill"} objectFit={"cover"}
                                                   alt={"Angled box image"}/>
                                        </div>
                                    </div>

                                    <button className="absolute bottom-4 left-4 p-2 bg-white dark:bg-black rounded-full shadow-lg">
                                        <MdOutlineExpandMore/>
                                    </button>

                                </div>
                            </div>
                            <div className="collapse-content">
                                <div className="">
                                    <div className="text-2xl mb-5">Ab in die Mitte</div>
                                    <div className="mb-2">The Ab in die Mitte! Die City-Offensive Sachsen initiative, launched in 2004 in Saxony, Germany, encourages vibrant urban life through over 500 projects from 140+ cities and communities. It focuses on:</div>
                                    <ul className="mb-2  list-disc list-inside">
                                        <li>Balancing non-investment and investment activities to revitalize city centers.</li>
                                        <li>Enhancing multifunctionality and encouraging public participation in development strategies.</li>
                                        <li>Utilizing public-private partnerships to foster innovative, sustainable urban development and regional architectural identity.</li>

                                    </ul>

                                </div>


                                <div className=" rounded-full dark:border-[#31353b]  w-24 mx-3 border-4 ">
                                    <Link
                                        href="https://www.abindiemitte-sachsen.de/"

                                    >
                                        <div
                                            className="  gap-2 whitespace-nowrap flex items-center box-border rounded-full dark:bg-[#0a0d0f] bg-white px-4 py-1 text-text">

                                            <span className="">Web</span>
                                            <div className=""><ImArrowUpRight2/></div>

                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>



                            <div className="collapse rounded-[2rem] mb-4 dark:bg-[#0a0d0f]  bg-white  ">
                                <input type="radio" name="my-accordion-3"/>
                                <div className="collapse-title text-xl pe-4 font-medium">
                                    <div
                                        className="relative h-48 w-full bg-gradient-to-br from-yellow-400  to-pink-300 rounded-xl overflow-hidden">
                                        <div
                                            className="absolute inset-0  transform -rotate-12 -translate-y-6 translate-x-6">
                                            {/* New container div for the image */}
                                            <div
                                                className="relative h-full  overflow-hidden rounded-[1rem] w-full scale-75">
                                                <Image src={"/images/question.jpeg"} layout={"fill"} objectFit={"cover"}
                                                       alt={"Angled box image"}/>
                                            </div>
                                        </div>

                                        <button
                                            className="absolute bottom-4 left-4 p-2 bg-white dark:bg-black rounded-full shadow-lg">
                                            <MdOutlineExpandMore/>
                                        </button>

                                    </div>
                                </div>
                                <div className="collapse-content">
                                    <div className="">
                                        <div className="text-2xl mb-5">Questiontime</div>
                                        <div className="mb-2"></div>
                                        <ul className="mb-2">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>


                                    <div className=" rounded-full w-24 mx-3 dark:border-[#31353b]  border-4 ">
                                        <Link href="https://question-time.co.uk">
                                            <div
                                                className="  gap-2 whitespace-nowrap flex items-center box-border dark:bg-[#0a0d0f] rounded-full bg-white px-4 py-1 text-text">

                                                <span className="">Web</span>
                                                <div className=""><ImArrowUpRight2/></div>

                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <Footer/>
                        </div>
        </main>
)
}
