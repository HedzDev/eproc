import { useFetchCategories } from "@/lib/hooks";
import { CategoryType } from "@/lib/types";
import FilterItem from "./FilterItem";

export default async function FiltersList() {
  const categoriesData = await useFetchCategories();

  return (
    <ul className="flex justify-start space-x-4 py-6 overflow-x-scroll w-[75%] md:w-[90%]">
      {categoriesData?.map((option: CategoryType, index: number) => (
        <FilterItem key={index} option={option} />
      ))}
    </ul>
  );
}
