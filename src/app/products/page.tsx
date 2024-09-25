import CategoriesFilterBlock from "@/components/CategoriesFilterBlock";
import ProductsList from "@/components/ProductsList";
import { useFetchProducts } from "@/lib/hooks";

export default async function ProductsPage() {
  const productsData = await useFetchProducts();

  if (!productsData) return null;

  return (
    <div className="min-h-screen">
      <CategoriesFilterBlock />

      <ProductsList productsData={productsData} />
    </div>
  );
}
