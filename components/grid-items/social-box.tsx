import GridItems from "@/config/site-config";
import Link from "next/link";
import {FaLinkedin, FaSquareGithub, FaSquareXTwitter} from "react-icons/fa6";

const SocialBox = () => {
    return (
    <div className="flex p-6 pb-0 items-center justify-between">
        <Link href={GridItems["Github"].buttonLink ?? ""}>
            <div className="flex items-center justify-between">
                {/* Icon */}
                <FaSquareGithub   size="80px"/>
            </div>
        </Link>
        <Link href={GridItems["Linkedin"].buttonLink ?? ""}>
            <div className="flex items-center justify-between">
                {/* Icon */}
                <FaLinkedin  size="80px" />
            </div>
        </Link>
        <Link href={GridItems["x"].buttonLink ?? ""}>
            <div className="flex items-center justify-between">
                {/* Icon */}
                <FaSquareXTwitter size="80px"/>
            </div>
        </Link>
    </div>);

};
export default SocialBox;