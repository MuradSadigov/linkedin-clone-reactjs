import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
type SortBy = "Top" | "Recent";

const Sort = () => {
  const [sortValue, setSortValue] = useState<SortBy>("Top");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const clickHanlder = (sortType: SortBy) => {
    setSortValue(sortType);
    setIsClicked(!isClicked);
  };

  return (
    <button
      onClick={() => setIsClicked(!isClicked)}
      className="w-full relative flex flex-row items-center justify-between"
    >
      <div className="w-[425px] bg-black/25 h-[1px]"></div>
      <div className="text-black/60 text-[12px] flex flex-row justify-between w-[110px] items-center">
        Sort by: <span className="text-black font-[800]">{sortValue}</span>
        <ChevronDownIcon width={16} height={16} color={"black"} />
      </div>
      <div
        className={`${
          isClicked ? "flex" : "hidden"
        } absolute right-0 top-[30px] rounded-[8px] shadow-lg z-50 bg-white flex-col items-start w-[150px] py-[5px]`}
      >
        <button
          onClick={() => clickHanlder("Top")}
          className={`${sortValue == "Top" && "border-l-green-600"} border-l-2 h-[35px] px-[20px] text-black/60 hover:bg-black/10 font-[500] w-full text-left`}
        >
          Top
        </button>
        <button
          onClick={() => clickHanlder("Recent")}
          className={`${sortValue == "Recent" && "border-l-green-600"} border-l-2 h-[35px] px-[20px] text-black/60 hover:bg-black/10 font-[500] w-full text-left`}
        >
          Recent
        </button>
      </div>
    </button>
  );
};

export default Sort;
