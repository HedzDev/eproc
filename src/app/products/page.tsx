import CategoriesFilter from "@/components/CategoriesFilter";
import Products from "@/components/Products";
import React from "react";

export default function ProductsPage() {
  return (
    <div>
      <CategoriesFilter />

      <Products />
    </div>
  );
}
