"use client";
import MainPageContent from "@/components/MainPage/MainPageContent";
import MainPageFooter from "@/components/MainPage/MainPageFooter";
import MainPageHeader from "@/components/MainPage/MainPageHeader";
import { useEffect, useState } from "react";
import { APODItem } from "@/types";

export default function Home() {
  const [data, setData] = useState<APODItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); 
      try {
        const res = await fetch('./api/fetchApod');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData: APODItem[] = await res.json();
        setData(jsonData);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="h-[95%] md:h-[90%] w-[90%] md:w-[60%] lg:w-[45%]">
        <MainPageHeader />
        {error && <div className="error">{error}</div>} 
        {!error && <MainPageContent data={data} loading={loading} />} 
        <MainPageFooter />
      </div>
    </>
  );
}
