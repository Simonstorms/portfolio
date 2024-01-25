import GridItems, {GridItemInterface} from "@/config/site-config";
import Icon from "@/components/icon";
import Button from "@/components/button";
import Link from "next/link";

const SocialBox = () => {
    return (
    <div className="flex items-center justify-between">
        <Link href={GridItems["Github"].buttonLink ?? ""}>
            <div className="flex items-center justify-between">
                {/* Icon */}
                <Icon type={GridItems["Github"].icon ?? ""} color={GridItems["Github"].color}/>
            </div>
        </Link>
        <Link href={GridItems["Linkedin"].buttonLink ?? ""}>
            <div className="flex items-center justify-between">
                {/* Icon */}
                <Icon type={GridItems["Linkedin"].icon ?? ""} color={GridItems["Linkedin"].color ?? ""}/>
            </div>
        </Link>
        <Link href={GridItems["x"].buttonLink ?? ""}>
            <div className="flex items-center justify-between">
                {/* Icon */}
                <Icon type={GridItems["x"].icon ?? ""} color={GridItems["x"].color}/>
            </div>
        </Link>
    </div>);

};
export default SocialBox;