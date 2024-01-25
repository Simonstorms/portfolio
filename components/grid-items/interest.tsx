import GridItems from "@/config/site-config";
import Image from "next/image";


const Interest = () => {
    return (
        <div>
            <div className="">{GridItems["interest"].title}</div>
            {/* text */}
            <div className="flex items-center ">
                <div className=" text-neutral-500">{GridItems["interest"].description}</div>
            </div>
        </div>

    );
};

export default Interest;