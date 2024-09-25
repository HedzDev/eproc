import Brands from "@/components/Brands";
import TopProducts from "@/components/TopProducts";

export default function Home() {
  return (
    <main className="flex items-center min-h-screen mt-7 flex-col">
      <Brands />

      <TopProducts />
    </main>
  );
}
