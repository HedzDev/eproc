"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-cyan-700 border-slate-400 flex justify-between items-center px-5 py-5">
      <Logo />

      <nav>
        <ul className="flex space-x-2">
          <li
            className={`text-slate-200 font-semibold transition ${
              pathname === "/"
                ? "bg-white text-slate-600 px-2 rounded-sm font-bold"
                : "hover:bg-slate-300 text-slate-600 px-2 rounded-sm"
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`text-slate-200 font-semibold ${
              pathname === "/products"
                ? "bg-white text-slate-600 px-2 rounded-sm font-bold"
                : ""
            }`}
          >
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
