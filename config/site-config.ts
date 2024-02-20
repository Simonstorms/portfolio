

export interface GridItemInterface{
    title?: string;
    icon?: string;
    username?: string;
    description?: string;
    description2?: string;
    color?: string;
    buttonTitle?: string;
    buttonTitle2?: string;
    buttonSecondaryText?: string;
    buttonLink?: string;
    buttonLink2?: string;
    image?: string;
    image2?: string;
    skill?: string;
    skill1?: string;
    skill2?: string;
    skill3?: string;
    skill4?: string;
    skill5?: string;
    skill6?: string;
    skill7?: string;


}

const GridItems: {[key: string]: GridItemInterface} = {
    "me": {
        buttonTitle: "Toggle",
        image: "/images/pp.png",
        image2: "",
    },
    "projects": {

        buttonLink: "http://localhost:3000/projects",
        buttonLink2: "http://localhost:3000/blog",
        buttonTitle: "Coding Projects",
        buttonTitle2: "Blog Posts",

    },
        "Github": {
            buttonLink: "https://github.com/simonstorms",
        },
        "x": {
            buttonLink: "https://x.com/Simon_gnss",
        },
        "Linkedin": {
            buttonLink: "https://linkedin.com/in/simon-gneuss",
        },

"interest":{
        title:"My Interests",
        description:
            "If I'm not coding, I'm probably vibing to hip-hop music. ",
        description2:"Into AI, math, crypto and startups, always tuning into the next big thing.",

},
    "imprint":{
        title:"Legal Notice",

    },
    "policy":{
        title:"Policy",

    }
,
"skills":{
    skill: "HTML5",
    skill1: "Typescript",
    skill2: "Tailwind",
    skill3: "NextJS",
    skill4: "React",
    skill5: "Github",
    skill6: "Webflow",
    skill7: "Wordpress",


}
,
    "cta":{
        title:"⚡️Available for new projects ⚡",
        description:"convinced?",


    }


};
export default GridItems