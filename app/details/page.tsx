
export default function Details() {
    return (
      <>
    <div className="h-[95%] md:h-[90%] w-[90%] md:w-[60%] lg:w-[45%] bg-red-500 ">
      <div className="bg-yellow-300 h-[10%] w-full flex justify-between">
        <div className='bg-red-500 w-[25%] md:w-[15%] h-[50%]  rounded-md'></div>
        
      </div>
      <div className="bg-green-500 w-full h-[90%]  gap-3 overflow-y-autom">
      <div className="bg-pink-500 h-[55%] p-4">
     <div className="bg-green-500 h-full w-full">Padding Check</div>
      </div>
      <div className="bg-blue-500 h-[45%] overflow-auto p-4">
    </div>

      </div>
   
    </div>
      </>
    );
  }