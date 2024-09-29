"use client";

import { useFilter } from "@/lib/hooks";
import { ProductType } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import ModalForm from "./ModalForm";
import ProductCard from "./ProductCard";

type ProductsListProps = {
  productsData: ProductType[];
};

export default function ProductsList({ productsData }: ProductsListProps) {
  const { selectedFilter } = useFilter();

  const params = useSearchParams();
  const regex = /\/categories\/(\d+)/;

  const filteredProducts =
    selectedFilter === "all" || !params.get("categories")
      ? productsData
      : productsData?.filter((product) => {
          const categoryMatch = product.category[0]?.match(regex)?.[1];
          return categoryMatch === params.get("categories");
        });

  return (
    <main className="mt-4 flex flex-col items-center justify-around">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {filteredProducts?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>

      <ModalForm type="create" />
    </main>
  );
}
