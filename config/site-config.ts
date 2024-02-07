

export interface GridItemInterface{
    title?: string;
    icon?: string;
    username?: string;
    description?: string;
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
        description: "My true passion is learning and sharing my <br>knowledge</br>, which is why I started creating Youtube videos about web development, startups, and marketing.",
        buttonTitle: "Toggle",
        image: "/images/pp.png",
        image2: "",
    },
    "projects": {

        buttonLink: "https://discord.com/invite/5aXRp49Q4h",
        buttonLink2: "https://discord.com/invite/5aXRp49Q4h",
        buttonTitle: "Simon",
        buttonTitle2: "Websiete",

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
        title:"Intresed",
        description:"coding, ai, ...",

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

};
export default GridItems

