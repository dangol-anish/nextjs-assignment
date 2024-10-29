"use client";

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'] })

const MainPageHeader = () => {
  return (
    <div className="h-[10%] w-full flex justify-center text-white/70">
      <div className="flex h-[60%]">
        <p className={`${montserrat.className} flex justify-center items-center text-white`}>
          NASA&apos;s Astronomy Highlight
        </p>
      </div>
 
    </div>
  );
};

export default MainPageHeader;
