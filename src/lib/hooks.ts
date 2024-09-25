import { FilterContext } from "@/contexts/FilterContextProvider";
import { ProductType } from "@/lib/types";
import axios from "axios";
import https from "https";
import { useContext } from "react";

const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterContextProvider");
  }

  return context;
}

export async function useFetchProducts() {
  try {
    const { data } = await api.get("http://localhost:80/products");
    if (!data) throw new Error("No data found");

    const productsData: ProductType[] = data["hydra:member"];

    return productsData;
  } catch (error) {
    console.error(error);
  }
}

export async function useGetProductById(id: string) {
  try {
    const { data } = await api.get(`http://localhost:80/products/${id}`);
    if (!data) throw new Error("No data found");

    const productData: ProductType = data;

    return productData;
  } catch (error) {
    console.error(error);
  }
}

export async function useFetchCategories() {
  try {
    const { data } = await api.get("http://localhost:80/categories");
    if (!data) throw new Error("No data found");

    const categoriesData = data["hydra:member"];

    return categoriesData;
  } catch (error) {
    console.error(error);
  }
}
