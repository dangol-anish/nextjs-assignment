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
  
