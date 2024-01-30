
import SocialBox from "@/components/grid-items/social-box";
import Projects from "@/components/grid-items/projects";
import About from "@/components/grid-items/about";
import Interest from "@/components/grid-items/interest";
import React from "react";
import Spotify from "@/components/grid-items/spotify/SpotifyNowPlaying";
import Mapbox from "@/components/grid-items/map/mapbox";
const cords = {
    latitude: Number(process.env.MAP_LATITUDE),
    longitude:Number(process.env.MAP_LONGITUDE)
};
const MainPart = () => {

return (

<div>

       <div className="grid grid-cols-4 grid-rows-6 gap-4">
           <div className="shadow-xl col-span-2 row-span-2 rounded-[20px] bg-white"><div className="h-60"><About /></div></div>
           <div className=" col-span-1 row-span-4 rounded-[20px] bg-white"><Projects /></div>
           <div className="  col-span-1 row-span-2 rounded-[20px] bg-white"><Mapbox coords={cords} /></div>
           <div className="  col-span-2 row-span-1 rounded-[20px] bg-white"><SocialBox /></div>
           <div className="  col-span-1 row-span-4 rounded-[20px] bg-white">Blog</div>
           <div className="  col-span-2 row-span-1 rounded-[20px] bg-white"><Interest /></div>
           <div className="  col-span-1 row-span-2 rounded-[20px] bg-white"><Spotify /> </div>
           <div className=" rounded-[20px] col-span-2 row-span-2 bg-white">g</div>

       </div>
</div>
);
};

export default MainPart;