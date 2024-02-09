import GridItems from "@/config/site-config";
import {FaArrowRight} from "react-icons/fa6";
import Link from "next/link";
import {ImArrowUpRight2} from "react-icons/im";


const Imprint = () => {
    return (
        <div className="p-6 w-full flex justify-between">
            <div className="pt-3">{GridItems["imprint"].title}</div>
            {/* text */}
            <Link href="http://localhost:3000/imprint">
                <div className="border p-4 border-black rounded-full"><ImArrowUpRight2/></div>
</Link>

</div>

)
    ;
};

export default Imprint;