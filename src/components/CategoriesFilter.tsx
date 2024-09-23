import React from "react";

const filterCategories = ["All", "Clothing", "Accessories"];

export default function CategoriesFilter() {
  return (
    <div className="relative ">
      <ul className="flex justify-start space-x-4 py-6 overflow-x-scroll w-[85%]">
        {filterCategories.map((category, index) => (
          <li
            key={index}
            className="hover:bg-cyan-700 hover:text-white bg-slate-300 px-4 py-2 rounded-md cursor-pointer transition"
          >
            {category}
          </li>
        ))}
      </ul>
      <div>
        <button className="absolute right-0 md:right-[5%] top-[40%]">
          Add
        </button>
        <button className="absolute right-0 md:right-[5%] top-[80%]">
          Delete
        </button>
      </div>
    </div>
  );
}
