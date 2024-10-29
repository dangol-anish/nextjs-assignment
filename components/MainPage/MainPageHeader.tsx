"use client";

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'] })

const MainPageHeader = () => {
  return (
    <div className="h-[10%] w-full flex justify-between text-white/70">
      <div className="flex h-[60%]">
        <p className={`${montserrat.className} flex justify-center items-center text-white`}>
          NASA&apos;s Astronomy Highlight
        </p>
      </div>
      <Tabs
        defaultValue="images"
        className="w-[45%] lg:w-[25%] h-[60%] bg-default_state border rounded-md  border-border_color"
      >
        <TabsList className=" w-full  bg-default_state text-white/70  flex gap-2 justify-center items-center h-full ">
          <TabsTrigger value="images" className="hover:bg-hover_state ">
            Images
          </TabsTrigger>
          <TabsTrigger value="videos" className="hover:bg-hover_state">
            Videos
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default MainPageHeader;
