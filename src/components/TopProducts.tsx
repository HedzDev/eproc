import { useFetchProducts } from "@/lib/hooks";
import React from "react";
import ProductCard from "./ProductCard";

export default async function TopProducts() {
  const productsData = await useFetchProducts();
  const onlyTopArticles = productsData.slice(0, 3);

  const products = onlyTopArticles.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-6 mt-10">
      {products}
    </section>
  );
}
