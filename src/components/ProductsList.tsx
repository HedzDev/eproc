import { useFetchProducts } from "@/lib/hooks";
import ProductCard from "./ProductCard";

export default async function ProductsList() {
  const productsData = await useFetchProducts();

  return (
    <main className="mt-4 flex justify-around">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {productsData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </main>
  );
}
