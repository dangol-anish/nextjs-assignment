import MainPageHeader from "@/components/MainPageHeader"

export default function Home() {
  return (
    <>
  <div className="h-[95%] md:h-[90%] w-[90%] md:w-[60%] lg:w-[45%]">
    <MainPageHeader/>
    <div className="bg-green-500 w-full h-[80%] grid grid-cols-1 md:grid-cols-3 gap-3 overflow-y-auto">
      <div className="bg-white h-32 md:h-full "></div>
      <div className="bg-white h-32 md:h-full"></div>
      <div className="bg-white h-32 md:h-full"></div>
      <div className="bg-white h-32 md:h-full"></div>
      <div className="bg-white h-32 md:h-full"></div>
      <div className="bg-white h-32 md:h-full"></div>
      <div className="bg-white h-32 md:h-full"></div>
      <div className="bg-white h-32 md:h-full"></div>
      <div className="bg-white h-32 md:h-full"></div>
    </div>
    <div className="bg-yellow-300 h-[10%] w-full flex justify-between items-end">
      <div className='bg-red-500 w-[40%] h-[50%]  rounded-md'></div>
      <div className='bg-red-500 w-[30%] h-[50%]  rounded-md'></div>
    </div>
  </div>
    </>
  );
}