import GridItems from "@/config/site-config";
import Link from "next/link";

const Projects = () => {
    return (
        <div>
            <Link href={""}>
            <div className="flex flex-col items-center">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0,0,256,256"
                     width="150px" height="150px">
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                       stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                       font-family="none" font-weight="none" font-size="none" text-anchor="none"
                       >
                        <g transform="scale(5.33333,5.33333)">
                            <path d="M40,12h-18l-4,-4h-10c-2.2,0 -4,1.8 -4,4v8h40v-4c0,-2.2 -1.8,-4 -4,-4z"
                                  fill="#5c7cfa"></path>
                            <path
                                d="M40,12h-32c-2.2,0 -4,1.8 -4,4v20c0,2.2 1.8,4 4,4h32c2.2,0 4,-1.8 4,-4v-20c0,-2.2 -1.8,-4 -4,-4z"
                                fill="#339af0"></path>
                        </g>
                    </g>
                </svg>
                <div className=" text-neutral-500">{GridItems["projects"].buttonTitle}</div>
            </div>
            </Link>
            <Link href={""}>
                <div className="flex flex-col items-center ">
                    {/* Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0,0,256,256" width="150px" height="150px">
                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                           stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                           font-family="none" font-weight="none" font-size="none" text-anchor="none"
                           >
                            <g transform="scale(5.33333,5.33333)">
                                <path
                                    d="M40,12h-18l-4,-4h-10c-2.2,0 -4,1.8 -4,4v24c0,2.2 1.8,4 4,4h29.7l6.3,-11v-13c0,-2.2 -1.8,-4 -4,-4z"
                                    fill="#339af0"></path>
                                <path
                                    d="M40,12h-32c-2.2,0 -4,1.8 -4,4v20c0,2.2 1.8,4 4,4h32c2.2,0 4,-1.8 4,-4v-20c0,-2.2 -1.8,-4 -4,-4z"
                                    fill="#5c7cfa"></path>
                            </g>
                        </g>
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                           stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                           font-family="none" font-weight="none" font-size="none" text-anchor="none"
                           >
                            <g transform="translate(98,111.66667) scale(2.66667,2.66667)" id="overlay">
                                <path
                                    d="M15,6h-3.551c-0.276,0 -0.5,-0.224 -0.5,-0.5c0,-0.141 0.058,-0.268 0.152,-0.359c0.001,-0.001 -0.002,-0.001 -0.001,-0.002c0.554,-0.544 0.9,-1.3 0.9,-2.139c0,-1.657 -1.343,-3 -3,-3c-1.657,0 -3,1.343 -3,3c0,0.839 0.346,1.595 0.9,2.139c0,0.001 -0.002,0.001 -0.001,0.002c0.094,0.091 0.152,0.218 0.152,0.359c0,0.276 -0.224,0.5 -0.5,0.5h-3.551c-1.66,0 -3,1.34 -3,3v2.55c0,0.27 0.22,0.5 0.5,0.5c0.15,0 0.28,-0.07 0.37,-0.18l0.01,0.01c0.54,-0.54 1.29,-0.88 2.12,-0.88c1.66,0 3,1.34 3,3c0,1.66 -1.34,3 -3,3c-0.83,0 -1.58,-0.34 -2.12,-0.88l-0.01,0.01c-0.09,-0.11 -0.22,-0.18 -0.37,-0.18c-0.28,0 -0.5,0.23 -0.5,0.5v2.55c0,1.66 1.34,3 3,3h12c1.66,0 3,-1.34 3,-3v-5v-5c0,-1.66 -1.34,-3 -3,-3z"></path>
                            </g>
                        </g>
                    </svg>
                    <div className=" text-neutral-500">{GridItems["projects"].buttonTitle2}</div>
                </div>
            </Link>
        </div>

    );
};

export default Projects;