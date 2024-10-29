import DetailsContent from "@/components/DetailsPage/DetailsContent";
import DetailsHeader from "@/components/DetailsPage/DetailsHeader";
import Link from "next/link";

export default function Details() {
    return (
      <>
    <div className="h-[95%] md:h-[90%] w-[90%] md:w-[60%] lg:w-[45%] ">
      <DetailsHeader/>
     <DetailsContent/>
    </div>
      </>
    );
  }