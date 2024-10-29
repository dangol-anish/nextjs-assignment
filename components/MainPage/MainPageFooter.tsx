import Image from "next/image";
import Link from "next/link";
import Portfolio from "../../public/portfolio.svg";
import Github from "../../public/github.svg";
import Mail from "../../public/mail.svg";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const MainPageFooter = () => {
  return (
    <div className=" h-[10%] w-full flex justify-between items-end text-white/70">
      <div className="w-[60%] h-[50%]  rounded-md text-xs flex items-center gap-2">
        <p className="w-[60%]">Take home assignment by Anish Dangol</p>
        <div className="flex gap-2">
          <Link target="_blank" href="https://www.dangolanish.com.np/">
            <Image src={Portfolio} alt="portfolio_logo"  />
          </Link>
          <Link target="_blank"  href="https://github.com/dangol-anish">
            <Image src={Github} alt="portfolio_logo" />
          </Link>
          <Link target="_blank"  href="mailto:dangol.anish001@gmail.com">
            <Image src={Mail} alt="portfolio_logo" />
          </Link>
        </div>
      </div>

      <Pagination className="w-[30%] lg:w-[20%] h-[50%]  rounded-md m-0 flex justify-center items-center  bg-default_state border border-border_color">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink className="text-xs h-6 w-3 hover:bg-hover_state hover:text-white" href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="text-xs h-6 w-3 hover:bg-hover_state hover:text-white" href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="text-xs h-6 w-3 hover:bg-hover_state hover:text-white"  href="#">3</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default MainPageFooter;
