import GridItems from "@/config/site-config";
import {FaArrowRight} from "react-icons/fa6";
import Link from "next/link";


const Policy = () => {
    return (
        <div className="p-6 w-full flex justify-between">
            <div className="pt-3">{GridItems["policy"].title}</div>
            {/* text */}
            <Link href="http://localhost:3000/policy">
            <div className="border p-4 border-black rounded-full transform -rotate-45"><FaArrowRight size={20}/></div>
            </Link>
        </div>

    );
};

export default Policy;