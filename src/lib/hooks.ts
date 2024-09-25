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
  const { data } = await api.get("http://localhost:80/products");
  const productsData: ProductType[] = data["hydra:member"];

  return productsData;
}

export async function useGetProductById(id: string) {
  const { data } = await api.get(`http://localhost:80/products/${id}`);
  const productData: ProductType = data;

  return productData;
}
