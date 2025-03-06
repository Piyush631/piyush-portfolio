"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  link: {
    url: string;
    title: string;
  };
}

export function Navlinks({ link }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <div>
      <Link
        className={`rounded text-xl p-1 ${
          pathName === link.url ? "bg-black text-white dark:bg-white dark:text-black" : ""
        }`}
        href={link.url}
      >
        {link.title}
      </Link>
    </div>
  );
}
