import { ProductType } from "@/lib/types";
import { Pencil2Icon, PlusCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import ProductForm from "./ProductForm";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type ModalFormProps = {
  product?: ProductType;
  type: "edit" | "create";
};

export default function ModalForm({ product, type }: ModalFormProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogTrigger asChild>
        {type === "create" ? (
          <Button className="bg-cyan-700 hover:bg-cyan-700/70 text-2xl w-max mt-20">
            <PlusCircledIcon className="w-6 h-6 mr-3" /> Create new Product
          </Button>
        ) : (
          <Button className="absolute top-3 right-3 bg-cyan-700 hover:bg-cyan-700/70 text-white/90 z-10">
            <Pencil2Icon />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{type === "edit" ? "Edit" : "Create"} Item</DialogTitle>
        </DialogHeader>

        <ProductForm
          product={product}
          type={type}
          onFormSubmission={() => setIsFormOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
