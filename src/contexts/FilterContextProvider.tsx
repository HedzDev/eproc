"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { createContext, useState } from "react";

type TFilterContextProps = {
  children: React.ReactNode;
};

type TFilterContext = {
  selectedFilter: string;
  handleFilter: (option: string) => void;
};

export const FilterContext = createContext<TFilterContext | null>(null);

export default function FilterContextProvider({
  children,
}: TFilterContextProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilter, setSelectedFilter] = useState(() => {
    return searchParams.get("categories") || "all";
  });

  function createQueryString(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  }

  function handleFilter(option: string) {
    router.push(`products?${createQueryString("categories", option)}`);

    setSelectedFilter(option);
  }

  return (
    <FilterContext.Provider
      value={{
        selectedFilter,
        handleFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
