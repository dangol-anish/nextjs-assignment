export const MainPageSkeleton = () => {
    return (
      <div
        className="relative h-32 md:h-full bg-default_state animate-pulse rounded-2xl overflow-hidden shadow-lg "
      >
        <div className="absolute inset-0 w-full h-full "></div>
        <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent w-full">
          <h3 className="text-sm font-semibold line-clamp-1  h-4 w-3/4 mb-2 bg-hover_state border border-none rounded-full"></h3>
          <p className="text-[10px] mt-2 line-clamp-2  h-3 w-full bg-hover_state border border-none rounded-full"></p>
        </div>
      </div>
    );
  };
  



  import React from "react";

const DetailsPageSkeleton= () => {
  return (
    <div className="w-full h-[90%] gap-3 overflow-y-auto border rounded-lg border-border_color bg-default_state animate-pulse">
      <div className="h-[40%] md:h-[55%] p-4">
        <div className="h-full w-full bg-gray-700 rounded-2xl" />
      </div>
      <div className="h-[60%] md:h-[45%] overflow-auto p-4 md:flex md:flex-row w-full pt-0 flex flex-col gap-4">
        <div className="text-white no-scrollbar md:w-[50%]">
          <div className="h-6 bg-gray-700 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-700 rounded w-1/2 mb-4" />
          <div className="flex gap-2">
            <div className="h-4 bg-gray-700 rounded w-16" />
            <div className="h-4 bg-gray-700 rounded w-20" />
          </div>
        </div>
        <div className="md:w-[50%] overflow-y-auto h-full no-scrollbar">
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-700 rounded w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPageSkeleton;
