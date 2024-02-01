

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
            icon: "github",
            buttonLink: "https://github.com/batuhanbilginn",
            color: "#070707",
        },
        "x": {
            icon: "x",
            buttonLink: "https://x.com/batuhanbilginn",
            color: "#070707",
        },
        "Linkedin": {
            icon: "Linked",
            buttonLink: "https://linkedIn.com/batuhanbilginn",
            color: "#070707",
        },

"interest":{
        title:"Intresed",
        description:"coding, ai, ...",

}
,
"mentor": {
        title: "Next.js Mentorship",
        icon: "superpeer",
        buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
}
,
"Mentor":{
        title: "Supabase Mentorship",
        icon: "superpeer",
        buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
}
,
"project":{
        title: "makrAI",
        icon: "github",
        color: "#070707",
        buttonLink: "https://github.com/batuhanbilginn/makr-ai",
}
,

};
export default GridItems

