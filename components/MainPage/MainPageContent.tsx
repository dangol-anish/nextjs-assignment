import Link from "next/link";
import React from "react";
import { APODItem, MainPageContentProps } from "@/types"; 
import { Skeleton } from "./Skeleton";

const MainPageContent: React.FC<MainPageContentProps> = ({ data, loading }) => {
  
  return (
    <div className="w-full h-[80%] grid grid-cols-1 md:grid-cols-3 gap-3 overflow-y-auto no-scrollbar">
      {loading
        ? Array.from({ length: 9 }).map((_, index) => <Skeleton key={index} />)
        : data.slice(0, 9).map((item: APODItem, index: number) => (
            <Link
              key={index}
              href="/details"
              className="relative h-32 md:h-full bg-default_state text-white rounded-2xl overflow-hidden shadow-lg hover:opacity-80"
            >
              <img
                src={item.url}
                alt="Background Image"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 p-3 bg-gradient-to-t from-black via-transparent to-transparent w-full">
                <h3 className="text-sm font-semibold line-clamp-1">{item.title}</h3>
                <p className="text-[10px] mt-2 line-clamp-2">{item.explanation}</p>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default MainPageContent;
