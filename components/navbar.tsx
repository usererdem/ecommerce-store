"use client"

import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import TechStore from "@/components/navbar-tech-store";
import { useEffect, useState } from "react";
import { Category } from "@/types";

export const revalidate = 0;

const Navbar = () => {
  const fetchCategories = async () => {
    setCategories(await getCategories())
  }
  const [categories, setCategories] = useState<Category[]>();
  useEffect(() => {
    fetchCategories()
  },[])
  /* const categories = await getCategories(); */

  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link
            href='https://ecommerce-store-usererdem.vercel.app'
            className='flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl py-2 px-3 rounded-full hover:text-gray-50 hover:bg-black transition-all'>CLOTHY</p>
          </Link>
          <MainNav data={categories || []} />
          <TechStore />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
