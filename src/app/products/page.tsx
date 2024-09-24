import CategoriesFilterList from "@/components/CategoriesFilterList";
import ProductsList from "@/components/ProductsList";
import React from "react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <CategoriesFilterList />

      <ProductsList />
    </div>
  );
}
