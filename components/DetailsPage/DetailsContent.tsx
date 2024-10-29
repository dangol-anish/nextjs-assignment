import Link from "next/link";


interface DetailsContentProps {
  title: string;
  explanation: string;
  url: string;
  hdurl: string;
  date: string | null;
}

const DetailsContent: React.FC<DetailsContentProps> = ({ title, explanation, url, hdurl, date }) => {
  return (
    <div className=" w-full h-[90%]  gap-3 overflow-y-auto border rounded-lg border-border_color bg-default_state">
      <div className="h-[40%] md:h-[55%] p-4 ">
        <img
          src={url}
          className=" h-full w-full border rounded-2xl border-none object-cover"
        />
      </div>
      <div className=" h-[60%] md:h-[45%] overflow-auto p-4 md:flex md:flex-row w-full pt-0 flex flex-col gap-4">
        <div className="text-white no-scrollbar  md:w-[50%]">
          <p>{title}</p>
          <p className="text-sm text-white/70">Date: {date}</p>
          <span className="text-sm text-white/70 flex gap-2">
            <p>HD Image:</p>
            <Link
              href={hdurl}
              className="text-purple-500"
              target="_blank"
            >
              Link
            </Link>
          </span>
        </div>
        <div className=" md:w-[50%] overflow-y-auto h-full no-scrollbar text-white/70">
      {explanation}
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
