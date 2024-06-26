import SocialBox from "@/components/grid-items/social-box";
import Projects from "@/components/grid-items/projects";
import About from "@/components/grid-items/about";
import Interest from "@/components/grid-items/interest";
import React, { Suspense } from "react";
import Spotify from "@/components/grid-items/spotify/SpotifyNowPlaying";
import Mapbox from "@/components/grid-items/map/mapbox";
import { ThemeToggle } from "@/components/theme-toggle";
import Skills from "@/components/grid-items/skills";
import Imprint from "@/components/grid-items/imprint";
import Policy from "@/components/grid-items/policy";
import Cta from "@/components/grid-items/cta";
import Experience from "@/components/grid-items/experience/experience";

const cords = {
  latitude: Number(process.env.NEXT_PUBLIC_MAP_LATITUDE),
  longitude: Number(process.env.NEXT_PUBLIC_MAP_LONGITUDE),
};
const MainPart = () => {
  return (

      <div>
        <div className="grid [grid-auto-rows:132.5px] gap-5 sm:grid-cols-2  xl:grid-cols-4 grid-cols-1">
          <div className="shadow-xl col-span-1 sm:col-span-2  row-span-3 sm:row-span-2 dark:bg-[#0a0d0f] rounded-[2rem] bg-white">
            <About />
          </div>
          <div className=" col-span-1 row-span-4 rounded-[2rem]   dark:bg-[#0a0d0f]  bg-white">
            <Projects />
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-map  dark:bg-[#0a0d0f]  col-span-1 row-span-2">
            <Suspense fallback={<div>Loading...</div>}>
              <Mapbox coords={cords} />
            </Suspense>
          </div>
          <div className="col-span-1   xl:col-span-2 row-span-1 rounded-[2rem]  dark:bg-[#0a0d0f] bg-white">
            <SocialBox />
          </div>
          <div className="  col-span-1 row-span-4 rounded-[2rem] xl:block hidden dark:bg-[#0a0d0f]  bg-white">
            <Experience />
          </div>
          <div className=" col-span-1 xl:col-span-2 row-span-1 rounded-[2rem]  dark:bg-[#0a0d0f]  bg-white">
            <Interest />
          </div>
          <div className="  col-span-1 row-span-4 xl:hidden  rounded-[2rem]  dark:bg-[#0a0d0f]  bg-white">
            <Experience />
          </div>
          <div className="  col-span-1 row-span-2 rounded-[2rem]   dark:bg-[#0a0d0f] bg-white">
            <Spotify />
          </div>
          <div className=" col-span-1 rounded-[2rem] xl:col-span-2 row-span-2  dark:bg-[#0a0d0f]  bg-white">
            <Cta />
          </div>
          <div className=" col-span-1 rounded-[2rem] sm:col-span-2 sm:row-span-2 row-span-3 dark:bg-[#0a0d0f]  bg-white">
            <Skills />
          </div>
          <div className=" xl:block items-center hidden rounded-[2rem] col-span-1 row-span-1  dark:bg-[#0a0d0f]  bg-white">
            <Imprint />
          </div>
          <div className=" rounded-[2rem] col-span-1 row-span-2  dark:bg-[#0a0d0f]  bg-white">
            <ThemeToggle />
          </div>
          <div className=" block items-center xl:hidden rounded-[2rem] col-span-1 row-span-1  dark:bg-[#0a0d0f]  bg-white">
            <Imprint />
          </div>
          <div className=" rounded-[2rem]  col-span-1 row-span-1  dark:bg-[#0a0d0f]  bg-white">
            <Policy />
          </div>
        </div>
      </div>
  );
};

export default MainPart;
