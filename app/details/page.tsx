"use client"
import DetailsContent from "@/components/DetailsPage/DetailsContent";
import DetailsHeader from "@/components/DetailsPage/DetailsHeader";
import { useSearchParams } from "next/navigation";

export default function Details() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const explanation = searchParams.get("explanation");
  const url = searchParams.get("url");
  const hdurl = searchParams.get("hdurl");
  const date = searchParams.get("date");


  if (!title || !explanation || !url || !hdurl) {
    return <div>Error: Missing data in the URL parameters.</div>;
  }

  return (
    <div className="h-[95%] md:h-[90%] w-[90%] md:w-[60%] lg:w-[45%] ">
      <DetailsHeader />
      <DetailsContent
      date={date}
      title={title}
      explanation={explanation}
      url={url}
      hdurl={hdurl}
      />
    </div>
  );
}
