import Filter from "./Filter";

export default function CategoriesFilterList() {
  return (
    <div className=" bg-slate-50/70 flex justify-between px-4 rounded-sm mt-2">
      <Filter />

      <div className="bg-cyan-700/50 my-4 flex justify-between px-3 md:px-4 rounded-full ml-auto">
        <button className="text-xl md:text-3xl">+</button>
      </div>
    </div>
  );
}
