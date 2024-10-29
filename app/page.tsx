import MainPageContent from "@/components/MainPageContent";
import MainPageFooter from "@/components/MainPageFooter";
import MainPageHeader from "@/components/MainPageHeader"

export default function Home() {
  return (
    <>
  <div className="h-[95%] md:h-[90%] w-[90%] md:w-[60%] lg:w-[45%]">
    <MainPageHeader/>
    <MainPageContent/>
    <MainPageFooter/>
  </div>
    </>
  );
}