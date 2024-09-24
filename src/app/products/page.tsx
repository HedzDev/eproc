import CategoriesFilter from "@/components/CategoriesFilter";
import Products from "@/components/Products";
import React from "react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <CategoriesFilter />

      <Products />
    </div>
  );
}
