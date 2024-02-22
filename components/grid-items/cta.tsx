import GridItems from "@/config/site-config";
import Image from "next/image";
import Link from "next/link";


const Cta = () => {
    return (
        <div className=" flex flex-col   justify-between">
            <div className="p-3 xl:p-5">
                <div className="flex w-auto justify-center">{GridItems["cta"].title}</div>
                {/* text */}
                <div className="flex w-auto justify-center ">
                    <div className=" text-neutral-500">{GridItems["cta"].description}</div>
                </div>
                <div className="flex justify-center ">
                <div className="inline-flex relative mt-8 group">
                    <div
                        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                    </div>
                    <Link href="mailto:info@simongneuss.com" title="Contact me"
                       className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-800 dark:bg-gray-950 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                       role="button">Contact me
                    </Link>
                </div>
                </div>
            </div>
            <div className="mt-5 xl:mt-1  flex justify-center "><Image src={"/images/mac.png"} width={100}
                                                                         height={100}
                                                                         alt={"Memoji sitting on Macbbok"}/></div>

        </div>
    );
};

export default Cta;