"use client";

import { useFilter } from "@/lib/hooks";
import ProductCard from "./ProductCard";
import { useSearchParams } from "next/navigation";
import { ProductType } from "@/lib/types";
import { Button } from "./ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";

type ProductsListProps = {
  productsData: ProductType[];
};

export default function ProductsList({ productsData }: ProductsListProps) {
  const { selectedFilter } = useFilter();
  const params = useSearchParams();

  const filteredProducts =
    selectedFilter === "all" || !params.get("categories")
      ? productsData
      : productsData?.filter(
          (product) => product.category[0].at(-1) === params.get("categories")
        );

  return (
    <main className="mt-4 flex flex-col items-center justify-around">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {filteredProducts?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>

      <Button className="bg-cyan-700 hover:bg-cyan-700/70 text-2xl w-max mt-20">
        <PlusCircledIcon className="w-6 h-6 mr-3" /> Create new Product
      </Button>
    </main>
  );
}
