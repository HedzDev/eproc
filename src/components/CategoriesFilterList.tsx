import { PlusCircledIcon } from "@radix-ui/react-icons";
import Filter from "./Filter";
import { Button } from "./ui/button";

export default function CategoriesFilterList() {
  return (
    <div className="bg-slate-50/70 flex justify-between items-center px-4 rounded-sm mt-2">
      <Filter />

      <Button className="bg-cyan-700 hover:bg-cyan-700/70 text-2xl">
        <PlusCircledIcon />
      </Button>
    </div>
  );
}
