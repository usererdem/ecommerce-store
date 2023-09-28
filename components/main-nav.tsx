"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='flex items-center order-1 md:order-none pl-3'>
      {/* Hamburger Menu */}
      <div
        onClick={toggleMenu}
        className={`md:hidden cursor-pointer z-50 ${
          isOpen ? "rotate-90" : "rotate-0"
        } transition-transform duration-300`}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
      {/*  */}
      <nav
        className={cn(
          "items-center justify-start space-x-4 flex flex-col absolute right-0 top-0 p-14 z-10 w-full bg-slate-200 md:bg-transparent md:mx-6 md:p-0 md:flex-row md:static lg:space-x-6 transition-all duration-500",
          isOpen ? "top-0" : "top-[-500px]"
        )}>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-4xl pb-6 md:pb-0 md:text-sm md:font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}>
            {" "}
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNav;
