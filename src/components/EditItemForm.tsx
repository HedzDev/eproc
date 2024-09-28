"use client";

import { editProduct } from "@/actions/actions";
import { ProductType } from "@/lib/types";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type EditItemFormProps = {
  product: ProductType;
  onFormSubmission: () => void;
};

export default function EditItemForm({
  product,
  onFormSubmission,
}: EditItemFormProps) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category,
    },
  });

  return (
    <form
      action={async () => {
        const result = await trigger();

        if (!result) return;

        await editProduct(
          new FormData(event?.target as HTMLFormElement),
          product.id
        );
        onFormSubmission();
      }}
    >
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...register("name", {
            required: "Name is required",
            maxLength: {
              value: 50,
              message: "Name is too long",
            },
          })}
        />
        {errors.name && (
          <p className="text-red-500">{String(errors.name.message)}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register("description", {
            required: "Description is required",
            maxLength: {
              value: 100,
              message: "Description is too long",
            },
          })}
        />
        {errors.description && (
          <p className="text-red-500">{String(errors.description.message)}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="price">Price</Label>
        <Input
          step="any"
          id="price"
          {...register("price", {
            required: "Price is required",
            valueAsNumber: true,
          })}
        />
        {errors.price && (
          <p className="text-red-500">{String(errors.price.message)}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="image">Image</Label>
        <Input
          id="image"
          {...register("image", {
            required: "Image is required",
          })}
        />
        {errors.image && (
          <p className="text-red-500">{String(errors.image.message)}</p>
        )}
      </div>

      <div className="space-y-1">
        <Input id="category" type="hidden" {...register("category")} />
        <Button type="submit" className="mt-4">
          Edit
        </Button>
      </div>
    </form>
  );
}
