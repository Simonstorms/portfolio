"use client"
import Link from "next/link";
import {ImArrowUpRight2} from "react-icons/im";
import ExperienceCard from "@/components/grid-items/experience/card";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="p-6">
            <div>
                <div className="pb-2 text-lg font-bold">Experience</div>
                <ExperienceCard
                    title="Web Developer"
                    src="/images/full-picture.jpeg"
                    alt="Freelance Web Development"
                    period="Nov 2020 - present"
                    description="Freelancing"
                />
                <ExperienceCard
                    title="Support Developer"
                    src="/images/w3.jpg"
                    alt="Support Developert"
                    period="2020 - 2022"
                    description="Collaboration building websites"
                />
                <ExperienceCard
                    title="CTO Shortteach"
                    src="/images/shortteach.png"
                    alt="Co-Founder of Shortteach"
                    period="2020 - 2021"
                    description="students teaches students platform"
                />


            </div>
            <div>
                <div className="pb-2 text-lg font-bold">Education</div>

                <ExperienceCard
                    title="B.Sc. SE"
                    src="/images/code.png"
                    alt="B.Sc. Software Engineering"
                    period="Aug 2023 - present"
                    description=""
                />
                <ExperienceCard
                    title="S.v.P. Gymnasium"
                    src="/images/abi.png"
                    alt="Gymnasium"
                    period="2015 - 2023"
                    description="Grade: 1,7"
                />

            </div>
            <div>
                <div className="pb-2 text-lg font-bold">Volunteering</div>
                <ExperienceCard
                    title="Unicon Berlin"
                    src="/images/unicon.png"
                    alt="Unicon Berlin"
                    period="2023 - present"
                    description="a conference for students"
                />

            </div>
            <motion.div
                whileHover={{scale: 1.1}}
                transition={{type: "spring", stiffness: 400, damping: 10}}
            >
            <div className=" rounded-full dark:border-[#31353b]  mx-16 border-4 ">
                <div className="box-border rounded-full dark:bg-[#0a0d0f] bg-white px-3 py-1 text-text">
                    <Link
                        href="/simon_gneuss_cv.pdf"
                        className="flex items-center gap-2 whitespace-nowrap"
                        download="cv"
                    >
                        <span className="">Full CV</span>
                        <div className="">
                            <ImArrowUpRight2/>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
        </div>
    )
        ;
};

export default Experience;