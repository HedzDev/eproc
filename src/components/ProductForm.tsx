"use client";

import { createProduct, editProduct } from "@/actions/actions";
import { ProductType } from "@/lib/types";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type ProductFormProps = {
  product?: ProductType;
  onFormSubmission: () => void;
  type: "edit" | "create";
};

export default function ProductForm({
  product,
  onFormSubmission,
  type,
}: ProductFormProps) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues:
      type === "edit"
        ? {
            name: product?.name,
            description: product?.description,
            price: product?.price,
            image: product?.image,
            category: product?.category,
          }
        : undefined,
  });
  console.log(product);

  return (
    <form
      action={async () => {
        const result = await trigger();

        if (!result) return;

        onFormSubmission();

        if (type === "edit") {
          if (product) {
            await editProduct(
              new FormData(event?.target as HTMLFormElement),
              product.id
            );
          }
        } else if (type === "create") {
          await createProduct(new FormData(event?.target as HTMLFormElement));
        }
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

      {type === "create" && (
        <div className="space-y-1">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            {...register("category", {
              required: "Category is required",
            })}
          />
          {errors.category && (
            <p className="text-red-500">{String(errors.category.message)}</p>
          )}
        </div>
      )}

      <div className="space-y-1">
        {type === "edit" && (
          <Input id="category" type="hidden" {...register("category")} />
        )}
        <Button type="submit" className="mt-4">
          {type === "edit" ? "Edit" : "Create"}
        </Button>
      </div>
    </form>
  );
}
