"use client";

import { deleteProduct } from "@/actions/actions";
import { ProductType } from "@/lib/types";
import { TrashIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import ModalForm from "./ModalForm";
import { Button } from "./ui/button";

type ProductCardProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative">
      <ModalForm type="edit" product={product} />

      <Button
        onClick={async () => await deleteProduct(product.id)}
        className="absolute top-14 right-3 bg-cyan-700 hover:bg-cyan-700/70 text-white/90 z-10"
      >
        <TrashIcon />
      </Button>

      <Link href={`/products/${product.id}`}>
        <div className="h-[500px] w-[350px] flex flex-col rounded-md bg-slate-100 shadow-md hover:cursor-pointer hover:scale-[102%] transition hover:shadow-2xl">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-cover h-[60%] w-[80%] self-center mt-5"
            priority
          />

          <div className="flex py-2 px-5 justify-between items-center mt-auto">
            <h2 className="text-center text-xl md:text-2xl">{product.name}</h2>
            <p className="bg-cyan-700 text-white/90 rounded-sm p-2">
              {product.price} €
            </p>
          </div>
          <p className="mx-3 mb-2 p-2 bg-slate-50 max-h-28 flex-1 ">
            {product.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
