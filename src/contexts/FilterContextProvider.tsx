"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { createContext, useState } from "react";

type TFilterContextProps = {
  children: React.ReactNode;
};

type TFilterContext = {
  selectedFilter: string;
  handleFilter: (option: string) => void;
  filterOptions: { value: string; label: string }[];
};

export const FilterContext = createContext<TFilterContext | null>(null);

export default function FilterContextProvider({
  children,
}: TFilterContextProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterOptions = [
    { value: "all", label: "All" },
    { value: "t-shirt", label: "T-Shirt" },
    { value: "jeans", label: "Jeans" },
    { value: "sneackers", label: "Sneackers" },
  ];

  function createQueryString(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  }

  function handleFilter(option: string) {
    router.push(`products?${createQueryString("category", option)}`);
    setSelectedFilter(option);
  }

  return (
    <FilterContext.Provider
      value={{
        selectedFilter,
        handleFilter,
        filterOptions,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
