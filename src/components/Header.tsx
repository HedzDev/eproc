"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();

  const routes = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
  ];

  return (
    <header className="bg-cyan-700 flex justify-between items-center px-5 py-5">
      <Logo />

      <nav>
        <ul className="flex space-x-2">
          {routes.map(({ label, path }) => (
            <li
              key={path}
              className={cn(
                "rounded-sm px-2 py-1 text-white/80 transition hover:text-white focus:text-white",
                {
                  "bg-black/10 text-white": pathname === path,
                }
              )}
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
