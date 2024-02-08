import GridItems from "@/config/site-config";
import Link from "next/link";

const Projects = () => {
    return (
        <div className="p-6">
        <div>
            <Link href={GridItems["projects"].buttonLink || ""}>
                <div className="flex flex-col items-center">
                    {/* Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256"
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
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                           stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                           font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        >
                            <g transform="translate(80,110) scale(0.2,0.2)" id="overlay">
                                <path
                                    d="M271.099 21.308C274.787 6.304 289.956-2.873 304.96.815c15.005 3.688 24.181 18.857 20.493 33.862l-68.491 275.632c-3.689 15.005-18.857 24.181-33.862 20.493-15.005-3.688-24.181-18.857-20.493-33.862l68.492-275.632zm-118.45 224.344c11.616 10.167 12.795 27.834 2.628 39.45-10.168 11.615-27.835 12.794-39.45 2.627L9.544 194.604C-2.071 184.437-3.25 166.77 6.918 155.155c.873-.997 1.8-1.912 2.767-2.75l106.142-93.001c11.615-10.168 29.282-8.989 39.45 2.626 10.167 11.616 8.988 29.283-2.628 39.45l-82.27 72.086 82.27 72.086zm243.524 42.077c-11.615 10.167-29.282 8.988-39.45-2.627-10.167-11.616-8.988-29.283 2.628-39.45l82.27-72.086-82.27-72.086c-11.616-10.167-12.795-27.834-2.628-39.45 10.168-11.615 27.835-12.794 39.45-2.626l106.142 93.001a28.366 28.366 0 012.767 2.75c10.168 11.615 8.989 29.282-2.626 39.449l-106.283 93.125z"
                                />
                            </g>
                        </g>
                    </svg>
                    <div className=" text-neutral-500">{GridItems["projects"].buttonTitle}</div>
                </div>
            </Link>


        </div>
            <div className="mt-12">


                <Link href={GridItems["projects"].buttonLink2 || ""}>
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

                </svg>
                <div className=" text-neutral-500">{GridItems["projects"].buttonTitle2}</div>
            </div>
        </Link>
        </div>
        </div>
    )
        ;
};

export default Projects;