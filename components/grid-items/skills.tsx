import GridItems from "@/config/site-config";
import {SiNextdotjs, SiTailwindcss, SiTypescript, SiWebflow} from "react-icons/si";
import {FaGithub, FaHtml5, FaReact, FaWordpress} from "react-icons/fa6";


const Interest = () => {
    return (
        <div className=" p-4 pt-12  grid grid-cols-4">
            <div className="col-span-1 flex flex-col items-center">
                <div className=""><FaHtml5 size="50px"/></div>
                <div className="">{GridItems["skills"].skill}</div>

            </div>
            <div className="col-span-1  flex flex-col items-center ">
                <div className=""><SiTypescript size="40px"/></div>
                <div className="">{GridItems["skills"].skill1}</div>
            </div>
            <div className="col-span-1 flex flex-col items-center ">
                <div className=""><SiTailwindcss size="40px"/></div>
                <div className="">{GridItems["skills"].skill2}</div>
            </div>
            <div className="col-span-1  flex flex-col items-center ">
                <div className=""><SiNextdotjs size="40px"/></div>
                <div className="">{GridItems["skills"].skill3}</div>
            </div>
            <div className="col-span-1 flex flex-col items-center ">
                <div className=""><FaReact size="40px"/></div>
                <div className="">{GridItems["skills"].skill4}</div>
            </div>
            <div className="col-span-1  flex flex-col items-center ">
                <div className=""><FaGithub size="40px"/></div>
                <div className="">{GridItems["skills"].skill5}</div>
            </div>
            <div className="col-span-1 flex flex-col items-center">
                <div className=""><SiWebflow size="40px"/></div>
                <div className="">{GridItems["skills"].skill6}</div>
            </div>
            <div className="col-span-1 flex flex-col items-center ">
                <div className=""><FaWordpress size="40px"/></div>
                <div className="">{GridItems["skills"].skill7}</div>
            </div>
        </div>

    );
};

export default Interest;