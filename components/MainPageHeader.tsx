"use client";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import SearchIcon from "../public/search-icon.svg";
import Image from "next/image";

const MainPageHeader = () => {
  return (
    <div className="h-[10%] w-full flex justify-between text-white/70">
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

      <div className="relative w-[40%] h-[60%]">
        <Image
          src={SearchIcon}
          alt="search-icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 "
        />
        <Input
          type="text"
          placeholder="Search"
          className="pl-10 w-full h-full"
        />
      </div>
    </div>
  );
};

export default MainPageHeader;
