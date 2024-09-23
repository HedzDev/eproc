import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    id: "1",
    title: "Product 1",
    description: "Description 1",
    price: 100,
    image: "",
  },
  {
    id: "2",
    title: "Product 2",
    description: "Description 2",
    price: 200,
    image: "",
  },
  {
    id: "3",
    title: "Product 3",
    description: "Description 3",
    price: 300,
    image: "",
  },
  {
    id: "4",
    title: "Product 4",
    description: "Description 4",
    price: 400,
    image: "",
  },
  {
    id: "5",
    title: "Product 5",
    description: "Description 5",
    price: 500,
    image: "",
  },
  {
    id: "6",
    title: "Product 6",
    description: "Description 6",
    price: 600,
    image: "",
  },
  {
    id: "7",
    title: "Product 7",
    description: "Description 7",
    price: 700,
    image: "",
  },
  {
    id: "8",
    title: "Product 8",
    description: "Description 8",
    price: 800,
    image: "",
  },
  {
    id: "9",
    title: "Product 9",
    description: "Description 9",
    price: 900,
    image: "",
  },
  {
    id: "10",
    title: "Product 10",
    description: "Description 10",
    price: 1000,
    image: "",
  },
  {
    id: "11",
    title: "Product 11",
    description: "Description 11",
    price: 1100,
    image: "",
  },
  {
    id: "12",
    title: "Product 12",
    description: "Description 12",
    price: 1200,
    image: "",
  },
  {
    id: "13",
    title: "Product 13",
    description: "Description 13",
    price: 1300,
    image: "",
  },
  {
    id: "14",
    title: "Product 14",
    description: "Description 14",
    price: 1400,
    image: "",
  },
  {
    id: "15",
    title: "Product 15",
    description: "Description 15",
    price: 1500,
    image: "",
  },
  {
    id: "16",
    title: "Product 16",
    description: "Description 16",
    price: 1600,
    image: "",
  },
  {
    id: "17",
    title: "Product 17",
    description: "Description 17",
    price: 1700,
    image: "",
  },
  {
    id: "18",
    title: "Product 18",
    description: "Description 18",
    price: 1800,
    image: "",
  },
  {
    id: "19",
    title: "Product 19",
    description: "Description 19",
    price: 1900,
    image: "",
  },
  {
    id: "20",
    title: "Product 20",
    description: "Description 20",
    price: 2000,
    image: "",
  },
  {
    id: "21",
    title: "Product 21",
    description: "Description 21",
    price: 2100,
    image: "",
  },
  {
    id: "22",
    title: "Product 22",
    description: "Description 22",
    price: 50,
    image: "",
  },
];

export default function Products() {
  return (
    <main className="mt-4">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productsData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </main>
  );
}
