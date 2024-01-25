import GridItems from "@/config/site-config";
import Image from "next/image";


const About = () => {
    return (
           <div>
                <div className=""><Image src={GridItems["me"].image || ""} width={50} height={50} alt="Profile picture of me"/></div>
                {/* text */}
                <div className="flex items-center ">
                    <div className=" text-neutral-500">{GridItems["me"].description}</div>
                </div>
            </div>

    );
};

export default About;