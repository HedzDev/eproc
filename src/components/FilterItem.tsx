"use client";

import { useFilter } from "@/lib/hooks";
import { CategoryType } from "@/lib/types";
import { cn } from "@/lib/utils";

type FilterItemProps = {
  option: CategoryType;
};
export default function FilterItem({ option }: FilterItemProps) {
  const { selectedFilter, handleFilter } = useFilter();

  return (
    <li
      onClick={() => handleFilter(option.id)}
      className={cn(
        "hover:bg-cyan-700 hover:text-white bg-slate-300 px-5 md:px-4 py-2 rounded-md cursor-pointer transition",
        {
          "bg-cyan-700 text-white": selectedFilter === option.id,
        }
      )}
    >
      {option.name}
    </li>
  );
}
