import Brands from "@/components/Brands";
import ProductCard from "@/components/ProductCard";

const productsData = [
  {
    id: "1",
    title: "Product 1",
    description: "Description of product 1",
    price: 100,
    image: "",
  },
  {
    id: "2",
    title: "Product 2",
    description:
      "lorem40 Description of product 2 lorem40 Description of product 2 lorem40 Description of product 2 ",
    price: 200,
    image: "",
  },
  {
    id: "3",
    title: "Product 3",
    description: "Description of product 3",
    price: 300,
    image: "",
  },
];

export default function Home() {
  const products = productsData.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="flex items-center md:h-[calc(100vh-200px)] mt-10 flex-col">
      <Brands />

      <section className="flex flex-col md:flex-row gap-4 md:gap-6 mt-20">
        {products}
      </section>
    </main>
  );
}
