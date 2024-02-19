import GridItems from "@/config/site-config";
import Image from "next/image";


const Cta = () => {
    return (
        <div className=" flex flex-col justify-between">
        <div className="p-3 xl:p-5">
            <div className="flex w-auto justify-center">{GridItems["cta"].title}</div>
            {/* text */}
            <div className="flex w-auto justify-center ">
                <div className=" text-neutral-500">{GridItems["cta"].description}</div>
            </div>

        </div>
            <div className="mt-28 xl:mt-24  flex justify-center "><Image src={"/images/mac.png"} width={100}  height={100} alt={"Memoji sitting on Macbbok"} /></div>

        </div>
    );
};

export default Cta;