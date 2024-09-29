"use server";

import axios from "axios";
import https from "https";
import { revalidatePath } from "next/cache";

const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export async function createCategory(formData: FormData) {
  const data = {
    name: formData.get("category"),
  };

  try {
    if (!data.name) {
      throw new Error("Category name is required");
    }

    await api.post("http://localhost:80/categories", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/ld+json",
      },
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/categories");
}

export async function createProduct(formData: FormData) {
  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
    price: +(formData.get("price") || 0),
    image: formData.get("image"),
    category: formData.getAll("category").map((cat) => `/categories/${cat}`),
  };

  try {
    await api.post("http://localhost:80/products", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/ld+json",
      },
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/products");
}

export async function editProduct(formData: FormData, id: number) {
  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
    price: +(formData.get("price") || 0),
    image: formData.get("image"),
    category: formData.getAll("category"),
  };

  try {
    await api.put(`http://localhost:80/products/${id}`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/ld+json",
      },
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/products");
}

export async function deleteProduct(id: number) {
  try {
    if (!id) {
      throw new Error("Product ID is required");
    }
    await api.delete(`http://localhost:80/products/${id}`);
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/products");
}
