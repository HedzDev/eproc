import AddCategoryBtn from "./AddCategoryBtn";
import FilterList from "./FiltersList";

export default function CategoriesFilterBlock() {
  return (
    <div className=" bg-slate-50/70 flex justify-between items-center px-4 rounded-sm mt-2">
      <FilterList />

      <AddCategoryBtn />
    </div>
  );
}
