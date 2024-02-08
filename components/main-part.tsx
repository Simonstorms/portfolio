
import SocialBox from "@/components/grid-items/social-box";
import Projects from "@/components/grid-items/projects";
import About from "@/components/grid-items/about";
import Interest from "@/components/grid-items/interest";
import React, {Suspense} from "react";
import Spotify from "@/components/grid-items/spotify/SpotifyNowPlaying";
import Mapbox from "@/components/grid-items/map/mapbox";
import {ThemeToggle} from "@/components/theme-toggle";
import Skills from "@/components/grid-items/skills";
import Imprint from "@/components/grid-items/imprint";
import Policy from "@/components/grid-items/policy";
import Cta from "@/components/grid-items/cta";
const cords = {
    latitude: Number(process.env.MAP_LATITUDE),
    longitude:Number(process.env.MAP_LONGITUDE)
};
const MainPart = () => {

return (

<div>

    <div className="grid grid-cols-4 grid-rows-8 gap-4">
        <div className="shadow-xl col-span-2 row-span-2  dark:bg-[#0a0d0f] rounded-[2rem] bg-white">
            <div className=""><About/></div>
        </div>
        <div className=" col-span-1 row-span-4 rounded-[2rem]   dark:bg-[#0a0d0f]  bg-white"><Projects/></div>
        <div className="overflow-hidden rounded-[2rem] bg-map  dark:bg-[#0a0d0f]  col-span-1 row-span-2">
            <Suspense fallback={<div>Loading...</div>}>
                <Mapbox coords={cords}/>
            </Suspense>
        </div>
        <div className="  col-span-2 row-span-1 rounded-[2rem]  dark:bg-[#0a0d0f] bg-white"><SocialBox/></div>
        <div className="  col-span-1 row-span-4 rounded-[2rem]  dark:bg-[#0a0d0f]  bg-white">About me</div>
        <div className="  col-span-2 row-span-1 rounded-[2rem]  dark:bg-[#0a0d0f]  bg-white"><Interest/></div>
        <div className="  col-span-1 row-span-2 rounded-[2rem]   dark:bg-[#0a0d0f] bg-white"><Spotify/></div>
        <div className=" rounded-[2rem] col-span-2 row-span-2 dark:bg-[#0a0d0f]  bg-white"><Skills/></div>
        <div className=" rounded-[2rem] col-span-2 row-span-2  dark:bg-[#0a0d0f]  bg-white"><Cta /></div>
        <div className=" flex items-center rounded-[2rem] col-span-1 row-span-1  dark:bg-[#0a0d0f]  bg-white"><Imprint /></div>
        <div className=" rounded-[2rem] col-span-1 row-span-2  dark:bg-[#0a0d0f]  bg-white"><ThemeToggle/></div>
        <div className=" rounded-[2rem] col-span-1 row-span-1  dark:bg-[#0a0d0f]  bg-white"><Policy /></div>


    </div>
</div>
);
};

export default MainPart;