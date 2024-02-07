import GridItems from "@/config/site-config";
import {Folder, FolderOpenDot} from "lucide-react";
import Link from "next/link";

const Projects = () => {
    return (
        <div>
            <Link href={}>
            <div className="flex items-center">
                {/* Icon */}
                <Folder />
                <div className=" text-neutral-500">{GridItems["projects"].buttonTitle}</div>
            </div>
            </Link>
            <Link href={}>
                <div className="flex items-center ">
                    {/* Icon */}
                    <FolderOpenDot />
                    <div className=" text-neutral-500">{GridItems["projects"].buttonTitle2}</div>
                </div>
            </Link>
        </div>

    );
};

export default Projects;