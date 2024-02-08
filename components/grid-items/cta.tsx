import GridItems from "@/config/site-config";
import Image from "next/image";


const Cta = () => {
    return (
        <div className=" h-64 flex flex-col justify-between">
        <div className="p-6">
            <div className="flex w-auto justify-center">{GridItems["cta"].title}</div>
            {/* text */}
            <div className="flex w-auto justify-center ">
                <div className=" text-neutral-500">{GridItems["cta"].description}</div>
            </div>

        </div>
            <div className=" flex justify-center "><Image src={"/images/mac.png"} width={100}  height={100} alt={"Memoji sitting on Macbbok"} /></div>

        </div>
    );
};

export default Cta;