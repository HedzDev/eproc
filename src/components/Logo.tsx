import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image className="" src="/logo.png" alt="Logo" width={50} height={50} />
    </Link>
  );
}
