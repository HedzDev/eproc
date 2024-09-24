import FilterContextProvider from "@/contexts/FilterContextProvider";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <FilterContextProvider>{children}</FilterContextProvider>;
}
