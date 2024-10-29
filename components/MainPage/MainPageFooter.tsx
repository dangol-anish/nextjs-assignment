import Image from "next/image";
import Link from "next/link";
import Portfolio from "../../public/portfolio.svg";
import Github from "../../public/github.svg";
import Mail from "../../public/mail.svg";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { MainPageFooterProps } from "@/types";

const MainPageFooter: React.FC<MainPageFooterProps> = ({ currentPage, onPageChange }) => {
  return (
    <div className=" h-[10%] w-full flex justify-between items-end text-white/70">
      <div className="w-[60%] h-[50%]  rounded-md text-xs flex items-center justify-start">
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

      <Pagination className="w-[40%] lg:w-[25%] h-[50%] rounded-md m-0 flex justify-center items-center bg-default_state border border-border_color">
        <PaginationContent>
          {[1, 2, 3, 4].map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                className={`cursor-pointer text-xs h-6 w-3 ${
                  page === currentPage ? "bg-hover_state text-white" : ""
                } hover:bg-hover_state hover:text-white`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default MainPageFooter;
