import Image from "next/image";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="h-[400px] w-[350px] flex flex-col rounded-md bg-slate-100 shadow-md hover:cursor-pointer hover:scale-105 transition hover:shadow-2xl">
      <Image
        src="/placeholder-image.svg"
        alt={product.title}
        width={300}
        height={300}
      />
      <div className="flex py-2 px-5 justify-between items-center ">
        <h2 className="text-center text-xl md:text-2xl">{product.title}</h2>
        <p className="bg-cyan-700 text-white/90 rounded-sm p-2">
          {product.price} €
        </p>
      </div>
      <p className="m-4 p-2 bg-slate-50 h-20 flex-1">{product.description}</p>
    </div>
  );
}
