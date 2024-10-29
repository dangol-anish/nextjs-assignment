import Link from "next/link";
import React from "react";
import { APODItem, MainPageContentProps } from "@/types"; 
import { MainPageSkeleton } from "./Skeleton";

const MainPageContent: React.FC<MainPageContentProps> = ({
  data,
  loading,
  currentPage,
  itemsPerPage,
}) => {
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="w-full h-[80%] grid grid-cols-1 md:grid-cols-3 gap-3 overflow-y-auto no-scrollbar">
      {loading
        ? Array.from({ length: itemsPerPage }).map((_, index) => <MainPageSkeleton key={index} />)
        : paginatedData.map((item: APODItem, index: number) => (
          <Link
            key={index}
            href={`/details?title=${encodeURIComponent(item.title)}&explanation=${encodeURIComponent(item.explanation)}&url=${encodeURIComponent(item.url)}&hdurl=${encodeURIComponent(item.hdurl)}&date=${encodeURIComponent(item.date)}`}
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
