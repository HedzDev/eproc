import { Button } from "@/components/ui/button";
import { useGetProductById } from "@/lib/hooks";
import { ThickArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = {
  params: { id: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  const productData = await useGetProductById(id);

  return (
    <>
      <Link href="/products">
        <Button className="bg-slate-700 hover:bg-slate-700/70 text-white/90 w-max mt-3 ml-3">
          <ThickArrowLeftIcon className="md:w-6 md:h-6" />
          <span>Back</span>
        </Button>
      </Link>
      <main className="bg-slate-100 w-[90%] min-h-[85vh] mx-auto mt-4 p-7 flex  md:flex-row flex-col-reverse lg:justify-between">
        <div className="mt-10 space-y-6">
          <h1 className="text-3xl md:text-7xl">{productData.name}</h1>
          <p className="text-xl md:text-3xl w-[80%]">
            {productData.description}
          </p>
          <p className="bg-cyan-700 text-white/90 rounded-sm p-2 w-max">
            {productData.price} €
          </p>
        </div>
        <Image
          src={productData.image}
          alt={productData.name}
          width={200}
          height={200}
          className="object-cover self-center h-[60%] w-[90%] md:h-[60%] md:w-[50%] mt-5 md:self-start"
        />
      </main>
    </>
  );
}
