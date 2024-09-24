import { FilterContext } from "@/contexts/FilterContextProvider";
import { useContext } from "react";

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterContextProvider");
  }

  return context;
}
