"use client";

import { ProductType } from "@/lib/types";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EditItemForm from "./EditItemForm";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type ProductCardProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    e.preventDefault();
    console.log("Delete product");
  }

  return (
    <div className="relative">
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogTrigger asChild>
          <Button className="absolute top-3 right-3 bg-cyan-700 hover:bg-cyan-700/70 text-white/90 z-10">
            <Pencil2Icon />
          </Button>
        </DialogTrigger>

        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Edit Item</DialogTitle>
          </DialogHeader>

          <EditItemForm
            product={product}
            onFormSubmission={() => setIsFormOpen(false)}
          />
        </DialogContent>
      </Dialog>

      <Button
        onClick={handleDelete}
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
