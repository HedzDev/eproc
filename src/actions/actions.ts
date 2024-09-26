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
