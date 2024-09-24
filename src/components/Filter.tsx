"use client";

import { useFilter } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export default function Filter() {
  const { selectedFilter, handleFilter, filterOptions } = useFilter();

  return (
    <ul className="flex justify-start space-x-4 py-6 overflow-x-scroll w-[75%] md:w-[90%]">
      {filterOptions.map((option, index) => (
        <li
          key={index}
          onClick={() => handleFilter(option.value)}
          className={cn(
            "hover:bg-cyan-700 hover:text-white bg-slate-300 px-5 md:px-4 py-2 rounded-md cursor-pointer transition",
            {
              "bg-cyan-700 text-white": selectedFilter === option.value,
            }
          )}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
}
