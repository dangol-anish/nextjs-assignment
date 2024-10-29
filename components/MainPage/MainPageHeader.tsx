"use client";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import SearchIcon from "../../public/search-icon.svg";
import Image from "next/image";

const MainPageHeader = () => {
  return (
    <div className="h-[10%] w-full flex justify-center text-white/70">
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
