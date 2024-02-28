import GridItems from "@/config/site-config";
import Image from "next/image";


const About = () => {
    return (
        <div className="p-8">
            <div className="mb-4"><Image src={GridItems["me"].image || ""} width={100} height={100}
                                         alt="Profile picture of me"/></div>
            {/* text */}
            <p className="leading-8">
                Hello 👋, I&apos;m
                {/*<span className="font-bold mx-2 text-2xl">Simon</span>*/}
                <span className="mx-2" style={{display: "inline-block"}}>
                    <Image src={"/images/logo.png"} alt={"Logo which says Simon"} width={80} height={24}/>
  </span>
                a Freelance Software Developer from Berlin. I am currently studying Software Engineering at the CODE
                University of Applied Sciences in Berlin.
            </p>

        </div>

    );
};

export default About;