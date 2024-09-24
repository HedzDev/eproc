import { ProductType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="h-[500px] w-[350px] flex flex-col rounded-md bg-slate-100 shadow-md hover:cursor-pointer hover:scale-[102%] transition hover:shadow-2xl">
        <Image
          src="/poster.jpg"
          alt={product.title}
          width={200}
          height={200}
          priority
        />
        <div className="flex py-2 px-5 justify-between items-center ">
          <h2 className="text-center text-xl md:text-2xl">{product.title}</h2>
          <p className="bg-cyan-700 text-white/90 rounded-sm p-2">
            {product.price} €
          </p>
        </div>
        <p className="m-4 p-2 bg-slate-50 h-20 flex-1">{product.description}</p>
      </div>
    </Link>
  );
}
